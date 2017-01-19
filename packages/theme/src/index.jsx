import classNames from 'classnames';
import React, { PropTypes } from 'react';

const Theme = (props) => {
  const { className, color, backgroundColor, dark, ...restProps } = props;

  const colorClassNames = color.split(' ');
  const backgroundColorClassNames = backgroundColor.split(' ');

  return (
    <div
      {...restProps}
      className={classNames(
        colorClassNames.map(cn => `mdc-theme--${cn}`),
        backgroundColorClassNames.map(cn => `mdc-theme--${cn}${cn !== 'background' ? '-bg' : ''}`),
        { 'mdc-theme--dark': dark },
        className,
      )}
    >
      {props.children}
    </div>
  );
};

Theme.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  dark: PropTypes.bool,
};

Theme.defaultProps = {
  className: '',
  color: '',
  backgroundColor: '',
  dark: false,
};

export default Theme;
