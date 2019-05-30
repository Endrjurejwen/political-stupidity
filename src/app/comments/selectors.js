/* eslint import/prefer-default-export: 0 */
import { createSelector } from 'reselect';

const getComments = state => state.firestore.ordered.comments;

export const getCommentsState = createSelector(
  [getComments],
  comments => comments
);

const getIsLoading = state => state.comments.isLoading;

export const getIsLoadingState = createSelector(
  [getIsLoading],
  isLoading => isLoading
);

const getError = state => state.comments.error;

export const getErrorState = createSelector(
  [getError],
  error => error
);
