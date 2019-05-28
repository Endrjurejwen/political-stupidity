import styled from 'styled-components';
import { color, spacing } from 'utils';

export default styled.div`
  color: ${color.textSecondary};
  font-size: 0.85rem;
  text-align: center;
  width: 60%;
  margin: ${spacing[3]} auto;

  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: 50%;
    height: 1px;
    width: 40%;
    background-color: ${color.textSecondary};
  }

  &::before {
    content: '';
    left: 0;
  }

  &::after {
    content: '';
    right: 0;
  }
`;
