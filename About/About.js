// src/components/About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <h2>About Us</h2>
      <p>Welcome to Go-Park System, where we revolutionize the way you experience parking. 
        Our mission is to provide efficient, reliable, and user-friendly parking solutions tailored to meet the needs of modern urban environments.</p>
      <div className="row company-info">
        <h3>Our Story</h3>
        <p>Born from a vision to simplify the chaotic and time-consuming process of finding parking, 
          Go-Park System founded by a team of passionate innovators and technologists. We understand the frustration of circling blocks endlessly or missing important appointments due to parking woes. That's why we set out 
          to create a seamless parking experience through cutting-edge technology and customer-centric design.</p>
      </div>
      <div className="WhatWeDo">
        <h3>What We Do</h3>
        <p>At Go-Park System, we offer a comprehensive range of parking solutions, including-
            Smart Parking Systems: Our smart parking systems help drivers find available parking spots quickly and efficiently.
            Custom Solutions: We provide tailored parking solutions for Commercial complexes.</p>
      </div>
    </section>
  );
}

export default About;
