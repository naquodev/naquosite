import React from "react";
import "./Services.scss";
import { motion } from "framer-motion";
import {
  CardsDesigner,
  CardsWeb,
  CardsDiscord,
} from "../../components/Services/Cards";
const Services = () => {
  return (
    <div className="services" id="services">
      <div className="container">
        <div className="default designer">
          <div className="left">
            <motion.img
              initial={{ opacity: 0, x: -80 }}
              transition={{
                type: "tween",
                duration: 1.2,
                delay: 0.1,
                ease: [0.25, 0.25, 0.25, 0.75],
              }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0 }}
              src="./designer.webp"
              alt="Illustration Designer"
            />
          </div>
          <div className="right">
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              transition={{
                type: "tween",
                duration: 1.2,
                delay: 0.1,
                ease: [0.25, 0.25, 0.25, 0.75],
              }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              className="section"
            >
              <span>Designer</span>
              <h1>Design graphique & design d'identité de marque</h1>
            </motion.div>
            <CardsDesigner></CardsDesigner>
          </div>
        </div>
        <div className="default web">
          <div className="left">
            <motion.img
              initial={{ opacity: 0, x: 80 }}
              transition={{
                type: "tween",
                duration: 1.2,
                delay: 0.1,
                ease: [0.25, 0.25, 0.25, 0.75],
              }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0 }}
              src="./web.webp"
              alt="Illustration Web"
            />
          </div>
          <div className="right">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              transition={{
                type: "tween",
                duration: 1.2,
                delay: 0.1,
                ease: [0.25, 0.25, 0.25, 0.75],
              }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              className="section"
            >
              <span>Web</span>
              <h1>Développement Frontend & Backend</h1>
            </motion.div>
            <CardsWeb></CardsWeb>
          </div>
        </div>

        <div className="default discord">
          <div className="left">
            <motion.img
              initial={{ opacity: 0, x: -80 }}
              transition={{
                type: "tween",
                duration: 1.2,
                delay: 0.1,
                ease: [0.25, 0.25, 0.25, 0.75],
              }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0 }}
              src="./discord.webp"
              alt="Illustration Discord"
            />
          </div>
          <div className="right">
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              transition={{
                type: "tween",
                duration: 1.2,
                delay: 0.1,
                ease: [0.25, 0.25, 0.25, 0.75],
              }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              src="./designer.webp"
              className="section"
            >
              <span>Discord</span>
              <h1>Développement de bots custom</h1>
            </motion.div>
            <CardsDiscord></CardsDiscord>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
