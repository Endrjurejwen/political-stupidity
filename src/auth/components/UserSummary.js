import React from 'react';
import styled from 'styled-components';
import { Icon } from 'elements';
import { flexCenter, spacing } from 'utils';

const userSummary = ({ name }) => (
  <Wrapper>
    <p>{name}</p>
    <Icon name="userMan" color="#fff" />
  </Wrapper>
);

export default userSummary;

const Wrapper = styled.div`
  ${flexCenter({ justifyContent: 'space-between' })};
  font-size: .7rem;
  /* border: 2px solid transparent;
  height: 100%; */

  & > *:first-child {
    margin-right: ${spacing[1]};
  }
`;
