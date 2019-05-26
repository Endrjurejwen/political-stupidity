import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { media, color, flexCenter, spacing } from 'utils';

export default styled(NavLink)`
  text-transform: uppercase;
  padding: ${spacing[2]};
  font-size: 1.2rem;
  background-color: transparent;
  display: block;
  width: 100%;
  text-decoration: none;
  color: ${color.textLight};
  cursor: pointer;
  height: 100%;
  transition: color 0.2s;

  position: relative;

  &::after {
    position: absolute;
    bottom: -2px;
    left: 0;
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background-color: ${color.textLight};
    transition: width 0.15s ease-in-out;
  }

  &:hover {
    color: ${color.secondary};
  }

  &:hover::after {
    width: 100%;
  }

  ${media.desktop`
    ${flexCenter()};

    font-size: .7rem;
    background-color: transparent;
    height: 100%;
    border-bottom: 2px solid transparent;

    &.active {
      border-bottom: 2px solid ${color.textLight};
    }

    &:hover {
      color: ${color.secondary};
    }
  `}
`;
