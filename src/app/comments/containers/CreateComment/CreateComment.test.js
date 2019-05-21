import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import { fakeMatch } from 'utils';
import { createCommentForm as CreateComment } from './CreateComment';

const createCommentMock = jest.fn(() => Promise.resolve(''));

// Act issue
console.error = jest.fn();

describe('<CreateComment /> with createComment and match', () => {
  test('should create with content and proper id', () => {
    const { getByPlaceholderText, getByText } = render(
      <CreateComment createComment={createCommentMock} match={fakeMatch} />
    );

    const commentInput = getByPlaceholderText(/tutaj wpisz swój komentarz/i);

    expect(commentInput).toBeInTheDocument();

    fireEvent.change(commentInput, {
      target: {
        value: 'lorem ipsum'
      }
    });

    fireEvent.submit(getByText('Skomentuj'));

    expect(createCommentMock).toHaveBeenCalledTimes(1);
    expect(createCommentMock).toHaveBeenCalledWith(
      fakeMatch.params.id,
      'lorem ipsum'
    );
  });
});
