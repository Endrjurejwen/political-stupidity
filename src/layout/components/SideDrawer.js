import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { color, fixed, elevation, spacing, media } from 'utils';

import Navigation from 'layout/components/Navigation';

const sideDrawer = ({ isOpen, closeMenu, navItems }) => (
  <Container data-testid="sideDrawer" isOpen={isOpen}>
    <Navigation navItems={navItems} closeMenu={closeMenu} />
  </Container>
);

sideDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
  navItems: PropTypes.arrayOf(PropTypes.object).isRequired
};

const Container = styled.div`
  ${fixed()};
  ${elevation[3]};
  display: flex;
  flex-direction: column;
  padding: ${spacing[2]} ${spacing[4]};
  height: 50vh;
  width: 100vw;
  z-index: 30;
  background-color: ${color.primary};
  color: ${color.textLight};
  text-align: center;

  transition: all 0.2s cubic-bezier(0.63, 0.21, 0.66, 1);
  transform: ${({ isOpen }) =>
    isOpen ? 'translateY(0)' : 'translateY(-50vh)'};

  ${media.tablet`
    display: none;
  `}
`;

export default sideDrawer;
