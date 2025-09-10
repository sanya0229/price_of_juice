import { API_BASE_URL } from '../config/api';

/**
 * API service for handling all external API calls
 * Provides methods to fetch products and text content from external APIs
 */
export const apiService = {
  /**
   * Fetches all products from the external API
   * @returns {Promise<Array>} Array of product objects grouped by rows
   */
  async getProducts() {
    try {
      const response = await fetch('https://priceofjuice.com/api/admin/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  },

  /**
   * Fetches a single product by ID (legacy method)
   * @param {string|number} id - Product ID
   * @returns {Promise<Object|null>} Product object or null if not found
   */
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

  /**
   * Fetches banner text content from external API
   * @returns {Promise<Object|null>} Text object with banner content or null if failed
   */
  async getText() {
    try {
      const response = await fetch('https://priceofjuice.com/api/admin/text');
      if (!response.ok) {
        throw new Error('Failed to fetch text');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching text:', error);
      return null;
    }
  },

  /**
   * Tests text endpoint (legacy method)
   * @returns {Promise<Object|null>} Test response or null if failed
   */
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
