import styled from 'styled-components';
import { flexCenter, spacing, color } from 'utils';

export default styled.button`
  text-indent: -2000px;
  overflow: hidden;
  ${flexCenter};
  color: ${color.action};
  font-size: 0.9rem;
  padding: ${spacing[1]} ${spacing[2]};

  border: none;
  line-height: 0;
  background-color: transparent;
  cursor: pointer;

  svg path, svg g path {
    transition: fill 0.15s ease-in-out;
  }

  &:hover svg path, &:hover svg g path {
    fill: ${color.textDark};
  }

  /* &:hover svg g path {
    fill: ${color.secondary};
  } */
`;
