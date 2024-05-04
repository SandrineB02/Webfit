import React from "react";
import logo from "../../../Assets/Images/Pages/Conection/logo.png";

const Conection = () => {
  return (
    <section className="conection">
      <section className="sectionBcgconection">
        <section className="sectionconection">
          <div className="logo">
            <img src={logo} alt="" />
            <h1>Canoë Malin</h1>
            <h2>Le tourisme responsable</h2>
          </div>
          
          <form>
            <input className="form" type="email" placeholder="Email" />
            <input
              className="form"
              type="password"
              placeholder="Mot de passe"
            />
            <button className="btn">Connexion</button>
          </form>
          <p>Mot de passe oublié ?</p>
          <button className="btn">Valider</button>
        </section>
      </section>
    </section>
  );
};

export default Conection;
