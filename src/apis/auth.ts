import axios from '@/lib/axios';
import { csrf } from '@/lib/csrf';

export const login = async (values: { email: string; password: string }) => {
  await csrf();
  return axios.post('/login', values);
};

export const logout = async () => {
  await csrf();
  return axios.post('/logout');
};

export const register = async (values: { name: string; email: string; password: string }) => {
  await csrf();
  return axios.post('/register', values);
};
