import React from "react";
import { Link } from "react-scroll";
import "./Nav.scss";
import { useState, useEffect } from "react";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="container">
        <Link
          aria-label="Scroll vers la section Home"
          to="home"
          spy={true}
          activeClass="active"
          offset={-20}
          smooth={true}
          href="https://naquodev.com"
        >
          <i class="bi bi-house"></i>
        </Link>
        <Link
          aria-label="Scroll vers la section About"
          to="about"
          spy={true}
          activeClass="active"
          offset={-20}
          smooth={true}
          href="https://naquodev.com"
        >
          <i class="bi bi-file-earmark-person"></i>
        </Link>
        <Link
          aria-label="Scroll vers la section de mes services"
          to="services"
          spy={true}
          activeClass="active"
          offset={-20}
          smooth={true}
          href="https://naquodev.com"
        >
          <i class="bi bi-clipboard-data"></i>{" "}
        </Link>
        <Link
          aria-label="Scroll vers la section de mes projets"
          to="work"
          spy={true}
          activeClass="active"
          offset={-20}
          smooth={true}
          ignoreCancelEvents={true}
          href="https://naquodev.com"
        >
          <i class="bi bi-briefcase"></i>{" "}
        </Link>
        <Link
          aria-label="Scroll vers la section Contact"
          to="contact"
          spy={true}
          activeClass="active"
          offset={-250}
          smooth={true}
          ignoreCancelEvents={true}
          href="https://naquodev.com"
        >
          <i className="bi bi-chat-left-text"></i>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
