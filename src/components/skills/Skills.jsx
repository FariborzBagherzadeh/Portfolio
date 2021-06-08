import React from "react";
import "./skills.scss";
import { Grid } from "@material-ui/core";
import { Element } from "react-scroll";
export default function Skills() {
  return (
    <Grid container className="skill">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,288L30,261.3C60,235,120,181,180,186.7C240,192,300,256,360,277.3C420,299,480,277,540,245.3C600,213,660,171,720,149.3C780,128,840,128,900,144C960,160,1020,192,1080,186.7C1140,181,1200,139,1260,128C1320,117,1380,139,1410,149.3L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>
      <Element
        name="skills"
        className="home"
        style={{ marginTop: "0" }}
      ></Element>
      <Grid container item justify="center">
        <Grid item className="skill-title">
          <h1>Skills</h1>
        </Grid>
      </Grid>
      <Grid item container alignItems="center">
        <Grid lg={4} xl={4} sm={4} xs={6} md={4} item className="skill-card">
          <img src="/assest/skills/html.svg" alt="HTML" />
          <h2>HTML 5</h2>
        </Grid>
        <Grid item lg={4} xl={4} sm={4} xs={6} md={4} className="skill-card">
          <img src="/assest/skills/css.svg" alt="CSS" />
          <h2>CSS 3</h2>
        </Grid>

        <Grid lg={4} xl={4} sm={4} xs={6} md={4} item className="skill-card">
          <img src="/assest/skills/javascript.svg" alt="JS" />
          <h2>JavaScript</h2>
        </Grid>
        <Grid lg={4} xl={4} sm={4} xs={6} md={4} item className="skill-card">
          <img src="/assest/skills/react.svg" alt="React" />
          <h2>ReactJs</h2>
        </Grid>
        <Grid lg={4} xl={4} sm={4} xs={6} md={4} item className="skill-card">
          <img src="/assest/skills/nodejs.svg" alt="NodeJs" />
          <h2>NodeJs</h2>
        </Grid>
        <Grid lg={4} xl={4} sm={4} xs={6} md={4} item className="skill-card">
          <img src="/assest/skills/database.svg" alt="DB" />
          <h2>Database</h2>
        </Grid>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,288L30,261.3C60,235,120,181,180,186.7C240,192,300,256,360,277.3C420,299,480,277,540,245.3C600,213,660,171,720,149.3C780,128,840,128,900,144C960,160,1020,192,1080,186.7C1140,181,1200,139,1260,128C1320,117,1380,139,1410,149.3L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </Grid>
    </Grid>
  );
}
