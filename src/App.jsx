import { useState } from "react";
import "./reset.scss";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/home/Home";
import Skills from "./Components/Skills/Skills";
import Services from "./Components/Services/Services";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <>
      <Sidebar></Sidebar>
      <Home></Home>
      <Skills></Skills>
      <Services></Services>
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
}

export default App;
