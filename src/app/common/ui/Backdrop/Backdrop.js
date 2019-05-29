import React from 'react';
import { func, bool } from 'prop-types';
import { useBodyScrollLock } from 'app/common';

import * as S from './style';

const backdrop = ({ onClose, isShown }) => {
  useBodyScrollLock();
  return (
    <S.Backdrop isAnimated={isShown} data-testid="backdrop" onClick={onClose} />
  )
};

backdrop.propTypes = {
  isShown: bool,
  onClose: func.isRequired
};

backdrop.defaultProps = {
  isShown: false
};

export default backdrop;
