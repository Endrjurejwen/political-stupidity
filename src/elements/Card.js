import styled from 'styled-components';
import { elevation, spacing, color } from 'utils';

export default styled.article`
  ${elevation[1]};
  position: relative;
  margin: ${props =>
    props.secondary ? `0 auto ${spacing[4]}` : `0 auto ${spacing[6]}`};
  background-color: ${props =>
    props.secondary ? color.comments : color.backgroundLight};
  max-width: 30rem;
  border-radius: 8px;
`;
