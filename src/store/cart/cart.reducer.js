import TYPES from '../types';

const INITIAL_STATE = {
  loading: false,
  all: [],
  shipping: null,
};

const reducer = ({...state} = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.CART_LOADING:
      state.error = [];
      state.loading = action.status;
      return state;

    case TYPES.ADD_CART:
      state.all = state.all.concat(new Array(action.data));
      return state;

    case TYPES.REMOVE_PROD_CART:
      state.all = state.all.filter(item => item.id !== action.prodId);
      return state;

    case TYPES.GET_CART:
      state.loading = false;
      return state;

    case TYPES.CLEAN_CART:
      state.all = [];
      state.loading = false;
      return state;

    case TYPES.FETCH_PRICE_DELIVERY:
      state.shipping = action.data;
      state.loading = false;
      return state;

    default:
      return state;
  }
};

export default reducer;
