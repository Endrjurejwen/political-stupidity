import React from 'react';
import { userType } from 'app/auth/propTypes';
import { Icon } from 'elements';
import { color } from 'utils';

import * as S from './style';

const userDetails = ({ user }) => (
  <S.UserContainer data-testid="user-details-container">
    <S.UserAvatar>
      <Icon name="userMan" color={color.textLight} width="3rem" height="3rem" />
    </S.UserAvatar>
    <S.UserData>
      <div data-testid="user-credentials">
        {`${user.firstName} ${user.lastName} (${user.nick})`}
      </div>
      {/* <div>{user.nick}</div> */}
      <div>{user.email}</div>
    </S.UserData>
  </S.UserContainer>
);

userDetails.propTypes = {
  user: userType
};

userDetails.defaultProps = {
  user: null
};

export default userDetails;
