import '@material/fab/dist/mdc.fab.css';
import classNames from 'classnames';
import React, { PropTypes } from 'react';

const FloatingActionButton = (props) => {
  const isIconSpecifiedByName = typeof this.props.children === 'string';

  return (
    <button
      className={classNames({
        'mdc-fab': true,
        'mdc-fab--mini': props.mini,
        'mdc-fab--plain': props.plain,
        'material-icons': isIconSpecifiedByName,
        [props.className]: true,
      })}
      {...(isIconSpecifiedByName && { 'aria-label': this.props.children })}
    >
      <span className="mdc-fab__icon">
        {this.props.children}
      </span>
    </button>
  );
};

FloatingActionButton.propTypes = {
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
