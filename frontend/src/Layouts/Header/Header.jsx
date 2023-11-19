import Logo from "@/Assets/Images/Pages/logo-fit.png";
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {


    return (
        <header>
            <img src={Logo} alt="logo du header" className="logo"/>
            <nav>
                <NavLink to="/home" className="navlink" style={({ isActive }) => isActive ? { borderBottom: "1px solid #ff6060" } : { borderBottom: "unset" }}>Accueil</NavLink>
                <NavLink to="/contact" className="navlink" style={({ isActive }) => isActive ? { borderBottom: "1px solid #ff6060" } : { borderBottom: "unset" }}>Contact</NavLink>
            </nav>
        </header>
    );
};

export default Header;