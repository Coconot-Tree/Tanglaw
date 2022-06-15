import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar } from './components';
import {Home, About, Account, Contact, NoPage } from './pages';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>   
      <div className='gradient__bg'>
        <Navbar />
      </div>

    <div className='App '>
      <div className=''>
      <Routes>
        <Route index element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Account" element={<Account />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      </div>
      <div className=''>
        <Sidebar />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App;