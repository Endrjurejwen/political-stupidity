import React from 'react';
import { shape, string } from 'prop-types';
import { Icon } from 'elements';
import { color } from 'utils';

import * as S from './style';

const userDetails = ({ user }) => (
  <S.UserContainer>
    <S.UserAvatar>
      <Icon name="userMan" color={color.textLight} width="3rem" height="3rem" />
    </S.UserAvatar>
    <S.UserData>
      <div>{`${user.firstName} ${user.lastName}`}</div>
      <div>endrjurejwen@gmail.com</div>
    </S.UserData>
  </S.UserContainer>
);

userDetails.propTypes = {
  user: shape({
    firstName: string,
    lastName: string,
    id: string
  })
};

userDetails.defaultProps = {
  user: null
};

export default userDetails;
