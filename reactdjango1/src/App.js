import './App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from 'axios';

import Home from './pages/Home';
import UserRegister from './pages/UserRegister';

function App() {
  return (
    <div className="App body-bg min-h-screen">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <Router>

        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/userreg" element={<UserRegister />} />
          </Routes>

      </Router>

    </div>
  );
}

export default App;
