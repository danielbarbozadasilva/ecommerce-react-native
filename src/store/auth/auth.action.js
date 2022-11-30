import TYPES from '../types';
import {setStorageItem, removeStorageItem} from '../../config/auth';
import {Alert} from 'react-native';
import {
  authService,
  checkTokenService,
  sendTokenService,
  resetPasswordService,
  signUpService,
  searchZipCodeService,
} from '../../services/auth.service';

export const signInAction = data => {
  return async dispatch => {
    dispatch({type: TYPES.AUTH_LOADING, status: true});
    try {
      const result = await authService(data);
      if (result?.data?.data?.token) {
        await setStorageItem('token', result.data?.data.token);
        dispatch({type: TYPES.SIGN_IN, data: result.data?.data.token});
        return true;
      }
    } catch (error) {
      const {data} = error.response;
      Alert.alert('Erro', data.message);
      dispatch({type: TYPES.SIGN_ERROR, data: error});
      return false;
    }
  };
};

export const checkTokenAction = async data => {
  try {
    const result = await checkTokenService(data);
    return result;
  } catch (error) {}
};

export const sendTokenAction = data => {
  return async dispatch => {
    dispatch({type: TYPES.AUTH_LOADING, status: true});
    try {
      const result = await sendTokenService(data);
      dispatch({type: TYPES.AUTH_TOKEN, data: result.data.data});
      return result.data;
    } catch (error) {}
  };
};

export const recoveryPasswordAction = data => {
  return async dispatch => {
    dispatch({type: TYPES.AUTH_LOADING, status: true});
    try {
      const result = await resetPasswordService(data);
      dispatch({type: TYPES.AUTH_TOKEN, data: result.data.data});
      return result.data;
    } catch (error) {}
  };
};

export const signUpAction = data => {
  return async dispatch => {
    dispatch({type: TYPES.AUTH_LOADING, status: true});
    try {
      const result = await signUpService(data);
      await setStorageItem('token', result.data?.data.token);
      dispatch({type: TYPES.SIGN_IN, data: result.data?.data.token});
      return result.data;
    } catch (error) {
      const {data} = error.response;
      Alert.alert('Erro', data.message);
    }
  };
};

export const searchZipCode = async data => {
  try {
    const result = await searchZipCodeService(data);
    return result.data;
  } catch (error) {}
};

export const logoutAction = () => {
  return async dispatch => {
    await removeStorageItem('token');
    dispatch({type: TYPES.SIGN_OUT});
  };
};
