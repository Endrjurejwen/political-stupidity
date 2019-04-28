import React from 'react';
import styled from 'styled-components';
import { withUser } from 'common/hoc';
import { absolute, flexCenter } from 'utils';

const toolbox = ({ children, user, id }) => (
  <Wrapper isDisplay={user.id === id}>{children}</Wrapper>
);

// const toolboxWithUser = withUser(toolbox);

export default withUser(toolbox);

const Wrapper = styled.aside`
  ${absolute({ side: 'right' })};
  ${flexCenter({ justifyContent: 'space-between' })};
  display: ${({ isDisplay }) => (isDisplay ? 'flex' : 'none')};
  justify-content: space-between;
  padding: 0;
`;
