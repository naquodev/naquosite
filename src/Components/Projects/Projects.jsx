import React from "react";
import "./Projects.scss";

const Projects = () => {
  return (
    <div className="projects">
      <div className="title">
        <h1>MY PROJECTS</h1>
      </div>
      <div className="cards">
        <div className="card">
          <img src="./xrush.svg" alt="" />
        </div>
        <div className="card">
          <img src="./xrush.svg" alt="" />
        </div>
        <div className="card">
          <img src="./xrush.svg" alt="" />
        </div>
        <div className="card">
          <img src="./xrush.svg" alt="" />
        </div>
        <div className="card">
          <img src="./xrush.svg" alt="" />
        </div>
      </div>
      <div className="button">
        <a href="">View more projects</a>
      </div>
    </div>
  );
};

export default Projects;
