import {getClientLikeProductService} from '../../services/client.service';
import {getStorageItem} from '../../config/auth';
import Types from '../types';

export const getClientLikeProductAction = () => {
  return async dispatch => {
    dispatch({type: Types.CLIENT_LOADING, status: true});
    try {
      const id = await getStorageItem('credentials');
      const result = await getClientLikeProductService(id);
      dispatch({type: Types.CLIENT_LIKES, data: result.data.data});
    } catch (error) {}
  };
};
