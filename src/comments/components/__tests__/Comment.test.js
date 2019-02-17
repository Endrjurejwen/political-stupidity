import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Comment from '../Comment';

const likeClickMock = jest.fn();

const fakeComment = {
  body: 'Hahahahaha, nie no, ten to wymyślił',
  likes: 19,
  user: 'Halina Konopna',
  id: 'dsgdfgdff44gdfg',
  timestamp: '04-02-2019'
};

describe('<Comment />', () => {
  test('should receive props and then renders comment', () => {
    const { getByTestId } = render(
      <Comment comment={fakeComment} likeClick={likeClickMock} />
    );

    const { body, user, likes, timestamp } = fakeComment;

    expect(getByTestId('comment-body')).toHaveTextContent(body);
    expect(getByTestId('comment-user')).toHaveTextContent(user);
    expect(getByTestId('button-likes')).toHaveTextContent(likes);
    expect(getByTestId('comment-timestamp')).toHaveTextContent(timestamp);

    fireEvent.click(getByTestId('button-likes'));
    expect(likeClickMock).toHaveBeenCalledTimes(1);
  });
});
