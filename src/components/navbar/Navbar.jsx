import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/tanglaw.png';
import './navbar.css';

const Menu = () => (
  <>
    <p><a href="/Home">Home</a></p>
    <p><a href="/About">About</a></p>
    <p><a href="/Account">My Account</a></p>
    <p><a href="/Contact">Contact Us</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="tanglaw__navbar">
      <div className="tanglaw__navbar-links">
        <div className="tanglaw__navbar-links_logo">
          <a href="/Home"> <img src={logo} /> </a>
        </div>
      </div>
      <div className="tanglaw__navbar-links_container">
        <Menu />
      </div>
      <div className="tanglaw__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="tanglaw__navbar-menu_container scale-up-center">
          <div className="tanglaw__navbar-menu_container-links">
            <Menu />
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;