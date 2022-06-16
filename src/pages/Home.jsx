import React from 'react';
import './style.css'
import {Cards } from '../components'

const home = () => {
  document.title = "Tanglaw Thesis Repository";
  return (
    <div className="tanglaw__page-title">
      <h2>Recent Additions</h2>
      <Cards 
        CTitle={'Title Place Holder'}
        CLink={'#'}
        CText={""}
        />
      <Cards />
    </div>
  )
}

export default home;