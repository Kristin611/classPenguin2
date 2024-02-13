import { Link } from 'react-router-dom';
import './Navbar.css';
import React from 'react';
import catPhoto from '../../assets/Logo.png'



const Navbar = () => {
	return (
	<nav className="navbar">
        <div className="navbar-container container">
            <input type="checkbox" name="" id="" />
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul className="menu-items">
                <li><a href="#">Home</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
            <div className="image-container">

            <img className="logo" src={catPhoto} alt="Logo" />
            </div>
        </div>
    </nav>
	);
}

export default Navbar;
