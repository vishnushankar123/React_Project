

import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import pic1 from './images/3 logo.jpg';
import Home from './Home.js';
import Contact from './Contact.js';
import CheckBMI from './CheckBmi.js';
import Product from './Product.js';
import Movies from './Movies.js';
import Food from './Food.js';
import News from './News.js';
import Weather from './Weather.js';
import Login from './Login.js';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className='container-fluid' id='Navbar'>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ backgroundColor: '#000000' }}>
            <div className="container-fluid">
              <Link className="navbar-brand" to="/Home">
                <img src={pic1} className="d-block" alt="Logo" style={{ width: 50, height: 50 }} />
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/Login" style={{ color: '#ffffff' }}><b>Login</b></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Home" style={{ color: '#ffffff' }}><b>Home</b></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact" style={{ color: '#ffffff' }}><b>Contact</b></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/CheckBmi" style={{ color: '#ffffff' }}><b>CheckBMI</b></Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: '#ffffff' }}>
                      <b>APIs</b>
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><Link className="dropdown-item" to="/Weather" style={{ color: '#000000' }}>Weather API</Link></li>
                      <li><Link className="dropdown-item" to="/News" style={{ color: '#000000' }}>News API</Link></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><Link className="dropdown-item" to="/Food" style={{ color: '#000000' }}>Food Recipe API</Link></li>
                      <li><Link className="dropdown-item" to="/Movies" style={{ color: '#000000' }}>Movies API</Link></li>
                      <li><Link className="dropdown-item" to="/Product" style={{ color: '#000000' }}>Products API</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/CheckBmi" element={<CheckBMI />} />
            <Route path="/Weather" element={<Weather />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Movies" element={<Movies />} />
            <Route path="/Food" element={<Food />} />
            <Route path="/News" element={<News />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}



 


