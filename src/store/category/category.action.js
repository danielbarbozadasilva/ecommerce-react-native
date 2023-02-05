import {
  getCategoriesService,
  getCategoryProductService,
} from '../../services/category.service';
import Types from '../types';

export const getCategoriesAction = () => {
  return async dispatch => {
    dispatch({type: Types.CATEGORY_LOADING, status: true});
    try {
      const result = await getCategoriesService();
      dispatch({type: Types.CATEGORY_LIST, data: result.data.data});
    } catch (error) {}
  };
};

export const getCategoryProductsAction = id => {
  return async dispatch => {
    dispatch({type: Types.CATEGORY_LOADING, status: true});
    try {
      const result = await getCategoryProductService(id);
      dispatch({type: Types.CATEGORY_PRODUCTS, data: result.data.data[0].data});
    } catch (error) {}
  };
};
