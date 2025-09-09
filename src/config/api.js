const API_CONFIG = {
  development: {
    baseURL: '/admin',
    target: 'http://localhost:3001'
  },
  production: {
    baseURL: '/admin',
    target: window.location.origin
  }
};

const currentEnv = process.env.NODE_ENV || 'development';
export const API_BASE_URL = API_CONFIG[currentEnv].baseURL;
export const API_TARGET = API_CONFIG[currentEnv].target;
