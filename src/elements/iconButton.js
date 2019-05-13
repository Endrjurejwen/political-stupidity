import styled from 'styled-components';
import { flexCenter, spacing, color } from 'utils';

export default styled.button`
  ${flexCenter};
  color: ${color.action};
  font-size: 0.9rem;
  padding: ${spacing[1]} ${spacing[2]};

  border: none;
  line-height: 0;
  background-color: transparent;
  cursor: pointer;
`;
