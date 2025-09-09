import React, { useState, useEffect } from 'react';
import { apiService } from '../services/api';
import styles from './css/home.module.css'

import logo_1 from '../assets/images/logo_1.png'
import logo_2 from '../assets/images/logo_2.png'
import instagramIcon from '../assets/images/instagram.png'
import telegramIcon from '../assets/images/telegram.png'
import whatsappIcon from '../assets/images/whatsapp.png'
import emailIcon from '../assets/images/mail.png'

import img_1 from '../assets/images/img_1.png'
import img_2 from '../assets/images/img_2.png'
import img_3 from '../assets/images/img_3.png'
import img_4 from '../assets/images/img_4.png'
import img_5 from '../assets/images/img_5.png'

const Home = () => {
  const [products, setProducts] = useState([]);
  const [textContent, setTextContent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
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

  const formatProductData = (product) => {
    if (!product || !product.insides || !Array.isArray(product.insides)) {
      return {
        product: 'N/A',
        activeSubstance: 'N/A',
        volume: 'N/A',
        stock: 'N/A',
        price: 'N/A'
      };
    }

    const insides = product.insides[0] || {};
    return {
      product: insides.name || 'N/A',
      activeSubstance: insides.activeSubstance || 'N/A',
      volume: insides.volume || 'N/A',
      stock: insides.stock || 'N/A',
      price: insides.price || 'N/A'
    };
  };

  if (loading) {
    return <div className={styles.desktop_container}>Loading...</div>;
  }

  const defaultProducts = [
    { product: 'Pharmatest E300', activeSubstance: 'text', volume: '10ml \\ 300mg', stock: 'text', price: '110' },
    { product: 'Pharmatest E500', activeSubstance: 'text', volume: '10ml \\ 500mg', stock: 'text', price: '110' },
    { product: 'Pharmatest C250', activeSubstance: 'text', volume: '10ml \\ 250mg', stock: 'In Stock', price: '110' },
    { product: 'Pharmatest P100', activeSubstance: 'text', volume: '10ml \\ 100mg', stock: 'In Stock', price: '110' },
  ];

  const displayProducts = products.length > 0 ? products.map(formatProductData) : defaultProducts;
  const bannerText = textContent?.text || 'Мы крутые отправка бла\nбоа боа';

  return (
    <div className={styles.desktop_container}>
      <div className={styles.muscle_juice_banner}>
        <div className={styles.banner_logo}>
          <img 
            src={logo_1} 
            alt="Muscle Juice Logo" 
            className= {styles.logo_image}
          />
        </div>
        
        <div className={styles.banner_text}>
          {bannerText.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        
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

      <div className={styles.table_section}>
        <table className={styles.product_table}>
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
            {displayProducts.map((item, index) => (
              <tr key={index}>
                <td>{item.product}</td>
                <td>{item.activeSubstance}</td>
                <td>{item.volume}</td>
                <td>{item.stock}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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

      <div className={styles.table_section}>
        <table className={`${styles.product_table} ${styles.second_table}`}>
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
            {displayProducts.map((item, index) => (
              <tr key={index}>
                <td>{item.product}</td>
                <td>{item.activeSubstance}</td>
                <td>{item.volume}</td>
                <td>{item.stock}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.table_section}>
        <table className={styles.product_table}>
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
          {displayProducts.map((item, index) => (
              <tr key={index}>
                <td>{item.product}</td>
                <td>{item.activeSubstance}</td>
                <td>{item.volume}</td>
                <td>{item.stock}</td>
                <td>{item.price}</td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
