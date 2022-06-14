import React from 'react';

import { About, Account, Home, Contact } from './containers';
import { Navbar, Sidebar } from './components';

import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
        </div>
            <Sidebar />
            <About />
    </div>
  )
}

export default App;