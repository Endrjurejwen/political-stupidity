import React from 'react';
import styled from 'styled-components';
import { Icon } from 'elements';
import { flexCenter, spacing, color } from 'utils';

const userDetails = ({ user }) => (
  <UserContainer>
    <UserAvatar>
      <Icon name="userMan" color={color.textLight} width="3rem" height="3rem" />
    </UserAvatar>
    <UserData>
      <div>{`${user.firstName} ${user.lastName}`}</div>
      <div>endrjurejwen@gmail.com</div>
    </UserData>
  </UserContainer>
);

export default userDetails;

const UserContainer = styled.div`
  ${flexCenter({ justifyContent: 'start' })};
  /* width: 80%; */
  padding: ${spacing[2]};
  /* margin: ${spacing[3]} auto 0; */
  /* background: pink; */
`;

const UserData = styled.div`
  ${flexCenter({ alignItems: 'start' })};
  flex-direction: column;
  margin-left: ${spacing[4]};
`;

const UserAvatar = styled.div`
  & > svg {
    display: block;
  }
`;
