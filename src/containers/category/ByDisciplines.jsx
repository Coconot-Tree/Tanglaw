import React from 'react';
import { Segment } from 'semantic-ui-react';
import './category.css';

const ByDisciplines = ({Discipline,Eng1, Eng2, Eng3, Eng4, Tech1, 
                        Tech2, Tech3, Tech4, Tech5, OM1}) => {
  return (
  <div className="tanglaw__category">
    <div className='tanglaw__category-container'>
        <div className='tanglaw__category-text'>
            <details>
              <summary><h3>Engineering</h3>
                <span class="icon">+</span>
              </summary>
              <Segment id="segment"> 
                <li><a href='#'>Civil Engineering</a></li>
                <li><a href='#'>Industrial Engineering</a></li>
                <li><a href='#'>Railway Engineering</a></li>
                <li><a href='#'>Other Engineering</a></li>
              </Segment>
            </details>
        </div>
    </div>

    <div className='tanglaw__category-container'>
        <div className='tanglaw__category-text'>
            <details>
              <summary><h3>Technology</h3>
                <span class="icon">+</span>
              </summary>
              <Segment id="segment"> 
                <li><a href='#'>Computer Engineering Technology</a></li>
                <li><a href='#'>Electrical Engineering Technology</a></li>
                <li><a href='#'>Electronics Engineering Technology</a></li>
                <li><a href='#'>Information Communications Technology</a></li>
                <li><a href='#'>Mechanical Engineering Technology</a></li>
              </Segment>
            </details>
        </div>
    </div>

    <div className='tanglaw__category-container'>
        <div className='tanglaw__category-text'>
            <details>
              <summary><h3>Office Management</h3>
                <span class="icon">+</span>
              </summary>
              <Segment id="segment"> 
                <li><a href='#'>Office Management</a></li>
              </Segment>
            </details>
        </div>
    </div>

  </div>
  )
}

export default ByDisciplines;