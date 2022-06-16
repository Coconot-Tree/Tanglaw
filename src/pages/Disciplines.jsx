import React from 'react';
import './style.css';
import {Cards } from '../components'

const Disciplines = () => {
  document.title = "Tanglaw | Browse by Disciplines";
  return (
    <div className="tanglaw__page-title">
        <h2>Browse by Disciplines</h2>
        {/*<a href="/Disciplines"> ← Back to Disciplines </a>*/}
        <Cards />
    </div>
  )
}

export default Disciplines;