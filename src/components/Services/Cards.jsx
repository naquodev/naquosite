import React from "react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const CardsDesigner = () => {
  const cards = [
    {
      icon: "bi bi-person-vcard",
      name: "Carte de visite",
      desc: "contient les informations essentielles d'une personne ou d'une entreprise.",
    },
    {
      icon: "bi bi-palette",
      name: "Charte graphique",
      desc: "définit l'identité visuelle d'une marque.",
    },
    {
      icon: "bi bi-plugin",
      name: "Logiciels",
      desc: "Photoshop, InDesign, Illustrator.",
    },
  ];
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Utilisez useEffect pour déclencher l'animation lorsque la section devient visible
  useEffect(() => {
    if (inView && !animationTriggered) {
      setAnimationTriggered(true);
      // L'animation sera déclenchée ici, vous pouvez effectuer des actions spécifiques liées à l'animation
    }
  }, [inView, animationTriggered]);

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={animationTriggered ? "visible" : "hidden"}
      className="cards"
    >
      {cards.map((card, index) => (
        <motion.div variants={item} className="card" key={index}>
          <div className="leftCard">
            <i className={card.icon}></i>
          </div>
          <div className="rightCard">
            <h2>{card.name}</h2>
            <p>{card.desc}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export const CardsWeb = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Utilisez useEffect pour déclencher l'animation lorsque la section devient visible
  useEffect(() => {
    if (inView && !animationTriggered) {
      setAnimationTriggered(true);
      // L'animation sera déclenchée ici, vous pouvez effectuer des actions spécifiques liées à l'animation
    }
  }, [inView, animationTriggered]);
  const cards = [
    {
      icon: "bi bi-filetype-scss",
      name: "Développement Fronted",
      desc: "concerne la mise en œuvre des aspects visuels et interactifs d'une application web ou d'un site web.",
    },
    {
      icon: "bi bi-database",
      name: "Développement Backend",
      desc: "concerne la création et la gestion d'une application web ou d'un site web.",
    },
    {
      icon: "bi bi-code",
      name: "Languages",
      desc: "HTML, CSS (SCSS), JS + React | Python (Django).",
    },
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={animationTriggered ? "visible" : "hidden"}
      className="cards"
      ref={ref}
    >
      {cards.map((card, index) => (
        <motion.div variants={item} className="card" key={index}>
          <div className="leftCard">
            <i className={card.icon}></i>
          </div>
          <div className="rightCard">
            <h2>{card.name}</h2>
            <p>{card.desc}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export const CardsDiscord = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Utilisez useEffect pour déclencher l'animation lorsque la section devient visible
  useEffect(() => {
    if (inView && !animationTriggered) {
      setAnimationTriggered(true);
      // L'animation sera déclenchée ici, vous pouvez effectuer des actions spécifiques liées à l'animation
    }
  }, [inView, animationTriggered]);
  const cards = [
    {
      icon: "bi bi-person-plus",
      name: "Bot Communautaire",
      desc: "concerne la mise en œuvre de commandes publiques pour les membres.",
    },
    {
      icon: "bi bi-shield",
      name: "Bot Privé",
      desc: "concerne la mise en œuvre de commandes privées pour le personnel.",
    },
    {
      icon: "bi bi-code",
      name: "Languages",
      desc: "NodeJS, Python.",
    },
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={animationTriggered ? "visible" : "hidden"}
      className="cards"
      ref={ref}
    >
      {cards.map((card, index) => (
        <motion.div variants={item} className="card" key={index}>
          <div className="leftCard">
            <i className={card.icon}></i>
          </div>
          <div className="rightCard">
            <h2>{card.name}</h2>
            <p>{card.desc}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
