import React from "react";
import "./Footer.scss";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 80 }}
      transition={{
        type: "tween",
        duration: 1.2,
        delay: 0.1,
        ease: [0.25, 0.25, 0.25, 0.75],
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: false, amount: 0 }}
      id="contact"
    >
      <div className="start">
        <div className="title">
          <h1>Démarrer un projet</h1>
        </div>
        <div className="desc">
          <p>Intéressé(e) à travailler ensemble ? Nous devrions en discuter.</p>
        </div>
        <div className="button">
          <a
            aria-label="M'envoyer un mail"
            href="mailto:contact@naquodev.com"
            target="_blank"
          >
            <i className="bi bi-arrow-right-short"></i> Faisons cela
          </a>
        </div>
      </div>
      <div className="header">
        <img src="./logotypeb.webp" alt="Logo de Naquo"></img>
        <p>La clé de la réussite est la communication.</p>
      </div>
      <div className="link">
        <a
          aria-label="Accéder à mon Twitter"
          href="https://twitter.com/naquodev"
          target="_blank"
        >
          <i className="bi bi-twitter"></i>
        </a>
        <a
          aria-label="Accéder à mon Instagram"
          href="https://www.instagram.com/naquodev"
          target="_blank"
        >
          <i className="bi bi-instagram"></i>
        </a>
        <a
          aria-label="Accéder à mon Github"
          href="https://github.com/naquodev"
          target="_blank"
        >
          <i className="bi bi-github"></i>
        </a>
      </div>
      <div className="copyright">
        <p>Fabriqué à la main par moi, &copy; 2023</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
