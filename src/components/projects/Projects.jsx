import "./projects.scss";
import { Grid } from "@material-ui/core";
import React from "react";

export default function Projects() {
  return (
    <Grid container className="project" id="projects">
      <Grid container item justify="center">
        <Grid item className="project-title">
          <h1>Projects</h1>
          <br />
          <br />
        </Grid>
      </Grid>
      <Grid container item alignItems="flex-start" justify="center">
        <Grid
          xs={12}
          sm={6}
          md={5}
          lg={5}
          xl={5}
          item
          className="project-card-img"
        >
          <img src="/assest/projects/1.jpg" alt="1" />
        </Grid>
        <Grid
          xs={12}
          sm={6}
          md={5}
          lg={5}
          xl={5}
          item
          className="project-card-body"
        >
          <h1>Crunchbase</h1>
          <p>
            Absorbing UK Company Profiles from Crunchbase web scrapping data
            mining
          </p>
        </Grid>
        <Grid
          xs={12}
          sm={6}
          md={5}
          lg={5}
          xl={5}
          item
          className="project-card-img"
        >
          <img src="/assest/projects/2.png" alt="2" />
        </Grid>
        <Grid
          xs={12}
          sm={6}
          md={5}
          lg={5}
          xl={5}
          item
          className="project-card-body"
        >
          <h1>Companies House</h1>
          <p>
            Absorbing UK Company Profiles from Companies House web scrapping
            data mining
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
}
