const sendRequest = state => ({ ...state, error: null });
const reciveResult = state => ({ ...state, error: null });
const reciveError = (state, action) => ({
  ...state,
  error: action.error.message
});

export const makeAsyncReducer = ({ name, initialState }) => {
  return (state = initialState, action) => {
    switch (action.type) {
      case `${name}_REQUEST`:
        return sendRequest(state);
      case `${name}_SUCCESS`:
        return reciveResult(state);
      case `${name}_FAILURE`:
        return reciveError(state, action);
      default:
        return state;
    }
  };
};

const sendRequestWithLoading = state => ({
  ...state,
  error: null,
  isLoading: true
});
const reciveResultWithLoading = state => ({
  ...state,
  error: null,
  isLoading: false
});
const reciveErrorWithLoading = (state, action) => ({
  ...state,
  error: action.error.message,
  isLoading: false
});

export const makeAsyncReducerWithLoading = ({ name, initialState }) => {
  return (state = initialState, action) => {
    switch (action.type) {
      case `${name}_REQUEST`:
        return sendRequestWithLoading(state);
      case `${name}_SUCCESS`:
        return reciveResultWithLoading(state);
      case `${name}_FAILURE`:
        return reciveErrorWithLoading(state, action);
      default:
        return state;
    }
  };
};

const resetError = state => ({ ...state, error: null });

export const makeResetErrorReducer = ({ name, initialState }) => {
  return (state = initialState, action) => {
    switch (action.type) {
      case `RESET_${name}_ERROR`:
        return resetError(state);
      default:
        return state;
    }
  };
};
