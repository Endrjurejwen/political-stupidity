import styled from 'styled-components';
import { spacing, color } from 'utils';

const SortButton = styled.button`
  font-family: inherit;
  font-weight: bold;
  font-size: 0.6rem;
  position: relative;
  padding: ${spacing[1]} ${spacing[5]} ${spacing[1]} ${spacing[1]};
  border: none;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${props =>
    props.isActive ? color.action : 'transparent'};
  background-color: transparent;
  color: ${color.textDark};
  cursor: pointer;
  text-transform: uppercase;
  transition: 0.1s background-color ease-in;
  transition: 0.1s color ease-in;

  &::after {
    content: '';
    position: absolute;
    bottom: 0.2rem;
    right: 0.6rem;
    width: 0px;
    height: 0px;
    border: 0.5rem solid;
    border-color: ${props =>
      props.isActive
        ? `${color.textDark} transparent transparent`
        : `${color.textDark} transparent transparent`};
    transform: ${props => (props.asc ? 'rotate(180deg)' : 'rotate(0deg)')};
    transform-origin: center 25%;
    transition: 0.1s transform ease-in;
  }
`;

export { SortButton };
