import { Link } from "react-scroll";
import "./topbar.scss";

export default function Topbar({
  menuOpen,
  setMenuOpen,
  menuHover,
  setMenuHover,
  navbar,
  setNavbar,
}) {
  const changeBackground = () => {
    window.scrollY > 70 ? setNavbar(true) : setNavbar(false);
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div
      className={
        "topbar  " +
        (menuOpen && "active  ") +
        (menuHover && " hover  ") +
        (navbar && " navbarBackground  ")
      }
      onMouseEnter={() => setMenuHover(!menuHover)}
      onMouseLeave={() => setMenuHover(!menuHover)}
    >
      <div className="wrapper">
        <div className="left">
          <div className="itemContainer">
            <div className="itemContainer1">
              <Link to="home" smooth={true} duration={1000}>
                Home
              </Link>
            </div>
            <div className="itemContainer1">
              <Link to="portfolio" smooth={true} duration={1000}>
                Portfolio
              </Link>
            </div>
            <div className="itemContainer1">
              <Link to="skills" smooth={true} duration={1000}>
                Skills
              </Link>
            </div>
          
            <div className="itemContainer1">
              <Link to="certification" smooth={true} duration={1000}>
                Certifications
              </Link>
            </div>
         

            <div className="itemContainer1">
              <Link to="contact" smooth={true} duration={1000}>
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
