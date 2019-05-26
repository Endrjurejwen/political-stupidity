import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import { fakeComment, fakeMatch } from 'utils';
import { editCommentForm as EditComment } from './EditComment';

const editCommentMock = jest.fn();
const onCloseEditFormMock = jest.fn();

// Act issue
console.error = jest.fn();

describe('<EditComment /> with comment, editComment, match and onCloseEditForm', () => {
  test('should edit comment with content and proper ids', () => {
    const { getByPlaceholderText, getByText } = render(
      <EditComment
        comment={fakeComment}
        editComment={editCommentMock}
        match={fakeMatch}
        onCloseEditForm={onCloseEditFormMock}
      />
    );

    const commentInput = getByPlaceholderText(/tutaj wpisz swój komentarz/i);

    expect(commentInput).toBeInTheDocument();

    fireEvent.change(commentInput, {
      target: {
        value: 'lorem ipsum'
      }
    });

    fireEvent.submit(getByText('Zapisz zmiany'));

    expect(onCloseEditFormMock).toHaveBeenCalledTimes(1);
    expect(editCommentMock).toHaveBeenCalledTimes(1);
    expect(editCommentMock).toHaveBeenCalledWith(
      fakeMatch.params.id,
      fakeComment.id,
      'lorem ipsum'
    );
  });
});
