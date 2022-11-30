import {
  getProductsService,
  getProductsSearchService,
} from '../../services/product.service';
import Types from '../types';

export const getProductsAction = () => {
  return async dispatch => {
    dispatch({type: Types.PRODUCT_LOADING, status: true});
    try {
      const result = await getProductsService();
      dispatch({type: Types.PRODUCT_LIST, data: result.data.data});
      return result.data;
    } catch (error) {}
  };
};

export const getProductsSearchAction = name => {
  return async dispatch => {
    dispatch({type: Types.PRODUCT_LOADING, status: true});
    try {
      const result = await getProductsSearchService(name);
      dispatch({type: Types.PRODUCT_LIST, data: result.data.data});
      return result.data;
    } catch (error) {}
  };
};
