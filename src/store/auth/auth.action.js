import TYPES from '../types';
import http from '../../config/http';
import {setStorageItem} from '../../config/auth';
import {Alert} from 'react-native';

export const signInAction = data => {
  return async dispatch => {
    dispatch({type: TYPES.AUTH_LOADING, status: true});
    try {
      const result = await http.post('/auth', data);
      if (result?.data?.data?.token) {
        await setStorageItem('token', result.data?.data.token);
        dispatch({type: TYPES.SIGN_IN, data: result.data?.data.token});
      }
    } catch (error) {
      const {data} = error.response;
      Alert.alert('Erro', data.message);
      dispatch({type: TYPES.SIGN_ERROR, data: error});
    }
  };
};

export const checkTokenAction = async data => {
  try {
    const result = await http.post('/check-token', data);
    return result;
  } catch (error) {}
};

export const sendTokenAction = data => {
  return async dispatch => {
    dispatch({type: TYPES.AUTH_LOADING, status: true});
    try {
      const result = await http.put('/user/recovery/password-recovery', data);
      dispatch({type: TYPES.AUTH_TOKEN, data: result.data.data});
      return result.data;
    } catch (error) {}
  };
};

export const recoveryPasswordAction = data => {
  return async dispatch => {
    dispatch({type: TYPES.AUTH_LOADING, status: true});
    try {
      const result = await http.put('/user/recovery/reset-password', data);
      dispatch({type: TYPES.AUTH_TOKEN, data: result.data.data});
      return result.data;
    } catch (error) {}
  };
};

export const signUpAction = data => {
  return async dispatch => {
    dispatch({type: TYPES.AUTH_LOADING, status: true});
    try {
      const result = await http.post('/client', data);
      dispatch({type: TYPES.PRODUCT_LIST, data: result.data.data});
      return result.data;
    } catch (error) {}
  };
};
