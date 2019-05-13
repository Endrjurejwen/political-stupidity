import styled from 'styled-components';
import { flexCenter, spacing } from 'utils';

const UserContainer = styled.div`
  ${flexCenter({ justifyContent: 'start' })};
  padding: ${spacing[2]};
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

export { UserContainer, UserData, UserAvatar };
