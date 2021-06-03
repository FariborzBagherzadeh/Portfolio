import React from "react";
import "./skills.scss";
import { Grid } from "@material-ui/core";
export default function Skills() {
  return (
    <Grid container className="skill" id="skills">
      <Grid container item justify="center">
        <Grid item className="skill-title">
          <h1>Skills</h1>
        </Grid>
      </Grid>
      <Grid item container alignItems="center">
        <Grid lg={4} xl={4} sm={12} xs={12} md={4} item className="skill-card">
          <img src="/assest/skills/python.svg" alt="python" />
          <h2>Python</h2>
          <p>Some Text</p>
        </Grid>
        <Grid item lg={4} xl={4} sm={12} xs={12} md={4} className="skill-card">
          <img
            src="/assest/skills/artificial-intelligence.svg"
            alt="artificial-intelligence"
          />
          <h2>Artificial Intelligence</h2>
          <p>Some Text</p>
        </Grid>

        <Grid lg={4} xl={4} sm={12} xs={12} md={4} item className="skill-card">
          <img src="/assest/skills/brain.svg" alt="brain" />
          <h2>Machine Learning</h2>
          <p>Some Text</p>
        </Grid>
        <Grid lg={4} xl={4} sm={12} xs={12} md={4} item className="skill-card">
          <img src="/assest/skills/data.svg" alt="data" />
          <h2>Data Science</h2>
          <p>Some Text</p>
        </Grid>
        <Grid lg={4} xl={4} sm={12} xs={12} md={4} item className="skill-card">
          <img src="/assest/skills/statistics.svg" alt="statistics" />
          <h2>Data Analytics</h2>
          <p>Some Text</p>
        </Grid>
        <Grid lg={4} xl={4} sm={12} xs={12} md={4} item className="skill-card">
          <img src="/assest/skills/robotic-arm.svg" alt="robot arm" />
          <h2>Robotic</h2>
          <p>Some Text</p>
        </Grid>
      </Grid>
    </Grid>
  );
}
