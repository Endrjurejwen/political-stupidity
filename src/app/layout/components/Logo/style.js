import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { color, spacing } from 'utils';

const Link = styled(NavLink)`
  margin-right: auto;
  text-transform: uppercase;
  padding: ${spacing[2]};
  background-color: transparent;
  text-decoration: none;
  color: ${color.textLight};
  cursor: pointer;
`;

export { Link };
