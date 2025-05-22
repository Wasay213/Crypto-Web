import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('http://localhost:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.access);
        localStorage.setItem('username', formData.username);
        navigate('/home');
      } else {
        setError(data.detail || 'Invalid credentials');
      }
    } catch (error) {
      setError('Network error. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
        <h2>Sign in</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input 
                  type="text" 
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required 
                />
                <label>Username</label>
            </div>
            <div className="form-group">
                <input 
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required 
                />
                <label>Password</label>
            </div>

            <button type="submit" className="login-btn">Login</button>
        </form>
    </div>
  );
};

export default SignIn;