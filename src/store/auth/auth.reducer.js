import TYPES from '../types';

const INITIAL_STATE = {
  loading: false,
  error: [],
  registered: false,
};

const reducer = ({...state} = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.AUTH_LOADING:
      state.error = [];
      state.loading = action.status;
      return state;

    case TYPES.SIGN_IN:
      state.registered = true;
      state.token = action.data.token;
      state.user = action.data.userDTO;
      state.loading = false;
      return state;

    case TYPES.SIGN_UP:
      state.registered = true;
      state.token = action.data.token;
      state.user = action.data.userDTO;
      state.loading = false;
      return state;

    case TYPES.SIGN_ERROR:
      const err = [...state.error, action.data];
      state.loading = false;
      state.error = err;
      return state;

    case TYPES.SIGN_OUT:
      state.token = '';
      state.user = {};
      state.error = [];

    default:
      return state;
  }
};

export default reducer;
