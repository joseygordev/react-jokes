import React from 'react';
import { BallBeat } from 'react-pure-loaders';

import theme from '../../config/theme';

const Loader = () => {
  return (
    <BallBeat color={theme.colors.primary} loading />
  );
};

export default Loader;
