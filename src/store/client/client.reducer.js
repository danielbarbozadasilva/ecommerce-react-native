import TYPES from '../types';

export const INITIAL_STATE = {
  loading: false,
  all: [],
  likes: [],
};

const reducer = ({...state} = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.CLIENT_LOADING:
      state.error = [];
      state.loading = action.status;
      return state;

    case TYPES.CLIENT_LIKES:
      state.likes = action.data;
      state.loading = false;
      return state;

    default:
      return state;
  }
};
export default reducer;
