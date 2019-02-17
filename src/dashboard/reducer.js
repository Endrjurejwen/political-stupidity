import { CREATE_QUOTATION } from './actions';

const initialState = {
  quotes: [
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
          id: 't53regfdgdf'
        },
        {
          body: 'Hahahahaha, nie wierzę',
          likes: 7,
          user: 'Inny Gamoń',
          id: 'sdfdsf45tgdgf'
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
          id: 'sgfsg45gsdgdf'
        },
        {
          body: 'Hahahahaha, nie no, ten to wymyślił',
          likes: 19,
          user: 'Halina Konopna',
          id: 'dsgdfgdff44gdfg'
        }
      ]
    }
  ]
};

export default function(state = initialState, action) {
  const { type, quotation } = action;
  switch (type) {
    case CREATE_QUOTATION:
      console.log('Created Quotation', quotation);
      return state;
    default:
      return state;
  }
}
