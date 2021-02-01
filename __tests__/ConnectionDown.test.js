import React from 'react';
import renderer from 'react-test-renderer';
import ConnectionDown from '../src/components/ConnectionDown';

describe('ConnectionDown', () => {
  it('Should return the ConnectionDown component', () => {
    const tree = renderer
      .create(<ConnectionDown />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
