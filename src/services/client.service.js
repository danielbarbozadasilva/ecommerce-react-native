import http from '../config/http';

export const getClientLikeProductService = id => http.get(`/client/${id}/like`);
