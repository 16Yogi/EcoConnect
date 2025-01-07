import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/login', formData);
      console.log(response.data); // Server response

      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify(response.data));

      // Trigger a page reload to update the header
      window.location.reload();

      alert('Login Successful!');
      navigate('/'); // Redirect to home page (or dashboard)
    } catch (error) {
      console.error('Login failed:', error);
      alert(error.response?.data?.message || 'Invalid credentials or server error');
    }
  };

  return (
    <div className="container-fluid my-5" id='reg-cf'>
      <div className="container">
        <div className="col-6 py-3 px-4 mx-auto" id='item'>
          <h2>Login</h2>
          <hr />
          <form onSubmit={handleSubmit}>
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
            <button type="submit" className="btn btn-info mt-3">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
