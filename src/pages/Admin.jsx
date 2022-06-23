import React from 'react';
import './style.css';
import {CardsAdmin, CardsUpload } from '../components'

const Admin = () => {
  document.title = "Admin";
  return (
  <div className="tanglaw__page-title">
    <CardsAdmin
        Name={"Chackie L. Adao"}
    />
    <CardsUpload 
        Thesis={"Tanglaw Thesis Repository"} 
        Abstract={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar tincidunt lorem at ultricies. Nulla eleifend, velit eget bibendum sollicitudin, mauris leo vehicula ex, et vestibulum augue justo eget lorem. Nunc varius commodo ante quis porta. Cras porttitor id quam ut tincidunt. Nullam lacus odio, porta nec blandit id, gravida sit amet libero."}
        Tag1={"#Mema1"}
        Tag2={"#Mema2"}
        Tag3={"#Mema3"}
    />
    <CardsUpload
        Thesis={""} 
        Abstract={""}
        Tag1={""}
        Tag2={""}
        Tag3={""}
      />
    
  </div>
  )
}

export default Admin;