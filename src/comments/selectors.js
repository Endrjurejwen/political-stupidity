/* eslint import/prefer-default-export: 0 */

import { createSelector } from 'reselect';

const getComments = state => state.firestore.ordered.comments;

export const getCommentsState = createSelector(
  [getComments],
  comments => comments
);
