import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './CompanyLogin.css';

function CompanyLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        // Replace this with actual authentication logic
        // const response = await authenticate(formData.username, formData.password);
        // if (response.success) {
        alert('Login successful!');
        navigate('/CompanyDashboard');
        // } else {
        //   setErrors({ form: 'Invalid username or password' });
        // }
      } catch (error) {
        // Handle error (e.g., show error message)
        setErrors({ form: 'An error occurred during login' });
      } finally {
        setLoading(false);
      }
    } else {
      alert('Login failed. Please check the errors and try again.');
    }
  };

  return (
    <div>
      <h2>Company Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="form-control"
            placeholder="Enter username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        {errors.form && <p className="error">{errors.form}</p>}
        <button type="submit" className="btn" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}

export default CompanyLogin;
