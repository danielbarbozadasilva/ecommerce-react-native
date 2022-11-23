import api from '../../config/api';

export const signInAction = async data => {
  const result = await api.post('/auth', data);
  return result.data;
};
