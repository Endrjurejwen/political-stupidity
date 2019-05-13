import React from 'react';
import { func } from 'prop-types';
import { color } from 'utils';

import * as S from 'elements';

const logoutButton = ({ onClick }) => (
  <S.IconButton onClick={onClick}>
    <S.Icon name="logout" color={color.textLight} />
  </S.IconButton>
);

logoutButton.propTypes = {
  onClick: func
};

logoutButton.defaultProps = {
  onClick: () => null
};

export default logoutButton;
