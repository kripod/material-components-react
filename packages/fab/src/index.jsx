import classNames from 'classnames';
import React, { PropTypes } from 'react';

const FloatingActionButton = (props) => {
  const isIconSpecifiedByName = typeof props.children === 'string';

  return (
    <button
      className={classNames({
        'mdc-fab': true,
        'mdc-fab--mini': props.mini,
        'mdc-fab--plain': props.plain,
        'material-icons': isIconSpecifiedByName,
        [props.className]: true,
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
