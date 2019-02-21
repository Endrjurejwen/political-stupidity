import React from 'react';
import { render } from 'react-testing-library';
import CommentsList from '../CommentsList';

const fakeComments = [
  {
    content: 'to się popisała Pani Premier :)',
    likes: 25,
    user: 'Jaś Gamoń',
    id: 't53regfdgdf',
    timestamp: '14-02-2019'
  },
  {
    content: 'Hahahahaha, nie wierzę',
    likes: 7,
    user: 'Inny Gamoń',
    id: 'sdfdsf45tgdgf',
    timestamp: '14-02-2019'
  }
];

describe('<CommentsList />', () => {
  test('should render list of comments', () => {
    const { getAllByTestId } = render(<CommentsList comments={fakeComments} />);
    const commentsContent = getAllByTestId('comment-content').map(
      commentContent => commentContent.textContent
    );
    const fakeCommentsContent = fakeComments.map(
      fakeComment => fakeComment.content
    );
    expect(commentsContent).toEqual(fakeCommentsContent);
  });
});
