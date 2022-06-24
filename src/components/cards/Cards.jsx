import React from 'react';
import './cards.css';
import { Segment } from 'semantic-ui-react';

const Cards = ({CTitle, CLink, CText, CAbout, Cpup, Ccea, CAddress, CCity, CNum1, CNum2, CEmail}) => {
  return (
    <div className="tanglaw__cards">
        <div className='tanglaw__cards-container'>
            <div className='tanglaw__cards-text'>
              <a href={CLink}>
              <Segment>
                <h3>{CTitle}</h3>
                <p>{CText}</p>
              </Segment>
              </a>
              <Segment>
                <p>{CAbout}</p>
              </Segment>
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