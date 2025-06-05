import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './login';
import ForgotPassword from './forgotPassword';
import ResetPassword from './resetPassword';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard';
import LeadID from './leadID';
import CallableLeadID from './callableLeadID ';
import TotalSales from './totalSales';
import Setting from './setting';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgot" element={<ForgotPassword />} />
      <Route path="/reset" element={<ResetPassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/leadid" element={<LeadID />} />
      <Route path="/callable" element={<CallableLeadID />} />
      <Route path="/sale" element={<TotalSales />} />
      <Route path="/setting" element={<Setting />} />
    </Routes>
  </BrowserRouter>

);
