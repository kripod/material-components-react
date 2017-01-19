import React from 'react';
import renderer from 'react-test-renderer';
import ThemeDemo from './ThemeDemo';

it('renders correctly', () => {
  const tree = renderer.create(<ThemeDemo>Hello, World!</ThemeDemo>).toJSON();
  expect(tree).toMatchSnapshot();
});
