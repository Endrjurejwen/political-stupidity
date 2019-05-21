import React from 'react';
import { cleanup } from 'react-testing-library';
import { renderWithReduxAndRouter, fakeComments } from 'utils';
import { commentsApp as CommentsApp } from './CommentsApp';

const dispatchMock = jest.fn();
afterEach(cleanup);

describe('<CommentsApp /> with comments', () => {
  test('should render spiner', () => {
    const { getAllByTestId } = renderWithReduxAndRouter(
      <CommentsApp comments={fakeComments} dispatch={dispatchMock} />
    );

    const commentsContent = getAllByTestId('comment-content').map(
      commentContent => commentContent.textContent
    );
    const fakeCommentsContent = fakeComments.map(
      fakeComment => fakeComment.content
    );
    expect(commentsContent).toEqual(fakeCommentsContent);
  });

  test('should render spinner', () => {
    const { getByText } = renderWithReduxAndRouter(
      <CommentsApp dispatch={dispatchMock} />
    );

    expect(getByText(/Wczytuję/i)).toBeInTheDocument();
  });
});
