import 'material-components-web/dist/material-components-web.css';
import 'normalize.css';
import React from 'react';
import './App.css';
import ButtonDemo from './ButtonDemo';
import CheckboxDemo from './CheckboxDemo';
import FabDemo from './FabDemo';
import ThemeDemo from './ThemeDemo';
import TypographyDemo from './TypographyDemo';

const App = () =>
  <main>
    <ThemeDemo>
      <ButtonDemo />
      <CheckboxDemo />
      <FabDemo />
      <TypographyDemo />
    </ThemeDemo>
  </main>
;

export default App;
