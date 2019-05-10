import React from 'react';
import { func } from 'prop-types';
import { Icon } from 'elements';
import { color } from 'utils';

import * as S from './style';

const logoutButton = ({ onClick }) => (
  <S.LogOutButton onClick={onClick}>
    <Icon name="logout" color={color.textLight} />
  </S.LogOutButton>
);

logoutButton.propTypes = {
  onClick: func
};

logoutButton.defaultProps = {
  onClick: () => null
};

export default logoutButton;
