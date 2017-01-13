import classNames from 'classnames';
import React, { PropTypes } from 'react';

const Button = (props) => {
  const { className, dense, raised, compact, primary, accent, ...restProps } = props;

  return (
    <button
      {...restProps}
      className={classNames({
        'mdc-button': true,
        'mdc-button--dense': dense,
        'mdc-button--raised': raised,
        'mdc-button--compact': compact,
        'mdc-button--primary': primary,
        'mdc-button--accent': accent,
        [className]: true,
      })}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
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
