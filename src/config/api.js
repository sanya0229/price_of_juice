/**
 * API configuration for different environments
 * Defines base URLs and targets for development and production
 */
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

// Get current environment (development or production)
const currentEnv = process.env.NODE_ENV || 'development';

// Export API configuration based on current environment
export const API_BASE_URL = API_CONFIG[currentEnv].baseURL;
export const API_TARGET = API_CONFIG[currentEnv].target;
