import React, { useState } from 'react';
import HeaderCarousel from './Header-Carousel.js';
import './HomePage.css';
const HomePage = () => {
  return (
    <div>
      <div className='Header'>
        <HeaderCarousel />
      </div>
      <div className='Container'>This is Container</div>
      <div className='footer'>This is Footer</div>
    </div>
  );
};

export default HomePage;
