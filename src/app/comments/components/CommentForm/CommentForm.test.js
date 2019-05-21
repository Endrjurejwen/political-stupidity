import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import CommentForm from './CommentForm';

const onCommentChangeMock = jest.fn(() => ({ content: '' }));
const onCommentSubmitChange = jest.fn();

describe('<CommentForm /> with onCommentChange, onCommentSubmit and SubmitButtonLabel', () => {
  test('should submit and change input corectly', () => {
    const { getByPlaceholderText, getByText } = render(
      <CommentForm
        onCommentChange={onCommentChangeMock}
        onCommentSubmit={onCommentSubmitChange}
        SubmitButtonLabel="Submit"
      />
    );

    const commentInput = getByPlaceholderText(/tutaj wpisz swój komentarz/i);
    expect(commentInput).toBeInTheDocument();

    fireEvent.change(commentInput, {
      target: {
        value: 'lorem ipsum'
      }
    });
    fireEvent.submit(getByText('Submit'));

    expect(onCommentChangeMock).toHaveBeenCalledTimes(1);
    expect(onCommentSubmitChange).toHaveBeenCalledTimes(1);
  });
});
