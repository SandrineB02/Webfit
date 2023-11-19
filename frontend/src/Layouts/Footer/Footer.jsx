import Logo from "@/Assets/Images/Pages/logo-fit-blanc.png";
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className='containerFooter'>
                <img src={Logo} alt="Logo du footer" className="logo"/>
                <p>© 2023 Fit, Tous droits réservés</p>
            </div>
        </footer>
    );
};

export default Footer;