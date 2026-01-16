import { api } from './api';

interface UserResponse {
  user: {
    id: number;
    name: string;
    email: string;
  };
  token: string;
}

export const loginRequest = async (email: string, password: string): Promise<UserResponse> => {
  const response = await api.post('/users/login', { email, password });
  return response.data;
};

export const registerRequest = async (name: string, email: string, password: string) => {
    const response = await api.post('/users', {name, email, password});
    return response.data;
}