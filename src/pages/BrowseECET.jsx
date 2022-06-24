import React from 'react';
import './style.css';
import {Cards } from '../components'

const BrowseECET = () => {
  document.title = "Tanglaw | Electronics Engineering Technology";
  return (
    <div className="tanglaw__page-title">
      <h2>Electronics Engineering Technology Collection</h2>
      <Cards 
        CTitle={'Title Place Holder'}
        CAuthor={'Name Name'}
        CLink={'#'}
        CText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra mi eget lacus accumsan, nec commodo velit bibendum. Pellentesque lacinia dolor non imperdiet aliquet. "}
        />
    </div>
  )
}

export default BrowseECET;