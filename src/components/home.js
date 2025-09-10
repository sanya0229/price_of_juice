import React, { useState, useEffect } from 'react';
import { apiService } from '../services/api';
import styles from './css/home.module.css'

// Import logo and social media icons
import logo_1 from '../assets/images/logo_1.png'
import logo_2 from '../assets/images/logo_2.png'
import instagramIcon from '../assets/images/instagram.png'
import telegramIcon from '../assets/images/telegram.png'
import whatsappIcon from '../assets/images/whatsapp.png'
import emailIcon from '../assets/images/mail.png'

// Import company logos
import img_1 from '../assets/images/img_1.png'
import img_2 from '../assets/images/img_2.png'
import img_3 from '../assets/images/img_3.png'
import img_4 from '../assets/images/img_4.png'
import img_5 from '../assets/images/img_5.png'

/**
 * Main Home component that displays product tables and company information
 * Fetches data from external APIs and renders three separate product tables
 */
const Home = () => {
  // State management for products, text content, and loading status
  const [products, setProducts] = useState([]);
  const [textContent, setTextContent] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch data from APIs on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch products and text content in parallel
        const [productsData, textData] = await Promise.all([
          apiService.getProducts(),
          apiService.getText()
        ]);
        
        setProducts(productsData);
        setTextContent(textData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  /**
   * Formats individual product data for display
   * @param {Object} insides - Product data from API
   * @returns {Object} Formatted product object
   */
  const formatProductData = (insides) => {
    if (!insides) {
      return {
        product: 'N/A',
        activeSubstance: 'N/A',
        dosage: 'N/A',
        availability: 'N/A',
        price: 'N/A'
      };
    }

    return {
      product: insides.product || 'N/A',
      activeSubstance: insides.activeSubstance || 'N/A',
      dosage: insides.dosage || 'N/A',
      availability: insides.availability ? 'In Stock' : 'Out of Stock',
      price: insides.price || 'N/A'
    };
  };

  /**
   * Groups products by their row number for separate table display
   * @param {Array} products - Array of product objects from API
   * @returns {Object} Object with row numbers as keys and product arrays as values
   */
  const groupProductsByRow = (products) => {
    const grouped = {};
    products.forEach(product => {
      const row = product.row;
      if (!grouped[row]) {
        grouped[row] = [];
      }
      if (product.insides && Array.isArray(product.insides)) {
        product.insides.forEach(inside => {
          grouped[row].push(formatProductData(inside));
        });
      }
    });
    return grouped;
  };

  // Show loading state while fetching data
  if (loading) {
    return <div className={styles.desktop_container}>Loading...</div>;
  }

  // Default products for fallback when API is unavailable
  const defaultProducts = {
    1: [
      { product: 'Pharmatest E300', activeSubstance: 'text', dosage: '10ml \\ 300mg', availability: 'In Stock', price: '110' },
      { product: 'Pharmatest E500', activeSubstance: 'text', dosage: '10ml \\ 500mg', availability: 'In Stock', price: '110' },
    ],
    2: [
      { product: 'Pharmatest C250', activeSubstance: 'text', dosage: '10ml \\ 250mg', availability: 'In Stock', price: '110' },
      { product: 'Pharmatest P100', activeSubstance: 'text', dosage: '10ml \\ 100mg', availability: 'In Stock', price: '110' },
    ],
    3: [
      { product: 'Pharmatest D200', activeSubstance: 'text', dosage: '10ml \\ 200mg', availability: 'In Stock', price: '110' },
    ]
  };

  // Use API data if available, otherwise use default products
  const groupedProducts = products.length > 0 ? groupProductsByRow(products) : defaultProducts;
  const bannerText = textContent?.text || 'Мы крутые отправка бла';

  /**
   * Renders a product table with given products and optional CSS class
   * @param {Array} tableProducts - Array of products to display
   * @param {string} tableClass - Optional CSS class for styling
   * @returns {JSX.Element} Table component
   */
  const renderTable = (tableProducts, tableClass = '') => (
    <div className={styles.table_section}>
      <table className={`${styles.product_table} ${tableClass}`}>
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th>ACTIVE SUBSTANCE</th>
            <th>DOSAGE</th>
            <th>AVAILABILITY</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>
          {tableProducts.map((item, index) => (
            <tr key={index}>
              <td>{item.product}</td>
              <td>{item.activeSubstance}</td>
              <td>{item.dosage}</td>
              <td>{item.availability}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className={styles.desktop_container}>
      {/* Main banner section with logo, text, and social media links */}
      <div className={styles.muscle_juice_banner}>
        <div className={styles.banner_logo}>
          <img 
            src={logo_1} 
            alt="Muscle Juice Logo" 
            className= {styles.logo_image}
          />
        </div>
        
        {/* Dynamic banner text from API */}
        <div className={styles.banner_text}>
          {bannerText.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        
        {/* Social media icons */}
        <div className={styles.social_icons}>
          <div className={styles.social_icon}>
            <a href="https://instagram.com/_u/muscle_juice_official"
               target="_blank" rel="noopener">
              <img
                  src={instagramIcon}
                  alt="Instagram"
                  className={styles.social_icon_image}
              />
            </a>
          </div>
          <div className={styles.social_icon}>
            <a href="https://t.me/muscularjuicer">
            <img
                  src={telegramIcon}
                  alt="Telegram"
                  className={styles.social_icon_image}
              />
            </a>
          </div>
          <div className={styles.social_icon}>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=musclejuice24@proton.me" target="_blank" rel="noopener">
            <img
                src={emailIcon}
                alt="Email"
                className={styles.social_icon_image}
            />
            </a>
          </div>
        </div>
      </div>

      {/* Header section with company logos */}
      <div className={styles.header}>
        <div className={styles.logo_container}>
          <div className={styles.logo}>
            <img 
              src={logo_2} 
              alt="BioCore Logo" 
              className={styles.biocore_logo_image}
            />
          </div>
          <div className={styles.logo}>
            <img
              src={img_5}
              alt="BioCore Logo"
              className={styles.biocore_logo_image_2}
            />
          </div>
        </div>
      </div>

      {/* First product table (row 1) */}
      {renderTable(groupedProducts[1] || [])}

      {/* Company logos section */}
      <div className={styles.companies_section}>
        <div className={styles.company_logo}>
          <div className={styles.company_icon}>
            <img 
              src={img_1} 
              alt="Hilma Logo" 
              className={styles.company_logo_image}
            />
          </div>
        </div>

        <div className={styles.company_logo}>
          <div className={styles.company_icon}>
            <img
                src={img_2}
                alt="British Dragon Logo"
                className={styles.company_logo_image}
            />
          </div>
        </div>
        
        <div className={styles.company_logo}>
          <div className={styles.company_icon}>
            <img 
              src={img_3}
              alt="British Dragon Logo" 
              className={styles.company_logo_image}
            />
          </div>
        </div>
        
        <div className={styles.company_logo}>
          <div className={styles.company_icon}>
            <img 
              src={img_4}
              alt="Pharmaqo Logo" 
              className={styles.company_logo_image}
            />
          </div>
        </div>
      </div>

      {/* Second product table (row 2) with special styling */}
      {renderTable(groupedProducts[2] || [], styles.second_table)}

      {/* Third product table (row 3) */}
      {renderTable(groupedProducts[3] || [])}
    </div>
  );
};

export default Home;
