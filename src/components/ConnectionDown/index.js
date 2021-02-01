import React from 'react';

// Styles
import styles from './styles';

const ConnectionDown = () => {
  return (
    <div style={styles.root}>
      <p style={styles.message}>You are disconnected, we are doing our best to keep your experience pleasant :)</p>
    </div>
  );
};

export default ConnectionDown;
