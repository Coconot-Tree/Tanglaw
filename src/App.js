import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar } from './components';
import { Home, About, Account, Admin, Contact, NoPage,
  BrowseCE, BrowseIE, BrowseRE, BrowseCET, BrowseEET,
  BrowseECET, BrowseMET, BrowseICT, BrowseOM} from './pages';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>   
      <div className='gradient__bg'>
        <Navbar />
      </div>

    <div className='App '>
      <Routes>
        <Route index element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Account" element={<Account />} />
        <Route path="Admin" element={<Admin />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="BrowseCE" element ={<BrowseCE />} />
        <Route path="BrowseIE" element ={<BrowseIE />} />
        <Route path="BrowseRE" element ={<BrowseRE />} />
        <Route path="BrowseCET" element ={<BrowseCET />} />
        <Route path="BrowseEET" element ={<BrowseEET />} />
        <Route path="BrowseECET" element ={<BrowseECET />} />
        <Route path="BrowseMET" element ={<BrowseMET />} />
        <Route path="BrowseICT" element ={<BrowseICT />} />
        <Route path="BrowseOM" element ={<BrowseOM />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      
        <Sidebar />
    </div>
    </BrowserRouter>
  )
}

export default App;