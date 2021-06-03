import React from "react";
import { Grid } from "@material-ui/core";
import { Instagram, WhatsApp, Email, Telegram } from "@material-ui/icons";
import "./portfolio.scss";

export default function Portfolio() {
  return (
    <Grid container className="portfolio" id="portfolio">
      <Grid item className="" container justify="center" alignItems="center">
        <Grid
          className="portfolio-biography-img"
          justify="center"
          item
          md={6}
          lg={6}
          xl={6}
        >
          <br />
          <img src="/assest/fz.jpg" alt="fz" />
          <h1>FARAMARZ BAGHERZADE</h1>
          <h3>The University of Gadansk</h3>
          <h4>PHD Student</h4>
          <div>
            <a href="www.gmail.com">
              <Email />
            </a>
            <a href="www.instagram.com">
              <Instagram />
            </a>
            <a href="www.whatsapp.com">
              <WhatsApp />
            </a>

            <a href="www.telegram.com">
              <Telegram />
            </a>
          </div>
        </Grid>
        <Grid className="portfolio-title" item md={6} lg={6} xl={6}>
          <h1>Biography</h1>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,
            molestias? Aspernatur incidunt in tempore sed quae dolorum sint
            blanditiis, rem distinctio, veritatis dolorem sit necessitatibus ad
            corrupti quasi, iste odit?
          </p>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quo
            inventore voluptate sapiente molestiae dolore, repellendus corrupti
            expedita soluta nam ad! Repudiandae qui praesentium quaerat sed
            dolores aspernatur quo perferendis.
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
}
