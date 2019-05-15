import React from 'react';
import { func } from 'prop-types';
import { color } from 'utils';

import * as S from 'elements';

const logoutButton = ({ onClick, closeMenu }) => {
  const handleClick = () => {
    onClick();
    closeMenu();
  };
  return (
    <S.IconButton onClick={handleClick}>
      <S.Icon name="logout" color={color.textLight} />
    </S.IconButton>
  );
};

logoutButton.propTypes = {
  closeMenu: func,
  onClick: func
};

logoutButton.defaultProps = {
  closeMenu: () => null,
  onClick: () => null
};

export default logoutButton;
