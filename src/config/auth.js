import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_TOKEN_KEY} from '@env';
const baseKey = API_TOKEN_KEY;
import jwt_decode from 'jwt-decode';

export const setStorageItem = async (key, value) => {
  await AsyncStorage.setItem(`${baseKey}${key}`, value);
};

export const getStorageItem = async key => {
  return await AsyncStorage.getItem(`${baseKey}${key}`);
};

export const removeStorageItem = async key => {
  await AsyncStorage.removeItem(`${baseKey}${key}`);
};

export const decodeToken = async (key = 'token') => {
  return jwt_decode(await AsyncStorage.getItem(`${baseKey}${key}`));
};
