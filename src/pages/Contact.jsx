import React from 'react';
import './style.css';
import {Cards } from '../components';

const Contact = () => {
  document.title = "Tanglaw | Contact Us";
  return (
    <div className="tanglaw__page-title">
    <h2>Contact Us</h2>
    <Cards />
    </div>
  )
}

export default Contact;