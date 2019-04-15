import React from 'react';
import styled from 'styled-components';
import { func, string } from 'prop-types';

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
  closeMenu: func,
  name: string,
  path: string
};

navigationItem.defaultProps = {
  closeMenu: () => {},
  name: 'Link',
  path: '/'
};

export default navigationItem;

const NavItem = styled.li`
  ${flexCenter()};
  width: 70%;
  background-color: transparent;

  ${media.tablet`
    width: auto;
    padding: 0 ${spacing[2]};
    height: 100%;
  `}
`;
