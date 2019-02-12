import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import MovieFrom from './MovieForm';

afterEach(cleanup);

const submitHandler = jest.fn();

test('<MovieFrom', () => {
  const { queryByTestId, getByText, getByTestId } = render(
    <MovieFrom onSubmit={submitHandler} />
  );
  const movieForm = queryByTestId('movie-form');
  const buttonSubmit = getByText('Submit');
  const movieInput = getByTestId('movie-input');

  expect(movieForm).toBeTruthy();

  fireEvent.change(movieInput, {
    target: {
      value: 'hello'
    }
  });

  fireEvent.submit(buttonSubmit);

  expect(submitHandler).toHaveBeenCalledTimes(1);
  expect(submitHandler).toHaveBeenCalledWith({
    text: 'hello'
  });
});
