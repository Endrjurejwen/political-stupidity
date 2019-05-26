import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { fakeQuotation } from 'utils';
import { editQuotationForm as EditQuotation } from './EditQuotation';

const editQuotationMock = jest.fn(() => Promise.resolve(''));
const onCloseModalMock = jest.fn();

// Act issue
console.error = jest.fn();

describe('<EditQuotation /> with editQuotation, onCloseModal and quotation', () => {
  test('should edit quotation with content, politician and topics', () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <EditQuotation
        editQuotation={editQuotationMock}
        onCloseModal={onCloseModalMock}
        quotation={fakeQuotation}
      />
    );
    const quotationInput = getByPlaceholderText(/tutaj wpisz cytat/i);
    const politicianInput = getByPlaceholderText(/kto to powiedział/i);
    const historyFilterInput = getByTestId(`filter-history`);
    const biologyFilterInput = getByTestId(`filter-biology`);

    expect(getByText(/edytuj cytat/i)).toBeInTheDocument();

    expect(quotationInput).toBeInTheDocument();
    expect(politicianInput).toBeInTheDocument();
    expect(historyFilterInput).toBeInTheDocument();
    expect(biologyFilterInput).toBeInTheDocument();

    fireEvent.change(quotationInput, {
      target: {
        value: 'lorem ipsum'
      }
    });

    fireEvent.change(politicianInput, {
      target: {
        value: 'Bush'
      }
    });

    fireEvent.click(historyFilterInput);
    fireEvent.click(biologyFilterInput);

    fireEvent.submit(getByText(/zapisz zmiany/i));
    expect(editQuotationMock).toHaveBeenCalledTimes(1);

    expect(editQuotationMock).toHaveBeenCalledWith(fakeQuotation.id, {
      content: 'lorem ipsum',
      politician: 'Bush',
      topics: ['przyroda']
    });
  });
});
