import React from 'react';
import renderer from 'react-test-renderer';
import Loader from '../src/components/Loader';

describe('Loader', () => {
  it('Should return the Loader component', () => {
    const tree = renderer
      .create(<Loader theme={{ primary: '#000' }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
