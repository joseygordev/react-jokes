import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './styles';

const Container = ({children}) => (
  <div style={styles.root}>
    <div style={styles.wrapper}>
      {children}
    </div>
  </div>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
Container.defaultProps = {
};

export default Container;
