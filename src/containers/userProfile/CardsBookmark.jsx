import React from 'react';
import { Segment } from 'semantic-ui-react';
import arrow from '../../assets/downarrow.png';
import './cards-bookmark.css';

const CardsBookmark = ({CLink, CTitle, CAuthor, CText, Tag1, Tag2, Tag3 }) => {
  return (
    <div className="tanglaw__bookmark">
        <div className='tanglaw__bookmark-container'>
          <div class="tanglaw__dropdown">
              <button class="tanglaw__dropdown-button"><img src={arrow}/></button>
              <div class="tanglaw__dropdown-content">
                <a href="#">Remove Bookmark</a>
              </div>
          </div>
            <a href={CLink}>
              <Segment>
                <h3>{CTitle}</h3>
                <h4>{CAuthor}</h4>
                <p>{CText}</p>
              </Segment>
            </a>

          <div className='tanglaw__bookmark-tags'>
              <p><strong>Tags: </strong></p> 
              <p><a href='#'>{Tag1} </a></p>
              <p><a href='#'> {Tag2} </a></p>
              <p><a href='#'>{Tag3} </a> </p>
          </div>
        </div>
    </div>
  )
}

export default CardsBookmark;