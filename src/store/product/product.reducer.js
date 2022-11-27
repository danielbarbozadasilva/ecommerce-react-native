export const initialState = {
  product: '',
};

export const userReducers = (state, action) => {
  switch (action.type) {
    case 'setProduct':
      return {...state, product: action.payload.product};
    default:
      return state;
  }
};
