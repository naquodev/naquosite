import { lazy } from "react";

import "./reset.scss";

const Header = lazy(() => import("./components/Header/Header"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Nav = lazy(() => import("./components/Nav/Nav"));
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Services = lazy(() => import("./pages/Services/Services"));
const Work = lazy(() => import("./pages/Work/Work"));
function App() {
  return (
    <div className="app">
      <Header></Header>
      <Nav></Nav>
      <Home />
      <About></About>
      <Services></Services>
      <Work></Work>
      <Footer></Footer>
    </div>
  );
}

export default App;
