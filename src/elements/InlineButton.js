import styled from 'styled-components';
import { color, margins, spacing } from 'utils';

export default styled.button`
  font-weight: bold;
  font-size: 0.9rem;
  padding: ${spacing[2]} 0;
  border: none;
  background-color: transparent;
  color: ${props => (props.secondary ? color.textLight : color.action)};
  cursor: pointer;
  text-transform: uppercase;
  ${margins}
`;
