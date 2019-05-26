import React from 'react';
import { fireEvent, render, cleanup } from 'react-testing-library';
import { fakeComment, fakeMatch, fakeUser } from 'utils';
import { likeCommentButton as LikeComment } from './LikeComment';

const likeCommentMock = jest.fn();
const dislikeCommentMock = jest.fn();

afterEach(cleanup);

const fakeCommentLiked = { ...fakeComment, likes: { 123: true } };

describe('<LikeComment with likeComment, dislikeComment, match, user and comment', () => {
  test('should fire like or dislike function when button was clicked', () => {
    const { getByText, rerender } = render(
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

    rerender(
      <LikeComment
        likeComment={likeCommentMock}
        dislikeComment={dislikeCommentMock}
        match={fakeMatch}
        comment={fakeCommentLiked}
        user={fakeUser}
      />
    );

    fireEvent.click(getByText(/polub lub przestań lubić/i));
    expect(dislikeCommentMock).toHaveBeenCalledTimes(1);
    expect(dislikeCommentMock).toHaveBeenCalledWith(
      fakeMatch.params.id,
      fakeComment.id
    );
    expect(likeCommentMock).toHaveBeenCalledTimes(1);
  });
});
