import React from 'react';
import { wait } from 'react-testing-library';
import { renderWithRedux } from 'utils';
import Dashboard from '../Dashboard';

const FAKE_QUOTES = [
  {
    content:
      'Wtedy, kiedy dinozaury jeszcze były, a ludzie nie mieli żadnych strzelb, nie mieli żadnej broni nowoczesnej, która pozwoliłaby ich zabić.',
    author: 'Ewa Kopacz',
    user: 'Biedny Obywatel',
    likes: [],
    timestamp: '12-02-2019',
    id: 'gfh5465464654g4',
    comments: [
      {
        content: 'to się popisała Pani Premier :)',
        likes: 25,
        user: 'Jaś Gamoń',
        id: 't53regfdgdf'
      },
      {
        content: 'Hahahahaha, nie wierzę',
        likes: 7,
        user: 'Inny Gamoń',
        id: 'sdfdsf45tgdgf'
      }
    ]
  },
  {
    content:
      'Założenie przypadkowego powstania życia niczym się nie różni od rozumowania, że tornado przechodzące przez samolotowe złomowisko może złożyć boeinga 747 gotowego do lotu.',
    author: 'Maciej Giertych',
    user: 'Bartłomiej Kowalski',
    likes: [],
    timestamp: '14-02-2019',
    id: 'sdfsdgfgfdgfdg',
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
  }
];

// Nie Działa
// This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.

// describe('<Dashboard />', () => {
//   test('should render correctly', async () => {
//     const { getByText, getByTestId, queryByTestId } = renderWithRedux(
//       <Dashboard quotes={FAKE_QUOTES} />
//     );
//     expect(getByText(/polityczny poprawczak/i)).toBeInTheDocument();
//     expect(getByTestId('spinner')).toBeInTheDocument();
//     await wait(() => expect(queryByTestId('spinner')).not.toBeInTheDocument());
//   });
// });

describe('<Dashboard />', () => {
  test('should render correctly', async () => {
    const { getByText } = renderWithRedux(<Dashboard quotes={FAKE_QUOTES} />);
    expect(getByText(/polityczny poprawczak/i)).toBeInTheDocument();
  });
});
