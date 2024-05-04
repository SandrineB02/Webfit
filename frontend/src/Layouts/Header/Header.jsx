import React, { Image, Text } from "react";
import { NavLink } from "react-router-dom";
import profil from "../../Assets/Images/Components/BanerPage/profil.png";

const Header = () => {
  return (
    <header>
      <nav>
        <section>
        <Text>Bonjour</Text>
        </section>
       <section>
        
       </section>
       <section></section>
        <Image>{profil}</Image>
        <NavLink
          to="/home"
          className="navlink"
          style={({ isActive }) =>
            isActive
              ? { borderBottom: "1px solid #ff6060" }
              : { borderBottom: "unset" }
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/contact"
          className="navlink"
          style={({ isActive }) =>
            isActive
              ? { borderBottom: "1px solid #ff6060" }
              : { borderBottom: "unset" }
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
