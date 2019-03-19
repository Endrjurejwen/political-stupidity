import {
  CREATE_QUOTATION,
  CREATE_QUOTATION_ERROR,
  DELETE_QUOTATION,
  DELETE_QUOTATION_ERROR,
  LIKE_QUOTATION,
  LIKE_QUOTATION_ERROR,
  DISLIKE_QUOTATION,
  DISLIKE_QUOTATION_ERROR,
  TOGGLE_SORT_ORDER
} from './actions';

const resetSortOrder = state => {
  const sortTypesArray = Object.keys(state.sortTypes);
  return sortTypesArray.reduce((acc, current) => {
    return {
      ...acc,
      [current]: {
        ...state.sortTypes[current],
        order: 'asc'
      }
    };
  }, {});
};

const changeSortOrder = (state, sortBy) => {
  const resetSortTypes = resetSortOrder(state);
  return {
    ...state,
    sortTypes: {
      ...state.sortTypes,
      ...resetSortTypes,
      [sortBy]: {
        ...state.sortTypes[sortBy],
        order: state.sortTypes[sortBy].order === 'asc' ? 'desc' : 'asc'
      }
    }
  };
};

const initialState = {
  error: null,
  sortTypes: {
    time: {
      order: 'desc',
      type: 'createAt'
    },
    comments: {
      order: 'asc',
      type: 'commentsCount'
    },
    likes: {
      order: 'asc',
      type: 'likesCount'
    }
  }
};

export default function(state = initialState, action) {
  const { type, quotation, sortBy, error } = action;
  switch (type) {
    case CREATE_QUOTATION:
      console.log('Created Quotation', quotation);
      return state;
    case CREATE_QUOTATION_ERROR:
      console.log('create quotation error', error);
      return state;
    case DELETE_QUOTATION:
      console.log('dellete document from collection');
      return state;
    case DELETE_QUOTATION_ERROR:
      console.log('dellete document from collection error', error);
      return state;
    case LIKE_QUOTATION:
      console.log('Add to Favorite');
      return state;
    case LIKE_QUOTATION_ERROR:
      console.log('Add to Favorite error', error);
      return state;
    case DISLIKE_QUOTATION:
      console.log('Remove from favorites');
      return state;
    case DISLIKE_QUOTATION_ERROR:
      console.log('Remove from favorites error', error);
      return state;
    case TOGGLE_SORT_ORDER:
      return changeSortOrder(state, sortBy);
    default:
      return state;
  }
}

// // refactor? forEach
// const changeSortOrder = (state, sortBy) => {
//   console.log(Object.keys(state.sortTypes));
//   return {
//     ...state,
//     sortTypes: {
//       ...state.sortTypes,
//       time: {
//         ...state.sortTypes.time,
//         order: 'asc'
//       },
//       comments: {
//         ...state.sortTypes.comments,
//         order: 'asc'
//       },
//       likes: {
//         ...state.sortTypes.likes,
//         order: 'asc'
//       },
//       [sortBy]: {
//         ...state.sortTypes[sortBy],
//         order: state.sortTypes[sortBy].order === 'asc' ? 'desc' : 'asc'
//       }
//     }
//   };
// };

// case TOGGLE_SORT_ORDER:
// return {
//   ...state,
//   sortTypes: {
//     [sortBy]: {
//       order: state.sortTypes[sortBy].order === 'asc' ? 'desc' : 'asc'
//     }
//   }
// };

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
