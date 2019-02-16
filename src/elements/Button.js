import styled from 'styled-components';
import { color, elevation, spacing } from 'utils';

export default styled.button`
  ${elevation[1]};

  font-weight: bold;

  padding: ${spacing[1]} ${spacing[4]};
  border-radius: 20px;
  border: 2px solid ${color.action};
  background-color: ${props =>
    props.secondary ? 'transparent' : color.action};
  color: ${props => (props.secondary ? color.textDark : color.textLight)};
  cursor: pointer;
  text-transform: uppercase;
  transition: box-shadow 0.2s ease;

  &:hover {
    ${elevation[2]};
  }
`;
