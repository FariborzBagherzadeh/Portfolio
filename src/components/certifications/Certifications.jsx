import React from "react";
import "./certifications.scss";
import { Grid } from "@material-ui/core";
import { Element } from "react-scroll";
export default function Certifications() {
  return (
    <Grid container className="certifications">
      <Element name="certification" className="home"></Element>
      <Grid item container justify="center">
        <Grid item className="certifications-title">
          <br />
          <h1>Certifications</h1>
          <br />
        </Grid>
      </Grid>
      <Grid item container justify="center" alignItems="center">
        <Grid item className="certifications-card">
          <a href="/assest/certifications/html.jpg" target="blank">
            <img src="/assest/certifications/html.jpg" alt="html" />
          </a>
        </Grid>
        <Grid item className="certifications-card">
          <a href="/assest/certifications/css.jpg" target="blank">
            <img src="/assest/certifications/css.jpg" alt="css" />
          </a>
        </Grid>
        <Grid item className="certifications-card">
          <a href="/assest/certifications/js.jpg" target="blank">
            <img src="/assest/certifications/js.jpg" alt="js" />
          </a>
        </Grid>
        <Grid item className="certifications-card">
          <a href="/assest/certifications/react.jpg" target="blank">
            <img src="/assest/certifications/react.jpg" alt="react" />
          </a>
        </Grid>
        <Grid item className="certifications-card">
          <a href="/assest/certifications/reactjs.jpg" target="blank">
            <img src="/assest/certifications/reactjs.jpg" alt="reactjs" />
          </a>
        </Grid>
        <Grid item className="certifications-card">
          <a href="/assest/certifications/python1.jpg" target="blank">
            <img src="/assest/certifications/python1.jpg" alt="python1" />
          </a>
        </Grid>
        <Grid item className="certifications-card">
          <a href="/assest/certifications/python2.jpg" target="blank">
            <img src="/assest/certifications/python2.jpg" alt="python2" />
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
}
