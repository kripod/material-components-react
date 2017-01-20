import React from 'react';
import renderer from 'react-test-renderer';
import TypographyDemo from './TypographyDemo';

it('renders correctly', () => {
  const tree = renderer.create(<TypographyDemo />).toJSON();
  expect(tree).toMatchSnapshot();
});
