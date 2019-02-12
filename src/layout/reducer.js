import { TOGGLE_MENU } from './actions';

const initialState = {
  isMenuOpen: false
};

export default function(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen
      };
    default:
      return state;
  }
}
