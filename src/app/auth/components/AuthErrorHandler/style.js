import styled from 'styled-components';
import { spacing, color } from 'utils';

const Wrapper = styled.article`
  background-color: inherit;
  padding: ${spacing[3]} ${spacing[2]};
  margin-top: ${spacing[4]};
  border-top: 2px solid ${color.invalid};
  border-bottom: 2px solid ${color.invalid};
  max-width: 30rem;
`;

export { Wrapper };
