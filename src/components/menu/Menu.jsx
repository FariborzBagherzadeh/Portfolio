import "./menu.scss";
import { Link } from "react-scroll";
import React from "react";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="home" smooth={true} duration={1000}>
            Home
          </Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="portfolio" smooth={true} duration={1000}>
            Portfolio
          </Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="skills" smooth={true} duration={1000}>
            Skills
          </Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="project" smooth={true} duration={1000}>
            Projects
          </Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="certifications" smooth={true} duration={1000}>
            Certifications
          </Link>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <Link to="contact" smooth={true} duration={1000}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
