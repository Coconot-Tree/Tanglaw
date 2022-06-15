import React from 'react';
import './sidebar.css'

import {Search, Browse } from '../../containers';

const Sidebar = () => {
  return (
    <div className="tanglaw__sidebar">
      <div className='tanglaw__sidebar-links'>
        <div className="tanglaw__sidebar-links_container">
          <Search />
          <Browse />
        </div>
      </div>

    </div>
  )
}

export default Sidebar;