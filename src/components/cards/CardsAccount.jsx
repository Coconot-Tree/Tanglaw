import React from 'react';
import './cards.css';
import { Segment } from 'semantic-ui-react'

const CardsAccount = ({Name, IdNum}) => {
  return (
    <div className="tanglaw__cards">
        <div className='tanglaw__cards-container'>
            <div className='tanglaw__cards-text'>
                <Segment>
                    <h1>{Name}</h1>
                    <p>{IdNum}</p>
                </Segment>
            </div>
        </div>
    </div>
  )
}

export default CardsAccount;