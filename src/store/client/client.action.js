import {
  getClientLikeProductService,
  createLikeProductService,
  removeLikeProductService,
} from '../../services/client.service';
import {getStorageItem} from '../../config/auth';
import Types from '../types';

export const listLikeProductAction = () => {
  return async dispatch => {
    dispatch({type: Types.CLIENT_LOADING, status: true});
    try {
      const id = await getStorageItem('credentials');
      const result = await getClientLikeProductService(id);
      dispatch({type: Types.CLIENT_LIKES, data: result.data.data});
    } catch (error) {}
  };
};

export const createLikeProductAction = productid => {
  return async dispatch => {
    dispatch({type: Types.CLIENT_LOADING, status: true});
    try {
      const id = await getStorageItem('credentials');
      const result = await createLikeProductService(id, productid);
      dispatch({type: Types.CLIENT_CREATE_LIKE, data: result.data.data});
    } catch (error) {}
  };
};

export const removeLikeProductAction = productid => {
  return async dispatch => {
    dispatch({type: Types.CLIENT_LOADING, status: true});
    try {
      const id = await getStorageItem('credentials');
      const result = await removeLikeProductService(id, productid);
      dispatch({type: Types.CLIENT_REMOVE_LIKE, data: result.data.data});
    } catch (error) {}
  };
};
