import React from 'react';
import renderer from 'react-test-renderer';
import Logo from '../src/components/Logo';

describe('Logo', () => {
  it('Should return the Logo component', () => {
    const tree = renderer
      .create(<Logo />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
