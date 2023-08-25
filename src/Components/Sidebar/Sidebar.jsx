import React from "react";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="container">
        <div className="black">
          <img src="./sidebar.svg" alt="" />
        </div>

        <div className="logo">
          <a href="">
            <img src="./Logo.svg" alt="" />
            <span></span>
          </a>
        </div>
        <div className="link">
          <a href="">Who I am ?</a>
          <a href="">Skills</a>
          <a href="">Services</a>
          <a href="">Projects</a>
          <a href="">Contact</a>
        </div>
        <div className="buttons">
          <a href="">EMAIL</a>
          <a href="">GITHUB</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
