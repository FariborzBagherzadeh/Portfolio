//Components Initial
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/projects/Projects";
import Certifications from "./components/certifications/Certifications";
import Articles from "./components/articles/Articles";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import Skills from "./components/skills/Skills";

//Libraries& Sass Initial
import "./app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuHover, setMenuHover] = useState(false);
  const [navbar, setNavbar] = useState(false);



  return (
    <div className="app">
      <Topbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        menuHover={menuHover}
        setMenuHover={setMenuHover}
        navbar={navbar}
        setNavbar={setNavbar}
      />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="section">
        <Intro />
        <Portfolio />
        <Skills />
        <Projects />
        <Certifications />
        <Articles />
        <Contact />
      </div>
    </div>
  );
}

export default App;
