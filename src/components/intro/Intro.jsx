import "./intro.scss";
import React, { useEffect, useRef } from "react";
import { Button } from "@material-ui/core";
import { init } from "ityped";
export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      typeSpeed: 200,
      backSpeed: 100,
      strings: [
        "Programming",
        "CAD/CAM",
        "Data Scientist",
        "Machine Learning",
        "Articles",
      ],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <header>
        <img className="main-img" src="/assest/ai.jpg" alt="AI" />

        <section className="hero-header-text">
          <div className="icon-intro">
            <img src="/assest/intro-icon-ai.svg" alt="" />
          </div>

          <br />
          <br />
          <div className="border-intro">
            <br />
            <h2>HI I'M</h2>
            <br />
            <h1>FARAMARZ BAGHERZADEH</h1>
            <br />
            <h3>
              Abilities <span ref={textRef}></span>
            </h3>
            <br />
          </div>
          <br />
          <br />
          <Button
            className="button-intro"
            variant="contained"
            href="#portfolio"
          >
            Read More
          </Button>
        </section>
      </header>
    </div>
  );
}
