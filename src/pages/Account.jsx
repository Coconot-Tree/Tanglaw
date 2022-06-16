import React from 'react';
import {CardsAccount} from '../components';

const Account = () => {
  document.title = "Tanglaw | My Account";
  return (
    <div className="tanglaw__page-title">
      <CardsAccount 
      />
    </div>
  )
}

export default Account;