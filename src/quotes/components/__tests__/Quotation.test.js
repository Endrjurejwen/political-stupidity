import React from 'react';
import { render } from 'react-testing-library';
import Quotation from '../Quotation';

const fakeQuotation = {
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  author: 'Polityk',
  user: 'Gall Anonim',
  comments: 34,
  likes: 124,
  timestamp: '02-14-2019'
};

describe('<Quotation />', () => {
  test('should receive props and then renders quotation', () => {
    const { getByTestId } = render(<Quotation quotation={fakeQuotation} />);

    const { body, author, user, comments, likes, timestamp } = fakeQuotation;

    expect(getByTestId('quotation-body')).toHaveTextContent(body);
    expect(getByTestId('quotation-author')).toHaveTextContent(author);
    expect(getByTestId('quotation-user')).toHaveTextContent(user);
    expect(getByTestId('quotation-comments')).toHaveTextContent(comments);
    expect(getByTestId('quotation-likes')).toHaveTextContent(likes);
    expect(getByTestId('quotation-timestamp')).toHaveTextContent(timestamp);
  });
});
