import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { media, color, spacing } from 'utils';

const menuButton = ({ toggleMenu, isOpen }) => (
  <MenuBtn
    aria-label="Menu Button"
    data-testid="menu-button"
    onClick={toggleMenu}
  >
    <MenuIcon isOpen={isOpen} />
  </MenuBtn>
);

menuButton.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default menuButton;

const MenuBtn = styled.button`
  display: block;
  z-index: 40;
  cursor: pointer;
  height: 100%;
  border: none;
  background-color: transparent;
  padding: 0 ${spacing[3]};

  ${media.tablet`
    display: none;
  `}
`;

const MenuIcon = styled.div`
  position: relative;
  background-color: ${({ isOpen }) =>
    isOpen ? 'transparent' : color.textLight};
  width: 22px;
  height: 2px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: ${color.textLight};
    width: 22px;
    height: 2px;
    left: 0;
    transition: transform 0.2s ease-out;
  }

  &::before {
    top: ${({ isOpen }) => (isOpen ? '0' : '-6px')};
    transform: ${({ isOpen }) => (isOpen ? 'rotate(135deg)' : 'rotate(0deg)')};
  }

  &::after {
    top: ${({ isOpen }) => (isOpen ? '0' : '6px')};
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-135deg)' : 'rotate(0deg)')};
  }
`;
