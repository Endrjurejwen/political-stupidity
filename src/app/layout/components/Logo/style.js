import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { color, spacing } from 'utils';

const Logo = styled.div`
  cursor: pointer;
  margin-right: ${({ marginAuto }) => (marginAuto ? 'auto' : 0)};
`;

const Link = styled(NavLink)`
  /* margin-right: ${({ marginAuto }) => (marginAuto ? 'auto' : 0)}; */
  text-transform: uppercase;
  padding: ${spacing[2]};
  background-color: transparent;
  text-decoration: none;
  color: ${color.textLight};
  cursor: pointer;
`;

export { Link, Logo };
