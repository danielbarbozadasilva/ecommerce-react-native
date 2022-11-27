import http from '../../config/http';

export const signInAction = async data => {
  try {
    const result = await http.post('/auth', data);
    return result.data;
  } catch (error) {}
};

export const checkTokenAction = async data => {
  try {
    const result = await http.post('/check-token', data);
    return result;
  } catch (error) {}
};

export const sendTokenAction = async data => {
  try {
    const result = await http.put('/user/recovery/password-recovery', data);
    return result.data;
  } catch (error) {}
};

export const recoveryPasswordAction = async data => {
  try {
    const result = await http.put('/user/recovery/reset-password', data);
    return result.data;
  } catch (error) {}
};

export const signUpAction = async data => {
  try {
    const result = await http.post('/client', data);
    return result.data;
  } catch (error) {}
};
