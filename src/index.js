import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './login';
import ForgotPassword from './forgotPassword';
import ResetPassword from './resetPassword';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgot" element={<ForgotPassword />} />
      <Route path="/reset" element={<ResetPassword />} />
    </Routes>
  </BrowserRouter>

);
