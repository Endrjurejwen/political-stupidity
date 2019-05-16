import React from 'react';
import { func } from 'prop-types';
import { color } from 'utils';

import * as S from 'elements';

const logoutButton = ({ onClick, onCloseMenu }) => {
  const handleClick = () => {
    onClick();
    onCloseMenu();
  };
  return (
    <S.IconButton onClick={handleClick}>
      <S.Icon name="logout" color={color.textLight} />
    </S.IconButton>
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
