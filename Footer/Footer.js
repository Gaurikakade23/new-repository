// // src/components/Footer.js
// import React from 'react';
// import './Footer.css';


// function Footer() {
//   return (
//     <footer>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6">
//             <ul className="contact">
//               <li><h4>Contact Us</h4></li>
//               <li>Pune, Maharashtra</li>
//               <li>goparkservice@gmail.com</li>
//               <li>www.gopark.com</li>
//             </ul>
//           </div>
//           <div className="col-md-5">
//             <ul className="qlink">
//               <li><h5>Quick Links</h5></li>
//               <li><a href="#">Home</a></li>
//               <li><a href="./Login.js">Login</a></li>
//             </ul>
//           </div>
//           <div className="col-md-4">
//             <ul className="connected">
//               <li><h5>Stay Connected</h5></li>
//               <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i> Facebook</a></li>
//               <li><a href="#" target="_blank"><i className="fab fa-twitter"></i> Twitter</a></li>
//               <li><a href="#" target="_blank"><i className="fab fa-instagram"></i> Instagram</a></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;


// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ul className="contact">
              <li><h4>Contact Us</h4></li>
              <li>Pune, Maharashtra</li>
              <li>goparkservice@gmail.com</li>
              <li>www.gopark.com</li>
            </ul>
          </div>
          <div className="col-md-5">
            <ul className="qlink">
              <li><h5>Quick Links</h5></li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="connected">
              <li><h5>Stay Connected</h5></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i> Facebook</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i> Twitter</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

