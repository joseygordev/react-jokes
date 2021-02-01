import React from 'react';
import PropTypes from 'prop-types';

// Components
import ListItem from '../ListItem';

const List = ({items, onClick}) => {
  return (
    <React.Fragment>
      {items.map(item => (
        <ListItem key={item.id} item={item} onClick={onClick} />
      ))}
    </React.Fragment>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string,
    })
  ).isRequired,
  onClick: PropTypes.func
};
List.defaultProps = {
  onClick: null
};

export default List;
