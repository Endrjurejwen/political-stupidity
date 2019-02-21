import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Quotation from '../Quotation';

const navigationClickMock = jest.fn();
const likeClickMock = jest.fn();

const fakeQuotation = {
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  author: 'Polityk',
  userFirstName: 'Gall',
  userLastName: 'Anonim',
  likes: [],
  timestamp: '02-14-2019',
  comments: [
    {
      content: 'Jego to ewolucja nie rusza',
      likes: 12,
      user: 'Jan Nowak',
      id: 'sgfsg45gsdgdf'
    },
    {
      content: 'Hahahahaha, nie no, ten to wymyślił',
      likes: 19,
      user: 'Halina Konopna',
      id: 'dsgdfgdff44gdfg'
    }
  ]
};

describe('<Quotation />', () => {
  test('should receive props and then renders quotation', () => {
    const { getByTestId } = render(
      <Quotation
        quotation={fakeQuotation}
        navigationClick={navigationClickMock}
        likeClick={likeClickMock}
      />
    );

    const {
      content,
      author,
      userFirstName,
      userLastName,
      comments,
      likes,
      timestamp
    } = fakeQuotation;

    expect(getByTestId('quotation-content')).toHaveTextContent(content);
    expect(getByTestId('quotation-author')).toHaveTextContent(author);
    expect(getByTestId('quotation-user')).toHaveTextContent(
      `Opublikował ${userFirstName} ${userLastName}`
    );
    expect(getByTestId('quotation-comments-button')).toHaveTextContent(
      `Komentarze (${comments.length})`
    );
    expect(getByTestId('button-likes')).toHaveTextContent(likes.length);
    expect(getByTestId('quotation-timestamp')).toHaveTextContent(timestamp);

    fireEvent.click(getByTestId('quotation-comments-button'));
    expect(navigationClickMock).toHaveBeenCalledTimes(1);

    fireEvent.click(getByTestId('button-likes'));
    expect(likeClickMock).toHaveBeenCalledTimes(1);
  });
});
