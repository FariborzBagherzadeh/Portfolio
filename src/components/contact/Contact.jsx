import "./contact.scss";
import { Grid } from "@material-ui/core";
import { Element } from "react-scroll";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdbreact";
export default function Contact() {
  return (
    <Grid container className="contact">
      <Element name="contact" className="home"></Element>
      <Grid item container justify="center">
        <Grid item className="contact-title">
            <br />
          <h2>Contact</h2>
         
        </Grid>
      </Grid>
      <Grid item container justify="center">
        <Grid item className="contact-form">
          <br />
          <MDBContainer className="contact-form-mdb">
            <MDBRow>
              <MDBCol>
                <form>
                  <p className="h5 text-center mb-4">Write to me</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Your name"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Subject"
                      icon="tag"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      type="textarea"
                      rows="2"
                      label="Your message"
                      icon="pencil-alt"
                    />
                  </div>
                  <div className="text-center">
                    <MDBBtn outline color="secondary">
                      Send
                      <MDBIcon far icon="paper-plane" className="ml-1" />
                    </MDBBtn>
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <br />
        </Grid>
      </Grid>
    </Grid>
  );
}
