import React from 'react';
import renderer from 'react-test-renderer';
import Error from '../src/components/Error';

describe('Error', () => {
  it('Should return the Error component', () => {
    const tree = renderer
      .create(<Error />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
