import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const auth = {
  login: (credentials) => api.post('/users/login', credentials),
  register: (userData) => api.post('/users/register', userData),
  getProfile: () => api.get('/users/profile'),
};

export const tests = {
  getAll: () => api.get('/tests'),
  getById: (id) => api.get(`/tests/${id}`),
  create: (testData) => api.post('/tests', testData),
};

export const results = {
  submit: (resultData) => api.post('/results', resultData),
  getMyResults: () => api.get('/results/my-results'),
  getById: (id) => api.get(`/results/${id}`),
  getAnalytics: () => api.get('/results/analytics/performance'),
};

export default {
  auth,
  tests,
  results,
};
