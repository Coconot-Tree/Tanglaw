import React from 'react';
import './style.css';
import { ByAuthors } from '../containers';

const Authors = () => {
  document.title = "Tanglaw | Browse by Authors";
  return (
    <div className="tanglaw__page-title">
        <h2>Browse by Authors</h2>
        <ByAuthors />
    </div>
  )
}

export default Authors;