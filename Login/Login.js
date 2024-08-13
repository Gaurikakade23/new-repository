// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// function Login() {
//   const [step, setStep] = useState(1);
//   const [userType, setUserType] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleNext = () => {
//     if (userType === '') {
//       alert('Please select a user type');
//       return;
//     }
//     setStep(2);
//   };

//   const validateForm = () => {
//     if (username === '') {
//       setError('Username must be filled out');
//       return false;
//     }
//     if (password === '') {
//       setError('Password must be filled out');
//       return false;
//     }
//     setError('');
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       try {
//         const response = await fetch('http://localhost:8282/api/auth/login', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             username,
//             password,
//             userType
//           }),
//         });
  
//         if (response.ok) {
//           switch (userType) {
//             case 'Company':
//               navigate('/CompanyDashboard');
//               break;
//             case 'Employee':
//               navigate('/UserDashboard');
//               break;
//             case 'Tenant':
//               navigate('/TenantDashboard');
//               break;
//             case 'Complex':
//               navigate('/ComplexDashboard');
//               break;
//             default:
//               alert('Please select a valid user type');
//           }
//         } else {
//           setError('Invalid username or password');
//         }
//       } catch (error) {
//         setError('An error occurred during login');
//       }
//     }
//   };
  

//   return (
//     <div className="container">
//       {step === 1 ? (
//         <div>
//           <div className="admin-login" style={{ textAlign: 'right' }}>
//             <a href="/AdminDashboard">Admin Login</a>
//           </div>
//           <h2>Login</h2>
//           <div className="form-group">
//             <label htmlFor="userType">User Type</label>
//             <select
//               id="userType"
//               className="form-control"
//               value={userType}
//               onChange={(e) => setUserType(e.target.value)}
//             >
//               <option value="">Select user type</option>
//               <option value="Company">Company</option>
//               <option value="Complex">Complex</option>
//               <option value="Employee">Employee User</option>
//               <option value="Tenant">Tenant User</option>
//             </select>
//             <p>Don't have an account? <a href="/register">Register now</a></p>
//           </div>
//           <button onClick={handleNext} className="btn">Proceed to Login</button>
//         </div>
//       ) : (
//         <div>
//           <h2>Login - {userType}</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="username">Username</label>
//               <input
//                 type="text"
//                 id="username"
//                 className="form-control"
//                 placeholder="Enter username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 className="form-control"
//                 placeholder="Enter password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             {error && <p className="error">{error}</p>}
//             <button type="submit" className="btn">Login</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    if (userType === '') {
      alert('Please select a user type');
      return;
    }
    setStep(2);
  };

  const validateForm = () => {
    if (username === '') {
      setError('Username must be filled out');
      return false;
    }
    if (password === '') {
      setError('Password must be filled out');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:8282/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
            userType
          }),
        });
  
        if (response.ok) {
          switch (userType) {
            case 'Company':
              navigate('/CompanyDashboard');
              break;
            case 'Employee User': // Ensure the correct case is used
              navigate('/EmployeeDashboard'); // Redirect to EmployeeDashboard
              break;
            case 'Tenant':
              navigate('/TenantDashboard');
              break;
            case 'Complex':
              navigate('/ComplexDashboard');
              break;
            default:
              alert('Please select a valid user type');
          }
        } else {
          setError('Invalid username or password');
        }
      } catch (error) {
        setError('An error occurred during login');
      }
    }
  };

  return (
    <div className="container">
      {step === 1 ? (
        <div>
          <div className="admin-login" style={{ textAlign: 'right' }}>
            <a href="/AdminDashboard">Admin Login</a>
          </div>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="userType">User Type</label>
            <select
              id="userType"
              className="form-control"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="">Select user type</option>
              <option value="Company">Company</option>
              <option value="Complex">Complex</option>
              <option value="Employee User">Employee User</option>
              <option value="Tenant">Tenant User</option>
            </select>
            <p>Don't have an account? <a href="/register">Register now</a></p>
          </div>
          <button onClick={handleNext} className="btn">Proceed to Login</button>
        </div>
      ) : (
        <div>
          <h2>Login - {userType}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                className="form-control"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit" className="btn">Login</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
