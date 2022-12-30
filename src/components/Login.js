import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
    address: '',
    propertyType: '',
    bedrooms: '',
    voucherCode: '',
  });

  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Perform login or registration here
    console.log(form);
  };

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleFormSubmit}>
        <h1>{isLoginForm ? 'Login' : 'Register'}</h1>
        {!isLoginForm && (
          <>
           <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleInputChange}
          required
            />
              <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
            onChange={handleInputChange}
              required
              />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleInputChange}
              required
            />
            <select
              name="propertyType"
              value={form.propertyType}
              onChange={handleInputChange}
              required
            >
              <option value="">Select property type</option>
              <option value="detached">Detached</option>
              <option value="semi-detached">Semi-detached</option>
              <option value="terraced">Terraced</option>
              <option value="flat">Flat</option>
              <option value="cottage">Cottage</option>
              <option value="bungalow">Bungalow</option>
              <option value="mansion">Mansion</option>
            </select>
            <input
              type="number"
              name="bedrooms"
              placeholder="Number of bedrooms"
              value={form.bedrooms}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="voucherCode"
              placeholder="Voucher code"
              value={form.voucherCode}
              onChange={handleInputChange}
              required
            />
          </>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleInputChange}
          required
        />
       
        <button type="submit">{isLoginForm ? 'Login' : 'Register'}</button>
        <button type="button" onClick={toggleForm}>
          {isLoginForm ? 'Need to register?' : 'Already have an account?'}
        </button>
      </form>
    </div>
  );
};

export default Login;

