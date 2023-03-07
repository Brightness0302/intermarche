import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';

import Login from './components/Page/Login';
import Register from './components/Page/Register';
import Demands from './components/Page/Demands';
import Dashboard from './components/Page/Dashboard';
import Edit from './components/Layout/Navbar';

function App() {
  return (
    <div className='bg-ground text-nortext font-SFProText'>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/demands" element={<Demands />} />
          <Route path="/profile" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
