import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import './Register.css';
import axios from 'axios';

function Register() {
  const navigate = useNavigate(); // Use useNavigate for navigation
  const [userType, setUserType] = useState(''); // Track the selected user type
  const [formData, setFormData] = useState({
    complexName: '',
    complexId: '',
    companyContact: '',
    companyUsername: '',
    companyPassword: '',
    address: '',
    totalParkingLevels: '',
    companyName: '',
    contact: '',
    empName: '',
    tenantUserName :'',
    tenantUserUsername: '',
    tenantUserPassword: '',
    tenantUserContact: '',
    tenantUserMail: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    parkingLevelCapacity:'',
    complexAddress:'', 
    complexUsername: '',
    complexPassword: '',
    companyId:'',
    userContact:'',
    userMail:'',
    userName:'',
    userPassword:'',
    userUsername:'',
  });

  const [errors, setErrors] = useState({});


  const [complexes, setComplexes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8282/api/getcomplexes')
            .then(response => {
                setComplexes(response.data);
            })
            .catch(error => {
                console.error('Error fetching complexes:', error);
            });
    }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSelectChange = (e) => {
    setUserType(e.target.value);
  };

  const validateForm = () => {
    let newErrors = {};

    if (userType === 'complex') {
      if (!formData.complexName) newErrors.complexName = 'Complex name is required';
      if (!formData.address) newErrors.address = 'Address is required';
      if (!formData.totalParkingLevels) newErrors.totalParkingLevels = 'Total parking levels is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.username) newErrors.username = 'Username is required';
      if (!formData.password) newErrors.password = 'Password is required';
      if (!/^[a-zA-Z0-9]*$/.test(formData.password)) newErrors.password = 'Password must be alphanumeric';
      if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords must match';
    }
    
    if (userType === 'company') {
      if (!formData.complexName) newErrors.complexName = 'Complex name is required';
      if (!formData.companyName) newErrors.companyName = 'Company name is required';
      if (!formData.companyContact) newErrors.companyContact = 'Company contact is required';
      
      if (!formData.companyUsername) newErrors.companyUsername = 'Username is required';
      if (!formData.companyPassword) newErrors.companyPassword = 'Password is required';
      if (!/^[a-zA-Z0-9]*$/.test(formData.companyPassword)) newErrors.companyPassword = 'Password must be alphanumeric';
      if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords must match';
    }
    
    if (userType === 'employee') {
      if (!formData.complexName) newErrors.complexName = 'Complex name is required';
      if (!formData.companyName) newErrors.companyName = 'Company name is required';
      if (!formData.empName) newErrors.empName = 'Employee name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.username) newErrors.username = 'Username is required';
      if (!formData.password) newErrors.password = 'Password is required';
      if (!/^[a-zA-Z0-9]*$/.test(formData.password)) newErrors.password = 'Password must be alphanumeric';
      if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords must match';
    }
    
    if (userType === 'tenant') {
      if (!formData.tenantName) newErrors.tenantName = 'Tenant name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.username) newErrors.username = 'Username is required';
      if (!formData.password) newErrors.password = 'Password is required';
      if (!/^[a-zA-Z0-9]*$/.test(formData.password)) newErrors.password = 'Password must be alphanumeric';
      if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords must match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handlecomplexSubmit = async (event) => {
    event.preventDefault();

    const data = {
        complexName: formData.complexName,
        complexAddress: formData.complexAddress,
        totalParkingLevels: parseInt(formData.totalParkingLevels),
        totalTenantParkingLevels: parseInt(formData.totalTenantParkingLevels),
        parkingLevelCapacity: parseInt(formData.parkingLevelCapacity),
        tenantParkingLevelCapacity: parseInt(formData.tenantParkingLevelCapacity),
        complexUsername: formData.complexUsername,
        complexPassword: formData.complexPassword
    };

    try {
      const response = await fetch('http://localhost:8282/api/addcomplex', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      });

      console.log(data);

      if (response.ok) {
          // Handle success
          alert('Complex Registration done successfully');
          navigate('/login');
      } else {
          // Handle errors

          const errorText = await response.text();  // Use text() to get non-JSON responses
          console.error('Error response:', errorText);
          alert('Error during registration. Please check the console for details.');
          //const errorData = await response.json();
          // console.error('Error:', errorData);
      }
  } catch (error) {
      console.error('Request failed', error);
  }
};

  const handlecompanySubmit = async (event) => {
    event.preventDefault();
  
    const data = {
        companyName: formData.companyName,
        companyContact: parseInt(formData.companyContact),
        complexId: parseInt(formData.complexId), // Include complexId
        companyUsername: formData.companyUsername,
        companyPassword: formData.companyPassword,
    };

    try {
        const response = await fetch('http://localhost:8282/api/companies/addcompany', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        console.log(data);

        if (response.ok) {
            // Handle success
            alert('Company Registration done successfully');
            navigate('/login');
        } else {
            // Handle errors

            const errorText = await response.text();  // Use text() to get non-JSON responses
            console.error('Error response:', errorText);
            alert('Error during registration. Please check the console for details.');
            //const errorData = await response.json();
            // console.error('Error:', errorData);
        }
    } catch (error) {
        console.error('Request failed', error);
    }
};


const handletenantSubmit = async (event) => {
  event.preventDefault();

  const data = {
      // tenantUserId: parseInt(formData.tenantUserId),
      tenantUserName :formData.tenantUserName,
      tenantUserUsername:formData.tenantUserUserName,
      tenantUserPassword:formData.tenantUserPassword,
      tenantUserContact:formData.tenantUserContact,
      tenantUserMail:formData.tenantUserMail,
  };

  try {
      const response = await fetch('http://localhost:8282/api/tenant-users/addtenantuser', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      });
      
      console.log(data);

      if (response.ok) {
          // Handle success
          alert('Tenant Registration done successfully');
          navigate('/login');
      } else {
          // Handle errors

          const errorText = await response.text();  // Use text() to get non-JSON responses
          console.error('Error response:', errorText);
          alert('Error during registration. Please check the console for details.');
          //const errorData = await response.json();
          // console.error('Error:', errorData);
      }
  } catch (error) {
      console.error('Request failed', error);
  }
};

const handleemployeeSubmit = async (event) => {
  event.preventDefault();

  const data = {
      companyId: parseInt(formData.companyId),
      userContact :parseInt(formData.userContact),
      userMail:formData.userMail,
      userName:formData.userName,
      userPassword:formData.userPassword,
      userUsername:formData.userUsername
  };

  try {
      const response = await fetch('http://localhost:8282/api/users/adduser', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      });
      
      console.log(data);

      if (response.ok) {
          // Handle success
          alert('Employee Registration done successfully');
          navigate('/login');
      } else {
          // Handle errors

          const errorText = await response.text();  // Use text() to get non-JSON responses
          console.error('Error response:', errorText);
          alert('Error during registration. Please check the console for details.');
          //const errorData = await response.json();
          // console.error('Error:', errorData);
      }
  } catch (error) {
      console.error('Request failed', error);
  }
};


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Registration successful!');
      navigate('/login'); // Redirect to login page
    } else {
      alert('Registration failed. Please check the errors and try again.');
    }
  };

  return (
    <div>
      <div className="form-group">
        <label htmlFor="userType">Select User Type</label>
        <select
          id="userType"
          className="form-control"
          value={userType}
          onChange={handleSelectChange}
        >
          <option value="">Select user type</option>
          <option value="complex">Complex Registration</option>
          <option value="company">Company Registration</option>
          <option value="employee">Employee Registration</option>
          <option value="tenant">Tenant Registration</option>
        </select>
        {errors.userType && <p className="error">{errors.userType}</p>}
      </div>

      {userType === 'complex' && (
        <form onSubmit={handlecomplexSubmit}>
          <div className="form-group">
            <label htmlFor="complexName">Complex Name</label>
            <input
              type="text"
              id="complexName"
              className="form-control"
              placeholder="Enter complex name"
              value={formData.complexName}
              onChange={handleChange}
            />
            {errors.complexName && <p className="error">{errors.complexName}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="complexAddress">Address</label>
            <input
              type="text"
              id="complexAddress"
              className="form-control"
              placeholder="Enter address"
              value={formData.complexAddress}
              onChange={handleChange}
            />
            {errors.complexAddress && <p className="error">{errors.complexAddress}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="totalParkingLevels">Total Parking Levels</label>
            <input
              type="number"
              id="totalParkingLevels"
              className="form-control"
              placeholder="Enter total parking levels"
              value={formData.totalParkingLevels}
              onChange={handleChange}
            />
            {errors.totalParkingLevels && <p className="error">{errors.totalParkingLevels}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="totalTenantParkingLevels">Total Tenant Parking Levels</label>
            <input
              type="number"
              id="totalTenantParkingLevels"
              className="form-control"
              placeholder="Enter total tenant parking levels"
              value={formData.totalTenantParkingLevels}
              onChange={handleChange}
            />
            {errors.totalTenantParkingLevels && <p className="error">{errors.totalTenantParkingLevels}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="parkingLevelCapacity">Total Parking Level capacity</label>
            <input
              type="number"
              id="parkingLevelCapacity"
              className="form-control"
              placeholder="Enter total parking level capacity"
              value={formData.parkingLevelCapacity}
              onChange={handleChange}
            />
            {errors.parkingLevelCapacity && <p className="error">{errors.parkingLevelCapacity}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="tenantParkingLevelCapacity">Total Tenant Parking Level capacity</label>
            <input
              type="number"
              id="tenantParkingLevelCapacity"
              className="form-control"
              placeholder="Enter total tenant parking level capacity"
              value={formData.tenantParkingLevelCapacity}
              onChange={handleChange}
            />
            {errors.tenantParkingLevelCapacity && <p className="error">{errors.tenantParkingLevelCapacity}</p>}
          </div>
          {/* <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div> */}
          <div className="form-group">
            <label htmlFor="complexUsername">Username</label>
            <input
              type="text"
              id="complexUsername"
              className="form-control"
              placeholder="Enter username"
              value={formData.complexUsername}
              onChange={handleChange}
            />
            {errors.complexUsername && <p className="error">{errors.complexUsername}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="complexPassword">Password</label>
            <input
              type="complexPassword"
              id="complexPassword"
              className="form-control"
              placeholder="Enter password"
              value={formData.complexPassword}
              onChange={handleChange}
            />
            {errors.complexPassword && <p className="error">{errors.complexPassword}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="form-control"
              placeholder="Enter confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
          </div>
          <button type="submit" className="btn">Register</button>
        </form>
      )}

      {userType === 'company' && (
        <form onSubmit={handlecompanySubmit}>
          <div className="form-group">
                        <label htmlFor="complexId">Complex Name</label>
                        <select
                            type="text"
                            id="complexId"
                            className="form-control"
                            value={formData.complexId}
                            onChange={handleChange}
                        >
                            <option value="">Select Complex</option>
                            {complexes.map(complex => (
                                <option key={complex.complexId} value={complex.complexId}>
                                    {complex.complexName}
                                </option>
                            ))}
                        </select>
                        {errors.complexId && <p className="error">{errors.complexId}</p>}
                    </div>
      <div className="form-group">
        <label htmlFor="companyName">Company Name</label>
        <input
          type="text"
          id="companyName"
          className="form-control"
          placeholder="Enter company name"
          value={formData.companyName}
          onChange={handleChange}
        />
        {errors.companyName && <p className="error">{errors.companyName}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="companyContact">Company Contact</label>
        <input
          type="text"
          id="companyContact"
          className="form-control"
          placeholder="Enter company contact"
          value={formData.companyContact}
          onChange={handleChange}
        />
        {errors.companyContact && <p className="error">{errors.companyContact}</p>}
      </div>
      
      <div className="form-group">
        <label htmlFor="companyUsername">Username</label>
        <input
          type="text"
          id="companyUsername"
          className="form-control"
          placeholder="Enter username"
          value={formData.companyUsername}
          onChange={handleChange}
        />
        {errors.companyUsername && <p className="error">{errors.companyUsername}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="companyPassword">Password</label>
        <input
          type="password"
          id="companyPassword"
          className="form-control"
          placeholder="Enter password"
          value={formData.companyPassword}
          onChange={handleChange}
        />
        {errors.companyPassword && <p className="error">{errors.companyPassword}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          className="form-control"
          placeholder="Enter confirm password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>
          <button type="submit" className="btn">Register</button>
        </form>
      )}



      {userType === 'employee' && (
        <form onSubmit={handleemployeeSubmit}>
         
          <div className="form-group">
            <label htmlFor="companyId">Company id</label>
            <input
              type="number"
              id="companyId"
              className="form-control"
              placeholder="Enter company Id"
              value={formData.companyId}
              onChange={handleChange}
            />
            {errors.companyId && <p className="error">{errors.companyId}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="userContact">Contact No</label>
            <input
              type="number"
              id="userContact"
              className="form-control"
              placeholder="Enter employee contact no"
              value={formData.userContact}
              onChange={handleChange}
            />
            {errors.userContact && <p className="error">{errors.userContact}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="userMail">Email</label>
            <input
              type="text"
              id="userMail"
              className="form-control"
              placeholder="Enter email"
              value={formData.userMail}
              onChange={handleChange}
            />
            {errors.userMail && <p className="error">{errors.usermail}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="userName">Employee User name</label>
            <input
              type="text"
              id="userName"
              className="form-control"
              placeholder="Enter user name"
              value={formData.userName}
              onChange={handleChange}
            />
            {errors.userName && <p className="error">{errors.userName}</p>}
          </div>
         
          <div className="form-group">
            <label htmlFor="userPassword">Password</label>
            <input
              type="password"
              id="userPassword"
              className="form-control"
              placeholder="Enter password"
              value={formData.userPassword}
              onChange={handleChange}
            />
            {errors.userPassword && <p className="error">{errors.userPassword}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="form-control"
              placeholder="Enter confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="userUsername">Employee Username</label>
            <input
              type="text"
              id="userUsername"
              className="form-control"
              placeholder="Enter user name"
              value={formData.userUsername}
              onChange={handleChange}
            />
            {errors.userUsername && <p className="error">{errors.userUsername}</p>}
          </div>
          <button type="submit" className="btn">Register</button>
        </form>
      )}

      {userType === 'tenant' && (
        <form onSubmit={handletenantSubmit}>
          <div className="form-group">
            <label htmlFor="tenantUserName">Tenant Name</label>
            <input
              type="text"
              id="tenantUserName"
              className="form-control"
              placeholder="Enter Tenant name"
              value={formData.tenantUserName}
              onChange={handleChange}
            />
            {errors.tenantUserName && <p className="error">{errors.tenantUserName}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="tenantUserUserName">User Name</label>
            <input
              type="text"
              id="tenantUserUserName"
              className="form-control"
              placeholder="Enter Tenant UserName"
              value={formData.tenantUserUserName}
              onChange={handleChange}
            />
            {errors.tenantUserUserName && <p className="error">{errors.tenantUserUserName}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="tenantUserPassword">Password</label>
            <input
              type="password"
              id="tenantUserPassword"
              className="form-control"
              placeholder="Enter Password"
              value={formData.tenantUserPassword}
              onChange={handleChange}
            />
            {errors.tenantUserPassword && <p className="error">{errors.tenantUserPassword}</p>}
          </div>
         
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="form-control"
              placeholder="Enter confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="tenantUserContact">Contact No.</label>
            <input
              type="text"
              id="tenantUserContact"
              className="form-control"
              placeholder="Enter Contact No"
              value={formData.tenantUserContact}
              onChange={handleChange}
            />
            {errors.tenantUserContact && <p className="error">{errors.tenantUserContact}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="tenantUserMail">Mail</label>
            <input
              type="text"
              id="tenantUserMail"
              className="form-control"
              placeholder="Enter Mail"
              value={formData.tenantUserMail}
              onChange={handleChange}
            />
            {errors.tenantUserMail && <p className="error">{errors.tenantUserMail}</p>}
          </div>
          <button type="submit" className="btn">Register</button>
        </form>
      )}
    </div>
  );
}

export default Register;
