import React from 'react';
import './search.css';

const Search = ({placeholder, data}) => {
  return (
    <div className='tanglaw__sidebar-search'>
        <h2>Search</h2>
        <hr />
      <div className='tanglaw__sidebar-searchbar'>
        <div className='tanglaw__sidebar-searchbar_inputs'>
          <input type="text" placeholder="Search Keyword.."/>
          <button>Search</button>
        </div>
      </div>
      <div className='tanglaw__sidebar-searchbar_dataresult'>
      </div>
    </div>

  )
}

export default Search;