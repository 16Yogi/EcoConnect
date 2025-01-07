import React, { useState } from 'react';
import axios from 'axios';
import './Registration.css';
import { useNavigate } from 'react-router-dom';

export default function Registration() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/register', formData);
      console.log(response.data); // Server response

      // Store user data in localStorage after successful registration
      localStorage.setItem('user', JSON.stringify(response.data));

      // Redirect to home page after registration success
      alert('Registration Successful!');
      navigate('/'); // Navigate to the home page
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      alert('Registration Failed!');
    }
  };

  return (
    <div className="container-fluid my-5" id='reg-cf'>
      <div className="container">
        <div className="col-6 py-3 px-4 mx-auto" id='item'>
          <h2>Registration</h2>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder='Full Name'
              className='form-control'
              value={formData.fullName}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder='Email'
              className='form-control'
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder='Password'
              className='form-control'
              value={formData.password}
              onChange={handleChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder='Confirm Password'
              className='form-control'
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-info mt-3">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
