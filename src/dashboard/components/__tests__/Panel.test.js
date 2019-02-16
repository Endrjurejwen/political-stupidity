// import React from 'react';
// import { render, fireEvent } from 'react-testing-library';
// import Panel from '../Panel';

// const sortMock = jest.fn();

// describe('<Panel />', () => {
//   test('should call functions when button was clicked', () => {
//     const { getByText } = render(<Panel />);

//     expect(getByText(/najnowsze/i)).toBeInTheDocument();
//     expect(getByText(/najwięcej komentarzy/i)).toBeInTheDocument();
//     expect(getByText(/najwięcej polubień/i)).toBeInTheDocument();

//     fireEvent.click(getByText(/najnowsze/i));
//     expect(sortMock).toHaveBeenCalledTimes(1);

//     fireEvent.click(getByText(/najwięcej komentarzy/i));
//     expect(sortMock).toHaveBeenCalledTimes(2);

//     fireEvent.click(getByText(/najwięcej polubień/i));
//     expect(sortMock).toHaveBeenCalledTimes(3);
//   });
// });

import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Panel from '../Panel';

const sortMock = jest.fn();

describe('<Panel />', () => {
  test('should render correctly', () => {
    const { getByText } = render(<Panel click={sortMock} />);

    expect(getByText(/najnowsze/i)).toBeInTheDocument();
    expect(getByText(/najwięcej komentarzy/i)).toBeInTheDocument();
    expect(getByText(/najwięcej polubień/i)).toBeInTheDocument();

    fireEvent.click(getByText(/najnowsze/i));
    expect(sortMock).toHaveBeenCalledTimes(1);

    fireEvent.click(getByText(/najwięcej komentarzy/i));
    expect(sortMock).toHaveBeenCalledTimes(2);

    fireEvent.click(getByText(/najwięcej polubień/i));
    expect(sortMock).toHaveBeenCalledTimes(3);
  });
});
