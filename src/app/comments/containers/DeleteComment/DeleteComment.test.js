import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import { fakeMatch } from 'utils';
import { deleteCommentConfirmation as DeleteComment } from './DeleteComment';

const deleteCommentMock = jest.fn();
const onCloseModalMock = jest.fn();

const fakeCommentID = '1234';

describe('<DeleteComment /> with deleteComment, onCloseModal, match and commentID', () => {
  test('should delete proper comment when button was clicked', () => {
    const { getByText } = render(
      <DeleteComment
        deleteComment={deleteCommentMock}
        onCloseModal={onCloseModalMock}
        match={fakeMatch}
        commentID={fakeCommentID}
      />
    );

    fireEvent.click(getByText(/potwierdzam/i));
    expect(onCloseModalMock).toHaveBeenCalledTimes(1);
    expect(deleteCommentMock).toHaveBeenCalledTimes(1);
    expect(deleteCommentMock).toHaveBeenCalledWith(
      fakeMatch.params.id,
      fakeCommentID
    );
  });
});
