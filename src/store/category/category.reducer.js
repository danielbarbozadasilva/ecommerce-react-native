import TYPES from '../types';

export const INITIAL_STATE = {
  loading: false,
  all: [],
  products: [],
};

const reducer = ({...state} = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.CATEGORY_LOADING:
      state.error = [];
      state.loading = action.status;
      return state;

    case TYPES.CATEGORY_LIST:
      state.all = action.data;
      state.loading = false;
      return state;

    case TYPES.CATEGORY_PRODUCTS:
      state.products = action.data;
      state.loading = false;
      return state;

    default:
      return state;
  }
};
export default reducer;
