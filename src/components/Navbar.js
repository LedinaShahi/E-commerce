import React from "react";
import './Navbar.css';


const Navbar = () => {
    return (
        <div className="navbar-container">
            <ul className="nav-list">
                <li><a href="Home" >Home</a></li>
                <li><a href="PersonalInfo">Personal Info</a></li>
                <li><a href="Experience" >My Experience</a></li>
                <li><a href="Skills" >My Skills</a></li>
                <li><a href="Socials">My Socials</a></li>
            </ul>
        </div>
    );
}

export default Navbar;
