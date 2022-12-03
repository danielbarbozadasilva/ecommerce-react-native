import http from '../config/http';

export const getClientLikeProductService = id =>
  http.get(`/client/user/${id}/like`);
