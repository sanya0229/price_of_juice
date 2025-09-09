import { API_BASE_URL } from '../config/api';

export const apiService = {
  async getProducts() {
    try {
      const response = await fetch(`${API_BASE_URL}/products`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  },

  async getProduct(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching product:', error);
      return null;
    }
  },

  async getText() {
    try {
      const response = await fetch(`${API_BASE_URL}/text`);
      if (!response.ok) {
        throw new Error('Failed to fetch text');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching text:', error);
      return null;
    }
  },

  async testText() {
    try {
      const response = await fetch(`${API_BASE_URL}/text/test`);
      if (!response.ok) {
        throw new Error('Failed to test text endpoint');
      }
      return await response.json();
    } catch (error) {
      console.error('Error testing text endpoint:', error);
      return null;
    }
  }
};
