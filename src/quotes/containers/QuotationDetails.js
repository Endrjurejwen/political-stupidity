import React from 'react';
import styled from 'styled-components';
import Quotation from 'quotes/components/Quotation';
import CommmentsList from 'comments/components/CommentsList';
import { H2 } from 'elements';
import { elevation, spacing } from 'utils';

const FAKE_QUOTES = [
  {
    body:
      'Wtedy, kiedy dinozaury jeszcze były, a ludzie nie mieli żadnych strzelb, nie mieli żadnej broni nowoczesnej, która pozwoliłaby ich zabić.',
    author: 'Ewa Kopacz',
    user: 'Biedny Obywatel',
    likes: 34,
    timestamp: '12-02-2019',
    id: 'gfh5465464654g4',
    comments: [
      {
        body: 'to się popisała Pani Premier :)',
        likes: 25,
        user: 'Jaś Gamoń',
        id: 't53regfdgdf',
        timestamp: '14-02-2019'
      },
      {
        body: 'Hahahahaha, nie wierzę',
        likes: 7,
        user: 'Inny Gamoń',
        id: 'sdfdsf45tgdgf',
        timestamp: '14-02-2019'
      }
    ]
  },
  {
    body:
      'Założenie przypadkowego powstania życia niczym się nie różni od rozumowania, że tornado przechodzące przez samolotowe złomowisko może złożyć boeinga 747 gotowego do lotu.',
    author: 'Maciej Giertych',
    user: 'Bartłomiej Kowalski',
    likes: 23,
    timestamp: '14-02-2019',
    id: 'sdfsdgfgfdgfdg',
    comments: [
      {
        body: 'Jego to ewolucja nie rusza',
        likes: 12,
        user: 'Jan Nowak',
        id: 'sgfsg45gsdgdf',
        timestamp: '14-02-2019'
      },
      {
        body: 'Hahahahaha, nie no, ten to wymyślił',
        likes: 19,
        user: 'Halina Konopna',
        id: 'dsgdfgdff44gdfg',
        timestamp: '14-02-2019'
      }
    ]
  }
];

const quotationDetails = props => {
  const quotation = FAKE_QUOTES.find(
    quotation => quotation.id === props.match.params.id
  );
  return (
    <>
      <Quotation quotation={quotation} />
      <Title>Komentarze</Title>
      <CommmentsList comments={quotation.comments} />
    </>
  );
};

export default quotationDetails;

const Title = styled(H2)`
  text-align: center;
  margin-bottom: ${spacing[3]};
`;
