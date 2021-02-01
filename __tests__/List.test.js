import React from 'react';
import renderer from 'react-test-renderer';
import List from '../src/components/List';

describe('List', () => {
  const items = [{
    id: '1',
    title: 'My title',
    content: 'My content'
  }];

  it('Should return the List component without onClick param', () => {
    const tree = renderer
      .create(
        <List items={items} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should return the List component with onClick param', () => {
    const tree = renderer
      .create(
        <List items={items} onClick={() => {}} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
