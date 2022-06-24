import React from 'react';
import './browse.css'

const Browse = () => {
  return (
    <div className='tanglaw__sidebar-browse'>
        <h2>Browse</h2>
        <hr />
            <div className='tanglaw__sidebar-browse-category'>
                <li><a href="/BrowseCE">Civil Engineering</a></li>
                <li><a href="/BrowseCET">Computer Engineering Technology</a></li>
                <li><a href="/BrowseEET">Electrical Engineering Technology</a></li>
                <li><a href="/BrowseECET">Electronics Engineering Technology</a></li>
                <li><a href="/BrowseIE">Industrial Engineering</a></li>
                <li><a href="/BrowseICT">Information Communications Technology</a></li>
                <li><a href="/BrowseMET">Mechanical Engineering Technology</a></li>
                <li><a href="/BrowseOM">Office Management</a></li>
                <li><a href="/BrowseRE">Railway Engineering</a></li>
        </div>
    </div>
    
  )
}

export default Browse;