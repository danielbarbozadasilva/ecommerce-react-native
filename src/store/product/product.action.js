import http from '../../config/http';
import Types from '../types';

export const getProductsAction = data => {
  return async dispatch => {
    dispatch({type: Types.PRODUCT_LOADING, status: true});
    try {
      const result = await http.get('/product', data);
      dispatch({type: Types.PRODUCT_LIST, data: result.data.data});
      return result.data;
    } catch (error) {}
  };
};

export const getProductsSearchAction = name => {
  return async dispatch => {
    dispatch({type: Types.PRODUCT_LOADING, status: true});
    try {
      const result = await http.get(`/product/search/${name}`);
      dispatch({type: Types.PRODUCT_LIST, data: result.data.data});
      return result.data;
    } catch (error) {}
  };
};
