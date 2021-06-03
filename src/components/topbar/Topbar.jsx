import "./topbar.scss";

export default function Topbar({
  menuOpen,
  setMenuOpen,
  menuHover,
  setMenuHover,
}) {
  return (
    <div
      className={"topbar " + (menuOpen && "active  ") + (menuHover && " hover")}
      onMouseEnter={() => setMenuHover(!menuHover)}
      onMouseLeave={() => setMenuHover(!menuHover)}
    >
      <div className="wrapper">
        <div className="left">
          <div className="itemContainer">
            <div className="itemContainer1">
              <a href="#intro">Home</a>
            </div>
            <div className="itemContainer1">
              <a href="#portfolio">Portfolio</a>
            </div>
            <div className="itemContainer1">
              <a href="#skills">Skills</a>
            </div>
            <div className="itemContainer1">
              <a href="#projects">Projects</a>
            </div>
            <div className="itemContainer1">
              <a href="#certifications">Certifications</a>
            </div>
            <div className="itemContainer1">
              <a href="#articles">Articles</a>
            </div>

            <div className="itemContainer1">
              <a href="#contact">Contact</a>
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
