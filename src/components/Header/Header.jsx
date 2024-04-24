import React from "react";
import "./Header.scss";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, x: -80 }}
      transition={{
        type: "tween",
        duration: 1.2,
        delay: 0,
        ease: [0.25, 0.25, 0.25, 0.75],
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: false, amount: 0.7 }}
    >
      <div className="left">
        <div className="logo">
          <Link
            aria-label="Scroll vers la section Home"
            to="home"
            smooth={true}
            href="https://naquodev.com"
          >
            <img src="./logotype.webp" alt="Logo de Naquo" />
          </Link>
        </div>
      </div>
      <div className="right">
        <div className="link">
          <Link
            aria-label="Scroll vers la section About"
            to="about"
            className="buttonNoFull"
            smooth={true}
            href="https://naquodev.com"
          >
            Qui suis-je ?
          </Link>
          <a
            aria-label="M'envoyer un mail"
            href="mailto:contact@naquodev.com"
            target="_blank"
            className="buttonFull"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              ></path>
            </svg>
            Ecris-moi
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
