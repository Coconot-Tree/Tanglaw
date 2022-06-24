import React from 'react';
import './cards-account.css';
import { Segment } from 'semantic-ui-react'

const CardsAccount = ({Name}) => {
  return (
    <div className="tanglaw__account">
      <div className='tanglaw__account-profile'>
        <h1>{Name}</h1>
        <a href='#'>Log Out</a>
      </div>
    </div>
  )
}

export default CardsAccount;