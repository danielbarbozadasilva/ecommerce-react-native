import {
  getClientLikeProductService,
  getByIdClientService,
  createLikeProductService,
  removeLikeProductService,
  updateClientService,
} from '../../services/client.service';
import {decodeToken, setStorageItem} from '../../config/auth';
import TYPES from '../types';
import {Alert} from 'react-native';
import http from '../../config/http';

export const listByIdClientAction = () => {
  return async dispatch => {
    dispatch({type: TYPES.CLIENT_LOADING, status: true});
    try {
      const {clientid} = await decodeToken();
      const result = await getByIdClientService(clientid);
      dispatch({type: TYPES.CLIENT_ID, data: result.data.data});
    } catch (error) {}
  };
};

export const updateClientAction = data => {
  return async dispatch => {
    dispatch({type: TYPES.CLIENT_LOADING, status: true});
    try {
      const decode = await decodeToken();
      const result = await updateClientService(
        decode.clientid,
        decode.id,
        data,
      );
      await setStorageItem('token', result.data?.data.token);
      dispatch({type: TYPES.SIGN_IN, data: result.data?.data.token});
      return result.data;
    } catch (error) {
      const {data} = error.response;
      Alert.alert('Erro', data.message);
      dispatch({type: TYPES.SIGN_ERROR, data: error});
      return false;
    }
  };
};

export const listLikeProductAction = () => {
  return async dispatch => {
    dispatch({type: TYPES.CLIENT_LOADING, status: true});
    try {
      const {clientid} = await decodeToken();
      const result = await getClientLikeProductService(clientid);
      dispatch({type: TYPES.CLIENT_LIKES, data: result.data.data});
    } catch (error) {}
  };
};

export const createLikeProductAction = productid => {
  return async dispatch => {
    dispatch({type: TYPES.CLIENT_LOADING, status: true});
    try {
      const {clientid} = await decodeToken();
      const result = await createLikeProductService(clientid, productid);
      dispatch({type: TYPES.CLIENT_CREATE_LIKE, data: result.data.data});
    } catch (error) {}
  };
};

export const removeLikeProductAction = productid => {
  return async dispatch => {
    dispatch({type: TYPES.CLIENT_LOADING, status: true});
    try {
      const {clientid} = await decodeToken();
      const result = await removeLikeProductService(clientid, productid);
      dispatch({type: TYPES.CLIENT_REMOVE_LIKE, data: result.data.data});
    } catch (error) {}
  };
};
