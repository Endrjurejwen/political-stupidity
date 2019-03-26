import { createSelector, createStructuredSelector } from 'reselect';

const getIsMenuOpen = state => state.menu.isMenuOpen;

export const getIsMenuOpenState = createSelector(
  [getIsMenuOpen],
  isMenuOpen => isMenuOpen
);

const getFirstName = state => state.firebase.profile.firstName;
const getLastName = state => state.firebase.profile.lastName;
const getId = state => state.firebase.auth.uid;

export const getUserInfoState = createStructuredSelector({
  firstName: getFirstName,
  lastName: getLastName,
  id: getId
});
