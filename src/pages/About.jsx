    import React from 'react';
    import './style.css'
    import {Cards } from '../components'
    
    const About = () => {
      document.title = "Tanglaw | About";
      return (
        <div className="tanglaw__page-title">
        <h2>About Us</h2>
        <Cards/>
      </div>
      )
    }
    
    export default About;