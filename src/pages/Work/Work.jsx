import React from "react";
import "./Work.scss";

const Work = () => {
  const cards = [
    {
      name: "xRush | eSport",
      desc: "Création d'un site web pour une équipe eSport. (Malheureusement, plus hébergé.)",
      image: "./project/xrush.webp",
      icon: "bi bi-search",
      url: "",
    },
    {
      name: "Epreuve intégrée (Examen Décembre)",
      desc: '"La semaine de l’Europe"',
      image: "./project/epreuve.webp",
      icon: "bi bi-search",
      url: "./project/epreuve.pdf",
    },
    {
      name: "Dépliant Yves Rocher",
      desc: "Création d'un dépliant pour un institut de beauté (exercice)",
      image: "./project/depliant.webp",
      icon: "bi bi-search",
      url: "./project/depliant.pdf",
    },
    {
      name: "Epreuve intégrée (Examen Mai)",
      desc: '"Le WIFFF - Evènement Fantastique"',
      image: "./project/wifff.webp",
      icon: "bi bi-search",
      url: "./project/wifff.pdf",
    },
    {
      name: "D. Pierre (INFO Wavre)",
      desc: "Maquette de Site Web lors d'un stage",
      image: "./project/infowavre.webp",
      icon: "bi bi-search",
      url: "./project/infowavre.pdf",
    },
  ];

  return (
    <div className="work" id="work">
      <div className="container">
        <div className="title">
          <h1>PROJETS</h1>
          <p>
            Voici quelques projets sur lesquels j'ai travaillé. Vous souhaitez
            en découvrir davantage ? N'hésitez pas à m'
            <a
              aria-label="M'envoyer un mail"
              href="mailto:contact@naquodev.com"
            >
              envoyer un mail
            </a>
            .
          </p>
        </div>
        <div className="projets">
          <div className="cards">
            {cards.map((card, index) => (
              <div className="card">
                <div className="image">
                  <img src={card.image} alt="Image du site web" />
                </div>
                <div className="infos">
                  <p>{card.name}</p>
                  <p>{card.desc}</p>
                  {card.url != "" && (
                    <a target="_blank" href={card.url}>
                      Voir le projet
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
