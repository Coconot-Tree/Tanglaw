import React from 'react';
import './style.css';
import {CardsAccount, CardsBookmark} from '../containers';

const Account = () => {
  document.title = "Tanglaw | My Account";
  return (
    <div className="tanglaw__page-title">
    <CardsAccount
        Name={"Chackie L. Adao"}
    />
    <CardsBookmark
      Thesis={"Tanglaw Thesis Repository"} 
      Abstract={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar tincidunt lorem at ultricies. Nulla eleifend, velit eget bibendum sollicitudin, mauris leo vehicula ex, et vestibulum augue justo eget lorem. Nunc varius commodo ante quis porta. Cras porttitor id quam ut tincidunt. Nullam lacus odio, porta nec blandit id, gravida sit amet libero."}
      Tag1={"#Mema1"}
      Tag2={"#Mema2"}
      Tag3={"#Mema3"}
    />
    <CardsBookmark
        Thesis={""} 
        Abstract={""}
        Tag1={""}
        Tag2={""}
        Tag3={""}
      />
    </div>
  )
}

export default Account;