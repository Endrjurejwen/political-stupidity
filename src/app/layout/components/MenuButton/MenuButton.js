import React from 'react';
import { bool, func } from 'prop-types';

import * as S from './style';

const menuButton = ({ toggleMenu, isMenuOpen }) => (
  <S.MenuButton
    aria-label="Menu Button"
    data-testid="menu-button"
    onClick={toggleMenu}
  >
    <S.MenuIcon isMenuOpen={isMenuOpen} />
  </S.MenuButton>
);

menuButton.propTypes = {
  isMenuOpen: bool.isRequired,
  toggleMenu: func.isRequired
};

export default menuButton;
