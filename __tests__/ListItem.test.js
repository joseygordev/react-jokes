import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent } from '@testing-library/dom';
import { render } from "@testing-library/react";
import ListItem from '../src/components/ListItem';

describe('ListItem', () => {
  const item = {
    title: 'My title',
    content: 'My content'
  };

  it('Should return the ListItem component without any param', () => {
    const tree = renderer
      .create(
        <ListItem />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should return the ListItem component without onClick param', () => {
    const tree = renderer
      .create(
        <ListItem items={item} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should return the ListItem component with onClick param', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<ListItem items={item} onClick={onClick} />);
    
    const button = getByTestId('button');
    fireEvent.click(button);
  });
});
