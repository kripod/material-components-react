import classNames from 'classnames';
import React, { PropTypes } from 'react';

const FloatingActionButton = (props) => {
  const isIconSpecifiedByName = typeof props.children === 'string';
  const { className, mini, plain, ...restProps } = props;

  return (
    <button
      {...restProps}
      className={classNames({
        'mdc-fab': true,
        'mdc-fab--mini': mini,
        'mdc-fab--plain': plain,
        'material-icons': isIconSpecifiedByName,
        [className]: true,
      })}
      {...(isIconSpecifiedByName && { 'aria-label': props.children })}
    >
      <span className="mdc-fab__icon">
        {props.children}
      </span>
    </button>
  );
};

FloatingActionButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  mini: PropTypes.bool,
  plain: PropTypes.bool,
};

FloatingActionButton.defaultProps = {
  className: '',
  mini: false,
  plain: false,
};

export default FloatingActionButton;
