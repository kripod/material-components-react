import classNames from 'classnames';
import React, { PropTypes } from 'react';

const Typography = (props) => {
  const {
    className,
    display4,
    display3,
    display2,
    display1,
    headline,
    title,
    subheading,
    body2,
    body1,
    caption,
    adjustMargin,
    ...restProps
  } = props;

  return (
    <span
      {...restProps}
      className={classNames({
        'mdc-typography': true,
        'mdc-typography--display4': display4,
        'mdc-typography--display3': display3,
        'mdc-typography--display2': display2,
        'mdc-typography--display1': display1,
        'mdc-typography--headline': headline,
        'mdc-typography--title': title,
        'mdc-typography--subheading': subheading,
        'mdc-typography--body2': body2,
        'mdc-typography--body1': body1,
        'mdc-typography--caption': caption,
        'mdc-typography--adjust-margin': adjustMargin,
        [className]: true,
      })}
    >
      {props.children}
    </span>
  );
};

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  display4: PropTypes.bool,
  display3: PropTypes.bool,
  display2: PropTypes.bool,
  display1: PropTypes.bool,
  headline: PropTypes.bool,
  title: PropTypes.bool,
  subheading: PropTypes.bool,
  body2: PropTypes.bool,
  body1: PropTypes.bool,
  caption: PropTypes.bool,
  adjustMargin: PropTypes.bool,
};

Typography.defaultProps = {
  className: '',
  display4: false,
  display3: false,
  display2: false,
  display1: false,
  headline: false,
  title: false,
  subheading: false,
  body2: false,
  body1: false,
  caption: false,
  adjustMargin: false,
};

export default Typography;
