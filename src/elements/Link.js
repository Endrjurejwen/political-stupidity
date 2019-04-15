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

  &:hover {
    color: ${color.action};
  }

  ${media.tablet`
    ${flexCenter()};

    font-size: .7rem;
    background-color: transparent;
    height: 100%;
    border-bottom: 2px solid transparent;

    &.active {
      border-bottom: 2px solid ${color.textLight};
    }

    &:hover {
      color: ${color.action};
    }
  `}
`;
