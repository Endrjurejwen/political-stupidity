import React from 'react';
import { fireEvent, render, cleanup } from 'react-testing-library';
import { fakeComment, fakeMatch, fakeUser } from 'utils';
import { likeCommentButton as LikeComment } from './LikeComment';

const likeCommentMock = jest.fn();
const dislikeCommentMock = jest.fn();

afterEach(cleanup);

describe('<LikeComment with deleteComment, onCloseModal, match, user and commentID', () => {
  test('should fire likeComment function when button was clicked', () => {
    const { getByText } = render(
      <LikeComment
        likeComment={likeCommentMock}
        dislikeComment={dislikeCommentMock}
        match={fakeMatch}
        comment={fakeComment}
        user={fakeUser}
      />
    );

    fireEvent.click(getByText(/polub lub przestań lubić/i));
    expect(likeCommentMock).toHaveBeenCalledTimes(1);
    expect(likeCommentMock).toHaveBeenCalledWith(
      fakeMatch.params.id,
      fakeComment.id
    );
    expect(dislikeCommentMock).toHaveBeenCalledTimes(0);
  });
});
