import TYPES from '../types';
import {calculatePriceDeliveryService} from '../../services/cart.service';

export const addCartAction = data => {
  return async dispatch => {
    try {
      dispatch({type: TYPES.ADD_CART, data: data});
    } catch (error) {}
  };
};

export const removeProductCartAction = id => {
  return async dispatch => {
    try {
      dispatch({type: TYPES.REMOVE_PROD_CART, prodId: id});
    } catch (error) {}
  };
};

export const calculateShippingAction = (zipCode, cart) => {
  return async dispatch => {
    dispatch({type: TYPES.CART_LOADING, status: true});
    try {
      const result = await calculatePriceDeliveryService(zipCode, cart);
      dispatch({
        type: TYPES.FETCH_PRICE_DELIVERY,
        data: result.data.data[0],
      });
    } catch (error) {}
  };
};

export const cleanCartAction = () => {
  return async dispatch => {
    dispatch({type: TYPES.REMOVE_PROD_CART});
  };
};
