import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {metrics} from '../../config/metrics';

import {useMediaQuery} from '../../hooks/useMediaQuery';

// Styles
import styles from './styles';

const Button = ({label, onClick}) => {
  const [hoverActive, setHoverActive] = useState(false);
  const isPageWide = useMediaQuery(metrics.tablet);

  return (
    <button 
      style={{...styles.root, ...(isPageWide && styles.mobile), ...(hoverActive && styles.hover)}} 
      onMouseEnter={() => setHoverActive(true)}
      onMouseLeave={() => setHoverActive(false)} 
      type="button" 
      onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
Button.defaultProps = {
};

export default Button;
