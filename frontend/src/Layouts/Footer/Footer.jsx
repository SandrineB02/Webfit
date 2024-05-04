import React from "react";
import home from "../../Assets/Images/Pages/accueil.png";
import calendar from "../../Assets/Images/Pages/calendar.png";
import localisation from "../../Assets/Images/Pages/localisation.png";
import routes from "../../Pages/Public/Public.router";

const Footer = () => {
  return (
    <footer>
      <ul className="footer-icons">
        <li>
          <a href={routes.home}>
            <img src={home} alt="Accueil" />
            <span>Accueil</span>
          </a>
        </li>
        <li>
          <a href={routes.calendar}>
            <img src={calendar} alt="Calendrier" />
            <span>Calendrier</span>
          </a>
        </li>
        <li>
          <a href={routes.geolocalisation}>
            <img src={localisation} alt="Localisation" />
            <span>Localisation</span>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
