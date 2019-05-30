import { createSelector } from 'reselect';

const getIsMenuOpen = state => state.menu.isMenuOpen;

export const getIsMenuOpenState = createSelector(
  [getIsMenuOpen],
  isMenuOpen => isMenuOpen
);
