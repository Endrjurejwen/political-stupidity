import React from 'react';
import { fireEvent, cleanup } from 'react-testing-library';
import { renderWithReduxAndRouter, fakeComment } from 'utils';
import Comment from './Comment';

afterEach(cleanup);

describe('<Comment /> with comment', () => {
  test('should recieve props and render corectly', () => {
    const { getByTestId } = renderWithReduxAndRouter(
      <Comment comment={fakeComment} />
    );
    const { author, content, likesCount } = fakeComment;

    expect(getByTestId('comment-author')).toHaveTextContent(
      `${author.firstName} ${author.lastName}`
    );
    expect(getByTestId('comment-content')).toHaveTextContent(content);
    expect(getByTestId('button-likes')).toHaveTextContent(likesCount);
  });

  test('should show Edit Box when edit button was clicked', () => {
    const { queryByText } = renderWithReduxAndRouter(
      <Comment comment={fakeComment} />
    );

    expect(queryByText(/zapisz zmiany/i)).not.toBeInTheDocument();
    fireEvent.click(queryByText(/edytuj/i));
    expect(queryByText(/zapisz zmiany/i)).toBeInTheDocument();
  });
});
