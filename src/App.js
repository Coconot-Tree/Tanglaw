import React from 'react';

import { Navbar, Sidebar } from './components';

import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
        </div>
            <Sidebar />
    </div>
  )
}

export default App;