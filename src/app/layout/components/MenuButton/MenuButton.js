import React from 'react';
import { bool, func } from 'prop-types';

import * as S from './style';

const menuButton = ({ onToggleMenu, isMenuOpen }) => (
  <S.MenuButton
    aria-label="Menu Button"
    data-testid="menu-button"
    onClick={onToggleMenu}
  >
    <S.MenuIcon isMenuOpen={isMenuOpen} />
  </S.MenuButton>
);

menuButton.propTypes = {
  isMenuOpen: bool.isRequired,
  onToggleMenu: func.isRequired
};

export default menuButton;
