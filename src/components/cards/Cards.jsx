import React from 'react';
import './cards.css';
import { Segment } from 'semantic-ui-react';



const Cards = ({CTitle, CLink, CText, Cpup, Ccea, CAddress, CCity, CNum1, CNum2, CEmail}) => {
  return (
    <div className="tanglaw__cards">
        <div className='tanglaw__cards-container'>
            <div className='tanglaw__cards-text'>
                <p><a href={CLink}>{CTitle}</a></p>
                <p>{CText}</p>
                <Segment>
                <p>{Cpup}</p>
                <p>{Ccea}</p>
                <p>{CAddress}</p>
                <p>{CCity}</p>
                <p>{CNum1}</p>
                <p>{CNum2}</p>
                <p>{CEmail}</p>
              </Segment>
            </div>
        </div>
    </div>
  )
}

export default Cards;