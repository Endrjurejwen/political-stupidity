import styled from 'styled-components';
import { spacing, elevation, color } from 'utils';

const Wrapper = styled.article`
  background-color: inherit;
  padding: ${spacing[3]} ${spacing[2]};
  margin-top: ${spacing[4]};
  border-top: 2px solid ${color.invalid};
  border-bottom: 2px solid ${color.invalid};
  /* ${elevation[5]}; */
  max-width: 30rem;
  /* border-radius: 8px; */
`;

export { Wrapper };
