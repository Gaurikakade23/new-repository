// src/components/Services.js
import React from 'react';
import image1 from '../Images/Commerical.jpeg';
import image2 from '../Images/bike image.jpg';
import image3 from '../Images/car3.webp';
import image4 from '../Images/tenant.jpg';
import image5 from '../Images/slot.jpg';
import image6 from '../Images/onlinetransaction.jpg';
import './Services.css';

function Services() {
  return (
    <section className="services" id="services">
      <h2>Our Features</h2>
      <p>Explore our wide range of features.</p>
      <ul className="cards">
        <li className="card">
          <img src={image1} alt="Commercial" />
          <h3>Commercial Complex</h3>
          <p>Commercial Parking Slot</p>
        </li>
        <li className="card">
          <img src={image2} alt="Bike" />
          <h3>Park your Bike Safe</h3>
          <p>Reserve your Slot and Park Safely</p>
        </li>
        <li className="card">
          <img src={image3} alt="Car" />
          <h3>Park your Car Safe</h3>
          <p>Explore Your Parking Option with Go-Park</p>
        </li>
        <li className="card">
          <img src={image4} alt="Tenant" />
          <h3>Tenant Park</h3>
          <p>Pay & Park Easily with Go-Park</p>
        </li>
        <li className="card">
          <img src={image5} alt="Book Slot" />
          <h3>Book your Slot</h3>
          <p>Reserve your Slot Easily through the System</p>
        </li>
        <li className="card">
          <img src={image6} alt="Payment" />
          <h3>Digital Payment</h3>
          <p>Book your Slot and make Digital Payment through the System</p>
        </li>
      </ul>
    </section>
  );
}

export default Services;
