    import React from 'react';
    import './style.css';
    import {Cards} from '../components';
    
    const About = () => {
      document.title = "Tanglaw | About";
      return (
        <div className="tanglaw__page-title">
          <h2>About Us</h2>
          <Cards 
            CAbout={"The Tanglaw Thesis Respository is a digital repository of theses and dissertations of students, faculty and researchers of Computer Engineering Department of Tanglaw Manila."}
            />
         </div>
      )
    }
    
    export default About;