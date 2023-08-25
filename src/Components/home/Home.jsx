import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="left">
        <h1>
          Full Stack Web
          <br /> Developer
        </h1>
        <p>
          My name is Flavio, I'm 15 years old, and I'm a web developer. For
          several years, I've been learning this profession, gaining experience
          to be able to work independently or in a team.
        </p>
        <div className="buttons">
          <a href="">Starting with me</a>
          <a href="">See more</a>
        </div>
      </div>
      <div className="right">
        <img src="./flavio.svg" alt="" />
      </div>
    </div>
  );
};

export default Home;
