import 'normalize.css';
import React from 'react';
import { render } from 'react-dom';
import ButtonDemo from './components/ButtonDemo';
import './index.css';

render(
  <main>
    <ButtonDemo />
  </main>,
  document.getElementById('root')
);
