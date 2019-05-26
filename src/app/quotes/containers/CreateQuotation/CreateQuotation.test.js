import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { createQuotationForm as CreateQuotation } from './CreateQuotation';

const createQuotationMock = jest.fn(() => Promise.resolve(''));
const onCloseModalMock = jest.fn();

// Act issue
console.error = jest.fn();

describe('<CreateQuotation /> with createQuotation and onCloseModal', () => {
  test('should create quotation with content, politician and topics', () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <CreateQuotation
        createQuotation={createQuotationMock}
        onCloseModal={onCloseModalMock}
      />
    );
    const quotationInput = getByPlaceholderText(/tutaj wpisz cytat/i);
    const politicianInput = getByPlaceholderText(/kto to powiedział/i);
    const historyFilterInput = getByTestId(`filter-history`);
    const biologyFilterInput = getByTestId(`filter-biology`);

    expect(getByText(/stwórz cytat/i)).toBeInTheDocument();

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

    fireEvent.submit(getByText(/opublikuj/i));
    expect(createQuotationMock).toHaveBeenCalledTimes(1);

    expect(createQuotationMock).toHaveBeenCalledWith({
      content: 'lorem ipsum',
      politician: 'Bush',
      topics: ['historia', 'przyroda']
    });
  });
});
