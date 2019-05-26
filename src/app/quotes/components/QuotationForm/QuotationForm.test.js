import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import QuotationForm from './QuotationForm';

const onQuotationSubmitMock = jest.fn();
const onInputChangeMock = jest.fn();
const fakeButtonLabel = 'Submit';
const fakeNewQuotation = {
  content: '',
  politician: '',
  historia: false,
  przyroda: false
};

// Act issue
console.error = jest.fn();

describe('<QuotationForm /> with onQuotationSubmit, onInputChange, buttonLabel and newQuotation', () => {
  test('should render corectly and submit quotation', () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <QuotationForm
        onQuotationSubmit={onQuotationSubmitMock}
        onInputChange={onInputChangeMock}
        buttonLabel={fakeButtonLabel}
        newQuotation={fakeNewQuotation}
      />
    );
    const quotationInput = getByPlaceholderText(/tutaj wpisz cytat/i);
    const politicianInput = getByPlaceholderText(/kto to powiedział/i);
    const historyFilterInput = getByTestId(`filter-history`);
    const biologyFilterInput = getByTestId(`filter-biology`);

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

    fireEvent.submit(getByText(/submit/i));
    fireEvent.click(historyFilterInput);
    fireEvent.click(biologyFilterInput);

    expect(onQuotationSubmitMock).toHaveBeenCalledTimes(1);
  });
});
