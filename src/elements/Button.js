import styled from 'styled-components';
import { color, elevation, spacing } from 'utils';

export default styled.button`
  ${elevation[2]};

  padding: ${spacing[1]} ${spacing[4]};
  border-radius: 20px;
  border: 1px solid ${color.action};
  background-color: ${color.action};
  color: ${color.textLight};
  cursor: pointer;
  text-transform: uppercase;
  transition: box-shadow 0.2s ease;

  &:hover {
    ${elevation[3]};
  }
`;
