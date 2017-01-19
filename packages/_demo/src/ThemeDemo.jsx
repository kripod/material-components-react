import React, { PropTypes } from 'react';
import Theme from '../../theme';

const ThemeDemo = props =>
  <div style={{ backgroundColor: '#333' }}>
    <Theme backgroundColor="background">
      {props.children}
    </Theme>

    <Theme color="accent" dark>
      {props.children}
    </Theme>
  </div>
;

ThemeDemo.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeDemo;
