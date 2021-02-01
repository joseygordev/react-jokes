import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../src/components/Button';

describe('Button', () => {
  it('Should return the Button component', () => {
    const tree = renderer
      .create(<Button label="My button" onClick={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
