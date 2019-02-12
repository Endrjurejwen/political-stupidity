import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import NewMovie from './NewMovie';

afterEach(cleanup);

test('<NewMovie', () => {
  const { getByTestId, queryByTestId, container } = render(<NewMovie />);
  const title = getByTestId('page-title');
  const movieForm = queryByTestId('movie-form');

  expect(title.textContent).toBe('New Movie');
  expect(movieForm).toBeTruthy();
  expect(container.firstChild).toMatchSnapshot();
});
