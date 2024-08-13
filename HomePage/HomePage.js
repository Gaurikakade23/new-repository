// src/components/HomePage.js
import React from 'react';
import '../Images/bg4.jpg';
import './HomePage.css';
import '../Login/Login';

function HomePage() {
  return (
    <div className="hometable">
      <div className="homeimg">
        <div className="divhomeimg">
         
          <img className="imghomepage" src="" alt="" />

        </div>
      </div>
      <div className="homepage" id="home">
        <div className="content">
          <div className="text">
            <h1>Explore Your Parking Options with Us!</h1>
            <p>Reserve Your Parking with GO-PARK SYSTEM.</p>
          </div>
          <a href="./Login">Login</a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
