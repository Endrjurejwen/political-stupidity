import {
  CREATE_QUOTATION,
  CREATE_QUOTATION_ERROR,
  ADD_TO_FAVORITE,
  ADD_TO_FAVORITE_ERROR,
  CHECK_IF_FAVORITE,
  CHECK_IF_FAVORITE_ERROR,
  REMOVE_FROM_FAVORITE,
  REMOVE_FROM_FAVORITE_ERROR,
  COUNT_ALL_LIKES,
  COUNT_ALL_LIKES_ERROR
} from './actions';

const initialState = {
  error: null
};

export default function(state = initialState, action) {
  const { type, quotation, error } = action;
  switch (type) {
    case CREATE_QUOTATION:
      console.log('Created Quotation', quotation);
      return state;
    case CREATE_QUOTATION_ERROR:
      console.log('create quotation error', error);
      return state;
    case ADD_TO_FAVORITE:
      console.log('Add to Favorite');
      return state;
    case ADD_TO_FAVORITE_ERROR:
      console.log('Add to Favorite error', error);
      return state;
    case CHECK_IF_FAVORITE:
      console.log('Check if is in Favorite');
      return state;
    case CHECK_IF_FAVORITE_ERROR:
      console.log('Check if is in Favorite error', error);
      return state;
    case REMOVE_FROM_FAVORITE:
      console.log('Remove from favorites');
      return state;
    case REMOVE_FROM_FAVORITE_ERROR:
      console.log('Remove from favorites error', error);
      return state;
    case COUNT_ALL_LIKES:
      console.log('Count All Likes');
      return state;
    case COUNT_ALL_LIKES_ERROR:
      console.log('Count All Likes error', error);
      return state;
    default:
      return state;
  }
}

// const initialState = {
//   quotes: [
//     {
//       body:
//         'Wtedy, kiedy dinozaury jeszcze były, a ludzie nie mieli żadnych strzelb, nie mieli żadnej broni nowoczesnej, która pozwoliłaby ich zabić.',
//       author: 'Ewa Kopacz',
//       user: 'Biedny Obywatel',
//       likes: 34,
//       timestamp: '12-02-2019',
//       id: 'gfh5465464654g4',
//       comments: [
//         {
//           body: 'to się popisała Pani Premier :)',
//           likes: 25,
//           user: 'Jaś Gamoń',
//           id: 't53regfdgdf'
//         },
//         {
//           body: 'Hahahahaha, nie wierzę',
//           likes: 7,
//           user: 'Inny Gamoń',
//           id: 'sdfdsf45tgdgf'
//         }
//       ]
//     },
//     {
//       body:
//         'Założenie przypadkowego powstania życia niczym się nie różni od rozumowania, że tornado przechodzące przez samolotowe złomowisko może złożyć boeinga 747 gotowego do lotu.',
//       author: 'Maciej Giertych',
//       user: 'Bartłomiej Kowalski',
//       likes: 23,
//       timestamp: '14-02-2019',
//       id: 'sdfsdgfgfdgfdg',
//       comments: [
//         {
//           body: 'Jego to ewolucja nie rusza',
//           likes: 12,
//           user: 'Jan Nowak',
//           id: 'sgfsg45gsdgdf'
//         },
//         {
//           body: 'Hahahahaha, nie no, ten to wymyślił',
//           likes: 19,
//           user: 'Halina Konopna',
//           id: 'dsgdfgdff44gdfg'
//         }
//       ]
//     }
//   ]
// };
