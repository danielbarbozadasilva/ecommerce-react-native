import http from '../config/http';

export const authService = data => http.post('/auth', data);
export const checkTokenService = data => http.post('/check-token', data);
export const sendTokenService = data => http.put('/user/recovery/password-recovery', data);
export const resetPasswordService = data => http.put('/user/recovery/reset-password', data);
export const signUpService = data => http.post('/client', data);
