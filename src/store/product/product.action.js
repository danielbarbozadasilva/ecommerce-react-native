import Types from '../types';
import {
  getProductsService,
  getProductByIdService,
  getProductsSearchService,
} from '../../services/product.service';

export const getProductsAction = () => {
  return async dispatch => {
    dispatch({type: Types.PRODUCT_LOADING, status: true});
    try {
      const result = await getProductsService();
      dispatch({type: Types.PRODUCT_LIST, data: result.data.data});
    } catch (error) {}
  };
};

export const getProductByIdAction = id => {
  return async dispatch => {
    dispatch({type: Types.PRODUCT_LOADING, status: true});
    try {
      const result = await getProductByIdService(id);
      dispatch({type: Types.PRODUCT_ID, data: result.data.data});
    } catch (error) {}
  };
};

export const getProductsSearchAction = name => {
  return async dispatch => {
    dispatch({type: Types.PRODUCT_LOADING, status: true});
    try {
      const result = await getProductsSearchService(name);
      dispatch({type: Types.PRODUCT_LIST, data: result.data.data});
    } catch (error) {}
  };
};
