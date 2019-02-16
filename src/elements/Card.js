import styled from 'styled-components';
import { elevation, spacing } from 'utils';

export default styled.article`
  ${elevation[1]};
  /* margin: 0 auto ${spacing[6]}; */
  margin: ${props =>
    props.secondary ? `0 auto ${spacing[4]}` : `0 auto ${spacing[6]}`};
  background-color: ${props => (props.secondary ? '#e2e3e4' : '#eee')};
  max-width: 30rem;
  border-radius: 8px;
  padding: ${spacing[2]} ${spacing[3]};
`;
