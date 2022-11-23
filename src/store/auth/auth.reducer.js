export const initialState = {
  avatar: '',
};

export const userReducers = (state, action) => {
  switch (action.type) {
    case 'setAvatar':
      return {...state, avatar: action.payload.avatar};
    default:
      return state;
  }
};
