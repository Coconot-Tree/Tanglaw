import React from 'react';
import './browse.css'

const Browse = () => {
  return (
    <div className='tanglaw__sidebar-browse'>
        <h2>Browse</h2>
        <hr />
            <div className='tanglaw__sidebar-browse-category'>
                <li><a href="/Browse-Disciplines">Disciplines</a></li>
                <li><a href="/Browse-Colleges-and-Units">Colleges and Units</a></li>
                <li><a href="/Browse-Authors">Authors</a></li>
        </div>
    </div>
    
  )
}

export default Browse;