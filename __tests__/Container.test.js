import React from 'react';
import renderer from 'react-test-renderer';
import Container from '../src/components/Container';

describe('Container', () => {
  it('Should return the Container component', () => {
    const tree = renderer
      .create(<Container>Content</Container>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
