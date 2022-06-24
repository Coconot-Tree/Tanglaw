import React from 'react';
import './style.css';
import { ByColleges } from '../containers';

const Colleges = () => {
  document.title = "Tanglaw | Browse by Colleges and Units";
  return (
    <div className="tanglaw__page-title">
      <h2>Browse by Colleges and Units</h2>
      <ByColleges/>
    </div>
  )
}

export default Colleges;