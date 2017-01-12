import React from 'react';
import ReactDOM from 'react-dom';
import ButtonDemo from './ButtonDemo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ButtonDemo />, div);
});
