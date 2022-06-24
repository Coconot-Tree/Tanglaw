import React from 'react';
import { Segment } from 'semantic-ui-react';
import './category.css';

const ByColleges = () => {
  return (
  <div className="tanglaw__category">
    <div className='tanglaw__category-container'>
        <div className='tanglaw__category-text'>
            <details>
              <summary><h3>College of Engineering</h3>
                <span class="icon">+</span>
              </summary>
              <Segment id="segment"> 
                <li><a href='#'>Bachelor's Theses</a></li>
                <li><a href='#'>Master's Theses</a></li>
              </Segment>
            </details>
        </div>
    </div>

    <div className='tanglaw__category-container'>
        <div className='tanglaw__category-text'>
            <details>
              <summary><h3>Institute of Technology</h3>
                <span class="icon">+</span>
              </summary>
              <Segment id="segment"> 
                <li><a href='#'>Diploma Theses</a></li>
              </Segment>
            </details>
        </div>
    </div>
  </div>
  )
}

export default ByColleges;