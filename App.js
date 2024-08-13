
// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Header from './Header/Header';
// // import HomePage from './HomePage/HomePage';
// // import Services from './Services/Services';
// // import About from './About/About';
// // import Footer from './Footer/Footer';
// // import Login from './Login/Login';
// // import Register from './Register/Register';
// // import Dashboard from './Dashboard/Dashboard';
// // import './App.css';

// // function App() {
// //   return (
// //     <Router>
// //       <div className="App">
// //         <Header />
// //         <Routes>
// //           <Route path="/" element={<><HomePage /><Services /><About /><Footer /></>} />
// //           <Route path="/services" element={<Services />} />
// //           <Route path="/about" element={<About />} />
// //           <Route path="/admin/dashboard" element={<Dashboard />} />
// //           <Route path="/login" element={<Login />} />
// //           <Route path="/register" element={<Register />} />
// //           <Route path="/footer" element={<Footer />} />
// //         </Routes>
// //       </div>
// //     </Router>

// //   );
// // }

// // export default App;



// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './Header/Header';
// import HomePage from './HomePage/HomePage';
// import Services from './Services/Services';
// import About from './About/About';
// import Footer from './Footer/Footer';
// import Login from './Login/Login';
// import Register from './Register/Register';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Routes>
//           <Route path="/" element={<><HomePage /><Services /><About /><Footer /></>} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/footer" element={<Footer />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import Services from './Services/Services';
import About from './About/About';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import Register from './Register/Register';
import AdminDashboard from './Dashboard/AdminDashboard';
import CompanyDashboard from './Dashboard/CompanyDashboard';
import UserDashboard from './Dashboard/UserDashboard';
import EmployeeDashboard from './Dashboard/EmployeeDashboard';
import TenantDashboard from './Dashboard/TenantDashboard';
import EmployeeConfirmation from './Dashboard/EmployeeConfirmation';
import ComplexDashboard from './Dashboard/ComplexDashboard ';
import CompanyLogin from './Login/companyLogin';
import BookingGrid from './Dashboard/BookingGrid';
import SlotGrid from './Dashboard/SlotGrid';
import BookingDetails from './Dashboard/BookingDetails';
import GridEmployee from './Dashboard/GridEmployee';



import './App.css';
import Grid from './Dashboard/Grid';

function App() {
  const [userType, setUserType] = React.useState(null);
  const navigate = useNavigate();

  const handleLogin = (type) => {
    setUserType(type);
    if (type === 'company') {
      navigate('/company-dashboard');
    } else if (type === 'admin') {
      navigate('/admin-dashboard');
    }
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<><HomePage /><Services /><About /><Footer /></>} />
        <Route path="/services" element={<><Services /></>} />
        <Route path="/about" element={<><About /></>} />
        <Route path="/login" element={<><Login onLogin={handleLogin} /></>} />
        <Route path="/register" element={<><Register /></>} />
        <Route path="/company-dashboard" element={<><CompanyDashboard /></>} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
        <Route path="/tenant-dashboard" element={<TenantDashboard />} />
        <Route path="/employee-dashboard" element={<EmployeeConfirmation />} />
        <Route path="/complex-dashboard" element={<ComplexDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        
        <Route path="/CompanyDashboard" element={<CompanyDashboard />} />
        <Route path="/ComplexDashboard" element={<ComplexDashboard />} />
        <Route path="/UserDashboard" element={<UserDashboard />} />
        <Route path="/TenantDashboard" element={<TenantDashboard />} />
        {/* <Route path="/EmployeeDashboard" element={<EmployeeDashboard />} /> */}
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
        <Route path="/booking-grid/:complexID" element={<BookingGrid />} />

        <Route path="/register" element={<><Register /></>} />
        <Route path="/CompanyLogin" element={<CompanyLogin />} />

        <Route path="/company-dashboard" element={<CompanyDashboard />} />
        <Route path="/grid/:levelID" element={<Grid/>} />
        <Route path="/" element={<Grid />} />
        <Route path="/slot-grid/:slotId" element={<SlotGrid />} />
        <Route path="/booking-details/:slotId" element={<BookingDetails />} />
        <Route path="/booking-details/:slotId" element={<BookingDetails />} />
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
        <Route path="/grid-employee/:complexID" element={<GridEmployee />} />
        <Route path="/grid" element={<Grid />} />
      </Routes>
      {/* <Footer /> */}
    </div>


  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
