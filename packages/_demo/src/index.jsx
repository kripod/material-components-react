import 'normalize.css';
import React from 'react';
import { render } from 'react-dom';
import ButtonDemo from './ButtonDemo';
import FabDemo from './FabDemo';
import './index.css';

render(
  <main>
    <ButtonDemo />
    <FabDemo />
  </main>,
  document.getElementById('root'),
);
