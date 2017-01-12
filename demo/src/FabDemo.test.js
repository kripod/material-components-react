import React from 'react';
import renderer from 'react-test-renderer';
import FabDemo from './FabDemo';

it('renders correctly', () => {
  const tree = renderer.create(<FabDemo />).toJSON();
  expect(tree).toMatchSnapshot();
});
