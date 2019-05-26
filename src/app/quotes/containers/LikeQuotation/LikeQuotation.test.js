import React from 'react';
import { cleanup } from 'react-testing-library';
import { fakeQuotation, fakeUser, renderWithReduxAndRouter } from 'utils';
import { likeQuotationButton as LikeQuotation } from './LikeQuotation';

const likeQuotationMock = jest.fn();
const dislikeQuotationMock = jest.fn();

afterEach(cleanup);

console.error = jest.fn();

describe('<LikeQuotation /> with likeQuotation, dislikeQuotation, user and quotation', () => {
  test('should fire like or dislike function when button was clicked', () => {
    const { getByText } = renderWithReduxAndRouter(
      <LikeQuotation
        quotation={fakeQuotation}
        user={fakeUser}
        likeQuotation={likeQuotationMock}
        dislikeQuotation={dislikeQuotationMock}
      />
    );

    expect(getByText(/polub lub przestań lubić/i)).toBeInTheDocument();
  });
});
