import React from 'react';
import { renderWithReduxAndRouter, fakeComments } from 'utils';
import CommentsList from './CommentsList';

describe('<CommentsList /> with comments', () => {
  test('should render list of comments', () => {
    const { getAllByTestId } = renderWithReduxAndRouter(
      <CommentsList comments={fakeComments} />
    );
    const commentsContent = getAllByTestId('comment-content').map(
      commentContent => commentContent.textContent
    );
    const fakeCommentsContent = fakeComments.map(
      fakeComment => fakeComment.content
    );
    expect(commentsContent).toEqual(fakeCommentsContent);
  });
});
