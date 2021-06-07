import "./intro.scss";
import React, { useEffect, useRef } from "react";
import { Button, Grid } from "@material-ui/core";
import { init } from "ityped";
import { Element, Link } from "react-scroll";
export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      typeSpeed: 200,
      backSpeed: 100,
      strings: [
        "PROGRAMMING",
        "FRONT-END DEVELOPER",
        "NODE JS",
        "MONGO DB",
        "REACT JS",
      ],
    });
  }, []);
  return (
    <Grid container className="intro">
      <Element name="home" className="home"></Element>
      <Grid container item alignItems="center" justify="center">
        <Grid item className="intro-title">
          <div className="icon-intro">
            <img src="/assest/programmer.svg" alt="programmer" />
          </div>
          <div className="border-intro">
            <br />
            <h2>HI I'M</h2>
            <br />
            <h1>FARIBORZ BAGHERZADEH</h1>
            <br />
            <h3>
              <span ref={textRef}></span>
            </h3>
            <br />
          </div>

          <Button
            className="button-intro"
            variant="contained"
            href="#portfolio"
          >
            <Link to="portfolio" smooth={true} duration={1000}>
              Read More
            </Link>
          </Button>
        </Grid>
        <Grid item className="intro-img">
          <img src="/assest/Website-Design-Gif.webp" alt="web" />
        </Grid>
      </Grid>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,96L48,112C96,128,192,160,288,149.3C384,139,480,85,576,53.3C672,21,768,11,864,42.7C960,75,1056,149,1152,170.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </Grid>
  );
}
