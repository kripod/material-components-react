import React from 'react';
import renderer from 'react-test-renderer';
import ButtonDemo from './ButtonDemo';

it('renders correctly', () => {
  const tree = renderer.create(<ButtonDemo />).toJSON();
  expect(tree).toMatchSnapshot();
});
