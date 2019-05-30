import React from 'react';
import { func, bool } from 'prop-types';

import * as S from './style';

const loginButton = ({ isDesktop, isFixed, onCloseMenu, onClick }) => {
  const handleClick = () => {
    onClick();
    onCloseMenu();
  };
  return (
    <S.ActionButton
      isDesktop={isDesktop}
      isFixed={isFixed}
      onClick={handleClick}
    >
      Zaloguj się
    </S.ActionButton>
  );
};

loginButton.propTypes = {
  isDesktop: bool,
  isFixed: bool,
  onClick: func,
  onCloseMenu: func
};

loginButton.defaultProps = {
  isDesktop: false,
  isFixed: false,
  onClick: () => null,
  onCloseMenu: () => null
};

export default loginButton;
