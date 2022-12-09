import http from '../config/http';

export const getClientLikeProductService = id => http.get(`/client/${id}/like`);
export const getByIdClientService = id => http.get(`/client/${id}`);
export const createLikeProductService = (clientid, productid) =>
  http.post(`/client/${clientid}/product/${productid}/like`);
export const removeLikeProductService = (clientid, productid) =>
  http.delete(`/client/${clientid}/product/${productid}/like`);
export const updateClientService = (clientid, userid, data) =>
  http.put(`/client/${clientid}/user/${userid}`, data);
