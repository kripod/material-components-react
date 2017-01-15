import React from 'react';
import renderer from 'react-test-renderer';
import CheckboxDemo from './CheckboxDemo';

function createNodeMock() {
  return {
    addEventListener: () => {},
  };
}

it('renders correctly', () => {
  const tree = renderer.create(<CheckboxDemo />, { createNodeMock }).toJSON();
  expect(tree).toMatchSnapshot();
});
