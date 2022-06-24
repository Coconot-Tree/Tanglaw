import React from 'react';
import './style.css';
import { ByDisciplines} from '../containers';

const Disciplines = () => {
  document.title = "Tanglaw | Browse by Disciplines";
  return (
    <div className="tanglaw__page-title">
      <h2>Browse by Disciplines</h2>
      <ByDisciplines/>
    </div>
  )
}

export default Disciplines;