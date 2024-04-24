import React from "react";
import "./Home.scss";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";
const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="presentation">
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
            Flavio・Naquo
          </motion.h1>

          <motion.h2
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
            Je suis{" "}
            <span>
              <TypeAnimation
                sequence={[
                  "Designer",
                  2000,
                  "Développeur Web",
                  2000,
                  "Développeur Discord",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              ></TypeAnimation>
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{
              type: "tween",
              duration: 1.2,
              delay: 0.3,
              ease: [0.25, 0.25, 0.25, 0.75],
            }}
            viewport={{ once: true, amount: 0.7 }}
          >
            Depuis plus de 7 ans, j'exerce mon talent dans le domaine du
            graphisme. Pendant plus de 4 ans, j'ai évolué dans le domaine du
            développement web, créant des sites web professionnels et
            captivants. Et depuis plus de 2 ans, je me suis plongé dans le
            développement Discord, donnant vie à des bots personnalisés et
            interactifs pour des communautés variées.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{
              type: "tween",
              duration: 1.2,
              delay: 0.4,
              ease: [0.25, 0.25, 0.25, 0.75],
            }}
            viewport={{ once: true, amount: 0.7 }}
          >
            <Link
              aria-label="Scroll vers la section About"
              to="about"
              spy={true}
              smooth={true}
              href="https://naquodev.com"
            >
              Voir Plus
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{
            type: "tween",
            duration: 1.2,
            delay: 0.2,
            ease: [0.25, 0.25, 0.25, 0.75],
          }}
          viewport={{ once: true, amount: 0.7 }}
          className="image"
        >
          <img src="./flavio.webp" alt="Photo de Naquo" />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
