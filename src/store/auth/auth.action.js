import api from '../../config/api';

export const signInAction = async data => {
  try {
    const result = await api.post('/auth', data);
    return result.data;
  } catch (error) {}
};

export const signUpAction = async data => {
  try {
    const result = await api.post('/client', data);
    return result.data;
  } catch (error) {}
};
