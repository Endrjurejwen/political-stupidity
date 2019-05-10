import styled from 'styled-components';
import { flexCenter, spacing } from 'utils';

const Wrapper = styled.div`
  ${flexCenter({ justifyContent: 'space-between' })};
  font-size: 0.7rem;

  & > *:first-child {
    margin-right: ${spacing[1]};
  }
`;

export { Wrapper };
