import { createSelector } from 'reselect';

const getAuthError = state => state.auth.authError;

export const makeGetAuthErrorState = () =>
  createSelector(
    [getAuthError],
    authError => authError
  );

const getIsLoading = state => state.auth.isLoading;

export const makeGetIsLoadingState = () =>
  createSelector(
    [getIsLoading],
    isLoading => isLoading
  );
