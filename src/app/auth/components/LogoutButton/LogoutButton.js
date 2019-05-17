import React from 'react';
import { func } from 'prop-types';
import { color } from 'utils';

import * as S from './style';

const logoutButton = ({ onClick, onCloseMenu }) => {
  const handleClick = () => {
    onClick();
    onCloseMenu();
  };
  return (
    <S.LogoutButton onClick={handleClick}>
      <S.Icon name="logout" color={color.textLight} />
      <span>Wyloguj się</span>
    </S.LogoutButton>
  );
};

logoutButton.propTypes = {
  onClick: func,
  onCloseMenu: func
};

logoutButton.defaultProps = {
  onClick: () => null,
  onCloseMenu: () => null
};

export default logoutButton;
