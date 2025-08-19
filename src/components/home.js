import React from 'react';

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
  const productData = [
    { product: 'Pharmatest E300', activeSubstance: 'text', volume: '10ml \\ 300mg', stock: 'text', price: '110' },
    { product: 'Pharmatest E500', activeSubstance: 'text', volume: '10ml \\ 500mg', stock: 'text', price: '110' },
    { product: 'Pharmatest C250', activeSubstance: 'text', volume: '10ml \\ 250mg', stock: 'text', price: '110' },
    { product: 'Pharmatest P100', activeSubstance: 'text', volume: '10ml \\ 100mg', stock: 'text', price: '110' },
  ];

  return (
    <div className={styles.desktop_container}>
      {/* Muscle Juice Banner */}
      <div className={styles.muscle_juice_banner}>
        <div className={styles.banner_logo}>
          <img 
            src={logo_1} 
            alt="Muscle Juice Logo" 
            className= {styles.logo_image}
          />
        </div>
        
        <div className={styles.banner_text}>
          <p>Мы крутые отправка бла</p>
          <p>боа боа</p>
        </div>
        
        <div className={styles.social_icons}>
          <div className={styles.social_icon}>
            <img 
              src={instagramIcon} 
              alt="Instagram" 
              className={styles.social_icon_image}
            />
          </div>
          <div className={styles.social_icon}>
            <img 
              src={telegramIcon} 
              alt="Telegram" 
              className={styles.social_icon_image}
            />
          </div>
          <div className={styles.social_icon}>
            <img 
              src={whatsappIcon} 
              alt="WhatsApp" 
              className={styles.social_icon_image}
            />
          </div>
          <div className={styles.social_icon}>
            <img 
              src={emailIcon} 
              alt="Email" 
              className={styles.social_icon_image}
            />
          </div>
        </div>
      </div>

      {/* BioCore Header */}
      <div className={styles.header}>
        <div className={styles.logo_container}>
          <div className={styles.logo}>
            <img 
              src={logo_2} 
              alt="BioCore Logo" 
              className={styles.logo_image}
            />
          </div>
        </div>
      </div>

      {/* First Table */}
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
            {productData.map((item, index) => (
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

      {/* Company Logos Section */}
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

        <div className={styles.company_logo}>
          <div className={styles.company_icon}>
            <img
              src={img_5}
              alt="Pharmaqo Logo"
              className={styles.company_logo_image}
            />
          </div>
        </div>
      </div>

      {/* Second Table */}
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
            {productData.map((item, index) => (
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
          {productData.map((item, index) => (
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
