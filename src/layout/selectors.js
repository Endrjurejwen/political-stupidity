/* eslint import/prefer-default-export: 0 */

import { createSelector } from 'reselect';

const getIsMenuOpen = state => state.menu.isMenuOpen;

export const getIsMenuOpenState = createSelector(
  [getIsMenuOpen],
  isMenuOpen => isMenuOpen
);
