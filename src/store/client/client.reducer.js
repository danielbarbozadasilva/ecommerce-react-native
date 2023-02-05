import TYPES from '../types';

export const INITIAL_STATE = {
  loading: false,
  all: [],
  likes: [],
  change_like: [],
  clientById: [],
};

const reducer = ({...state} = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.CLIENT_LOADING:
      state.error = [];
      state.loading = action.status;
      return state;

    case TYPES.CLIENT_ID:
      state.clientById = action.data;
      state.loading = false;
      return state;

    case TYPES.CLIENT_LIKES:
      state.likes = action.data;
      state.loading = false;
      return state;

    case TYPES.CLIENT_CREATE_LIKE:
      state.change_like = action.data;
      state.loading = false;
      return state;

    case TYPES.CLIENT_REMOVE_LIKE:
      state.change_like = action.data;
      state.loading = false;
      return state;
    default:
      return state;
  }
};
export default reducer;
