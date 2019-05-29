import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import { fakeHistory } from 'utils';
import { deleteQuotationConfirmation as DeleteQuotation } from './DeleteQuotation';

const deleteQuotationMock = jest.fn(() => Promise.resolve(''));
const onCloseModalMock = jest.fn();

const fakeQuotationID = '1234';

describe('<DeleteQuotation /> with deleteQuotation, onCloseModal, match and quotationID', () => {
  test('should delete proper quotation when button was clicked', () => {
    const { getByText } = render(
      <DeleteQuotation
        deleteQuotation={deleteQuotationMock}
        onCloseModal={onCloseModalMock}
        history={fakeHistory}
        quotationID={fakeQuotationID}
      />
    );

    fireEvent.click(getByText(/potwierdzam/i));
    expect(onCloseModalMock).toHaveBeenCalledTimes(1);
    expect(deleteQuotationMock).toHaveBeenCalledTimes(1);
    expect(deleteQuotationMock).toHaveBeenCalledWith(fakeQuotationID);
  });
});
