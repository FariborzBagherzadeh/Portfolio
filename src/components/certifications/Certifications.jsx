import React from "react";
import "./certifications.scss";
import { Grid } from "@material-ui/core";

export default function Certifications() {
  return (
    <Grid container className="certifications" id="certifications">
      <Grid
        className="certifications-title"
        container
        item
        spacing={2}
        justify="center"
      >
        <Grid item>
          <br />
          <br />
          <h1>Certifications</h1>
          <br />
        </Grid>
      </Grid>
      <Grid
        item
        className="certifications-img"
        container
        spacing={2}
        direction="row"
        justify="flex-start"
      >
        <Grid
          className="certifications-img-column"
          item
          xs={12}
          sm={6}
          md={3}
          lg={4}
          xl={4}
        >
          <a href="/assest/certifications/1.jpg">
            <img src="/assest/certifications/1.jpg" alt="1" />
          </a>
        </Grid>
        <Grid
          className="certifications-img-column"
          item
          xs={12}
          sm={6}
          md={3}
          lg={4}
          xl={4}
        >
          <a href="/assest/certifications/2.jpg">
            <img src="/assest/certifications/2.jpg" alt="2" />
          </a>
        </Grid>
        <Grid
          className="certifications-img-column"
          item
          xs={12}
          sm={6}
          md={3}
          lg={4}
          xl={4}
        >
          <a href="/assest/certifications/3.jpg">
            <img src="/assest/certifications/3.jpg" alt="3" />
          </a>
        </Grid>
        <Grid
          className="certifications-img-column"
          item
          xs={12}
          sm={6}
          md={3}
          lg={4}
          xl={4}
        >
          <a href="/assest/certifications/4.jpg">
            <img src="/assest/certifications/4.jpg" alt="4" />
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
}
