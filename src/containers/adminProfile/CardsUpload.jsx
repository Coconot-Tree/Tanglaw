import React from 'react';
import { Segment } from 'semantic-ui-react';
import arrow from '../../assets/downarrow.png';
import './cards-upload.css';

const CardsUpload = ({Thesis,Abstract, Tag1, Tag2, Tag3 }) => {
  return (
    <div className="tanglaw__upload">
        <div className='tanglaw__upload-container'>
          <div class="tanglaw__dropdown">
              <button class="tanglaw__dropdown-button"><img src={arrow}/></button>
              <div class="tanglaw__dropdown-content">
                <a href="#">Edit</a>
                <a href="#">Delete</a>
              </div>
          </div>
          <a href='#'> <h3>{Thesis}</h3> </a>
          <p>{Abstract}</p>

          <div className='tanglaw__upload-tags'>
              <p><strong>Tags: </strong></p> 
              <p><a href='#'>{Tag1} </a></p>
              <p><a href='#'> {Tag2} </a></p>
              <p><a href='#'>{Tag3} </a> </p>
          </div>
        </div>
    </div>
  )
}

export default CardsUpload;