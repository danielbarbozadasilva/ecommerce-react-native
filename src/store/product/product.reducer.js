import TYPES from '../types';

export const INITIAL_STATE = {
  loading: false,
  all: []
};

const reducer = ({...state} = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.PRODUCT_LOADING:
      state.error = [];
      state.loading = action.status;
      return state;

    case TYPES.PRODUCT_LIST:
      state.all = action.data;
      state.loading = false;
      return state;

    default:
      return state;
  }
};
export default reducer

