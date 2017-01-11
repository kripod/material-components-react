import '@material/button/dist/mdc.button.css';
import classNames from 'classnames';
import React, { PropTypes } from 'react';

const Button = props =>
  <button
    className={classNames({
      'mdc-button': true,
      'mdc-button--dense': props.dense,
      'mdc-button--raised': props.raised,
      'mdc-button--compact': props.compact,
      'mdc-button--primary': props.primary,
      'mdc-button--accent': props.accent,
      [props.className]: true,
    })}
  >
    {this.props.children}
  </button>
;

Button.propTypes = {
  className: PropTypes.string,
  dense: PropTypes.bool,
  raised: PropTypes.bool,
  compact: PropTypes.bool,
  primary: PropTypes.bool,
  accent: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  dense: false,
  raised: false,
  compact: false,
  primary: false,
  accent: false,
};

export default Button;