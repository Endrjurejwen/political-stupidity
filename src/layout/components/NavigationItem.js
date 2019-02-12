import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { media, flexCenter, spacing } from 'utils';
import { Link } from 'elements';

const navigationItem = ({ name, path, closeMenu }) => (
  <NavItem>
    <Link data-testid="link" onClick={closeMenu} to={path}>
      {name}
    </Link>
  </NavItem>
);

navigationItem.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
  closeMenu: PropTypes.func
};

navigationItem.defaultProps = {
  name: 'Link',
  path: '/',
  closeMenu: () => {}
};

export default navigationItem;

const NavItem = styled.li`
  ${flexCenter()};

  background-color: transparent;

  ${media.tablet`
    padding: 0 ${spacing[2]};
    height: 100%;
  `}
`;

// const Link = styled(NavLink)`
//   text-transform: uppercase;
//   padding: ${spacing[2]};
//   font-size: 1.4rem;
//   background-color: transparent;
//   display: block;
//   width: 100%;
//   text-decoration: none;
//   color: ${color.textLight};
//   cursor: pointer;
//   height: 100%;
//   transition: color 0.2s;

//   &:hover,
//   &:focus {
//     color: ${color.blue};
//   }

//   ${media.tablet`
//     ${flexCenter()};

//     font-size: 1rem;
//     background-color: transparent;
//     height: 100%;
//     border-bottom: 2px solid transparent;

//     &.active {
//       border-bottom: 2px solid ${color.textLight};
//     }

//     &:hover {
//       color: pink;
//       border-bottom: 2px solid ${color.textLight};
//     }
//   `}
// `;
