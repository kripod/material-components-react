import React, { PropTypes, PureComponent } from 'react';
import Checkbox from '../../checkbox';

export default class CheckboxDemo extends PureComponent {
  static propTypes = {
    nativeElementId: PropTypes.string,
  };

  static defaultProps = {
    nativeElementId: 'demo-checkbox',
  };

  state = {
    indeterminate: false,
    disabled: false,
  };

  checkboxElement = {};

  render() {
    return (
      <div>
        <div className="mdc-form-field">
          <Checkbox
            ref={(element) => { this.checkboxElement = element; }}
            id={this.props.nativeElementId}
            indeterminate={this.state.indeterminate}
            disabled={this.state.disabled}
          />
          <label htmlFor={this.props.nativeElementId}>This is my checkbox</label>
        </div>

        <button onClick={() => this.setState({ indeterminate: !this.state.indeterminate })}>
          Make Indeterminate
        </button>

        <button onClick={() => this.setState({ disabled: !this.state.disabled })}>
          Toggle Disabled
        </button>
      </div>
    );
  }
}
