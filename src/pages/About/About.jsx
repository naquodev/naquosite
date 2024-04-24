import React from "react";
import { useState, useEffect } from "react";
import "./About.scss";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
const About = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <div className="about" id="about" ref={ref}>
      <div className="container">
        <div className="left">
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            transition={{
              type: "tween",
              duration: 1.2,
              delay: 0.3,
              ease: [0.25, 0.25, 0.25, 0.75],
            }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            className="section"
          >
            <span>A propos de moi</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            transition={{
              type: "tween",
              duration: 1.2,
              delay: 0.2,
              ease: [0.25, 0.25, 0.25, 0.75],
            }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            className="title"
          >
            <h1>La clé de la réussite est la communication.</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            transition={{
              type: "tween",
              duration: 1.2,
              delay: 0.1,
              ease: [0.25, 0.25, 0.25, 0.75],
            }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            className="desc"
          >
            <p>
              Je trouve agréable la simplicité de la structure de contenu, la
              clarté des modèles de conception et la réflexion qui transparaît
              dans les interactions. J'éprouve un plaisir à créer du code à
              partir de zéro et à concrétiser des idées directement dans le
              navigateur.
            </p>
          </motion.div>
          <div className="number">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              transition={{
                type: "tween",
                duration: 1.2,
                delay: 0.1,
                ease: [0.25, 0.25, 0.25, 0.75],
              }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
            >
              <span>
                {inView ? (
                  <CountUp start={0} end={7} duration={3}></CountUp>
                ) : null}
              </span>{" "}
              <h1>
                Ans <br /> de Designer
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              transition={{
                type: "tween",
                duration: 1.2,
                delay: 0.4,
                ease: [0.25, 0.25, 0.25, 0.75],
              }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
            >
              <span>
                {inView ? (
                  <CountUp start={0} end={4} duration={3}></CountUp>
                ) : null}
              </span>{" "}
              <h1>
                Ans <br /> de Web
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              transition={{
                type: "tween",
                duration: 1.2,
                delay: 0.2,
                ease: [0.25, 0.25, 0.25, 0.75],
              }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
            >
              <span>
                {inView ? (
                  <CountUp start={0} end={2} duration={3}></CountUp>
                ) : null}
              </span>{" "}
              <h1>
                Ans <br /> de Discord
              </h1>
            </motion.div>
          </div>
        </div>
        <div className="right">
          <div className="title">
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              transition={{
                type: "tween",
                duration: 1.2,
                delay: 0.1,
                ease: [0.25, 0.25, 0.25, 0.75],
              }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
            >
              Toutes les requêtes et discussions sont les bienvenues.{" "}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 80 }}
              transition={{
                type: "tween",
                duration: 1.2,
                delay: 0.2,
                ease: [0.25, 0.25, 0.25, 0.75],
              }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
            >
              N'hésitez pas à discuter avec moi.{" "}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            transition={{
              type: "tween",
              duration: 1.2,
              delay: 0.1,
              ease: [0.25, 0.25, 0.25, 0.75],
            }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            className="info"
          >
            <a
              aria-label="M'envoyer un mail"
              href="mailto:contact@naquodev.com"
            >
              <span>contact@naquodev.com</span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
