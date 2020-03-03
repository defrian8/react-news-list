import React, { useState, useEffect } from 'react';
import api from '../../config/api';
// import './App.css';
import Nav from '../Nav/Nav';
import {BrowserRouter } from 'react-router-dom';

import Routes from '../../config/Routes';

function App() {


  return (
    <BrowserRouter>

      <div className="body-wrapper">
        <header>
          <Nav />
        </header>
        <main className="main">
          <div className="container">
            <section className="content">
              <Routes />
            </section>
          </div>
        </main>
        <footer>
          <div className="footer-container">
            <div className="footer-content">
              &copy; 2019 all righ reverse
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>

  );
}

export default App;
