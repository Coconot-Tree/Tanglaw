import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar } from './components';
import {Home, About, Account, Contact, NoPage, 
        Authors, Colleges, Disciplines } from './pages';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>   
      <div className='gradient__bg'>
        <Navbar />
      </div>

    <div className="root">
      <button className='button'>New</button>
    </div>

    <div className='App '>
      <Routes>
        <Route index element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Account" element={<Account />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Authors" element={<Authors />} />
        <Route path="Colleges" element={<Colleges />} />
        <Route path="Disciplines" element={<Disciplines />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      
        <Sidebar />
    </div>
    </BrowserRouter>
  )
}

export default App;