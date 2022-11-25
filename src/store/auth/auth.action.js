import api from '../../config/api';

export const signInAction = async data => {
  const result = await api.post('/auth', data);
  return result.data;
};

export const signUpAction = async data => {
  const result = await api.post('/client', data);
  return result.data;
};
