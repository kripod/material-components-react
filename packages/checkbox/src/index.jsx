import { getCorrectEventName } from '@material/animation';
import { MDCCheckboxFoundation } from '@material/checkbox/dist/mdc.checkbox';
import '@material/checkbox/dist/mdc.checkbox.css';
import React, { PureComponent, PropTypes } from 'react';

const BROWSER_ANIMATION_END_EVENT_NAME = getCorrectEventName(window, 'animationend');

export default class Checkbox extends PureComponent {
  static propTypes = {
    checked: PropTypes.bool,
    indeterminate: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    checked: false,
    indeterminate: false,
    onChange: () => {},
  };

  state = {
    classNames: [],
    checked: Checkbox.defaultProps.checked,
    indeterminate: Checkbox.defaultProps.indeterminate,
  }

  componentDidMount() {
    this.foundation.init();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.checked !== this.props.checked) {
      this.setState({
        checked: nextProps.checked,
        indeterminate: false,
      });
    }

    if (nextProps.indeterminate !== this.props.indeterminate) {
      this.setState({
        indeterminate: nextProps.indeterminate,
      });
    }
  }

  // Since an indeterminate attribute cannot be set on a native checkbox, `componentDidUpdate` is
  // being used to update the indeterminate value of the native checkbox whenever a change occurs
  // (as opposed to doing so within render()).
  componentDidUpdate() {
    if (this.nativeElement) {
      this.nativeElement.indeterminate = this.state.indeterminate;
    }
  }

  componentWillUnmount() {
    this.foundation.destroy();
  }

  rootElement;
  nativeElement;

  foundation = new MDCCheckboxFoundation({
    addClass: className => this.setState(prevState => ({
      classNames: [...prevState.classNames, className],
    })),

    removeClass: className => this.setState(prevState => ({
      classNames: prevState.classNames.filter(cn => cn !== className),
    })),

    registerAnimationEndHandler: (handler) => {
      if (this.rootElement) {
        this.rootElement.addEventListener(BROWSER_ANIMATION_END_EVENT_NAME, handler);
      }
    },

    deregisterAnimationEndHandler: (handler) => {
      if (this.rootElement) {
        this.rootElement.removeEventListener(BROWSER_ANIMATION_END_EVENT_NAME, handler);
      }
    },

    registerChangeHandler: (handler) => {
      if (this.nativeElement) {
        this.nativeElement.addEventListener('change', handler);
      }
    },

    deregisterChangeHandler: (handler) => {
      if (this.nativeElement) {
        this.nativeElement.removeEventListener('change', handler);
      }
    },

    getNativeControl: () => {
      if (!this.nativeElement) {
        throw new Error('Invalid state for operation');
      }

      return this.nativeElement;
    },

    forceLayout: () => this.nativeElement && this.nativeElement.offsetWidth,

    isAttachedToDOM: () => Boolean(this.nativeElement),
  });

  render() {
    return (
      <div
        ref={(element) => { this.rootElement = element; }}
        className={`mdc-checkbox ${this.state.classNames.join(' ')}`}
      >
        <input
          ref={(element) => { this.nativeElement = element; }}
          type="checkbox"
          className="mdc-checkbox__native-control"
          checked={this.state.checked}
          onChange={(event) => {
            this.setState({
              checked: this.nativeElement.checked,
              indeterminate: false,
            });

            // Call custom event handler
            this.props.onChange(event);
          }}
        />

        <div className="mdc-checkbox__background">
          <svg
            version="1.1"
            className="mdc-checkbox__checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              className="mdc-checkbox__checkmark__path"
              fill="none"
              stroke="white"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"
            />
          </svg>

          <div className="mdc-checkbox__mixedmark" />
        </div>
      </div>
    );
  }
}
