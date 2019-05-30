import { createSelector, createStructuredSelector } from 'reselect';

const getErrorAuth = state => state.auth.error;

export const getErrorAuthState = createSelector(
  [getErrorAuth],
  authError => authError
);

const getIsLoadingAuth = state => state.auth.isLoading;

export const getIsLoadingAuthState = createSelector(
  [getIsLoadingAuth],
  isLoading => isLoading
);

const getFirstName = state => state.firebase.profile.firstName;
const getLastName = state => state.firebase.profile.lastName;
const getNick = state => state.firebase.profile.nick;
const getEmail = state => state.firebase.profile.email;
const getId = state => state.firebase.auth.uid;

export const getUserInfoState = createStructuredSelector({
  firstName: getFirstName,
  lastName: getLastName,
  nick: getNick,
  email: getEmail,
  id: getId
});
