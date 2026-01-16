import axios from 'axios';

// Criamos uma instância para não ter que digitar a URL toda hora
export const api = axios.create({
  baseURL: 'http://localhost:3000',
});

