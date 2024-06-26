import React from "react";

import ServiceFit from "@/_Services/Service.fit";

const Home = () => {
  return (
    <section className="home">
      <section className="sectionProgramme">
        {ServiceFit.GetAllFits().map((fit) => (
          <div key={fit.id}>
            <img
              src={`http://localhost:3000/images/` + fit.image}
              alt="fit.title"
            />
            <h2>{fit.title}</h2>
            <br />
            <p>{fit.definition}</p>
            <p>{fit.format}</p>
            <p>{fit.option}</p>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Home;
