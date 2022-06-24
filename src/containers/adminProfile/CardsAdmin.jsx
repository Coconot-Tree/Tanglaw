import React from 'react';
import './cards-admin.css';
import { Segment } from 'semantic-ui-react'

const CardsAdmin = ({Name}) => {
  return (
    <div className="tanglaw__admin">
      <div className='tanglaw__admin-profile'>
        <button id="tanglaw__admin-upload"> Upload </button>
        <h1>{Name}</h1>
        <a href='#'>Log Out</a>
      </div>
    </div>
  )
}

export default CardsAdmin;