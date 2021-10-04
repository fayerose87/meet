import React from "react";
import "./WelcomeScreen.css";
import logo from "./devmeet_logo.png";
import background from "./background.jpg";
import { Container, Row } from "react-bootstrap";

function WelcomeScreen(props) {
  return props.showWelcomeScreen ? (
    <Container className="WelcomeScreen">
      <img alt="background-image" src={background} className="background" />
        <Row className="login col-sm-8 mx-auto">
              <div className="card-body p-4 p-sm-5">
                <img
                  alt="devMeet logo"
                  src={logo}
                  width="100%"
                  height="35px"
                  className="logo"
                />
                <p>
                  Sign in to see upcoming events around the world for full-stack developers.
                </p>
                <div className="button_cont" align="center">
                  <div className="google-btn">
                    <div className="google-icon-wrapper">
                      <img
                        className="google-icon"
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                        alt="Google sign-in"
                      />
                    </div>
                    <button
                      onClick={() => {
                        props.getAccessToken();
                      }}
                      rel="nofollow noopener"
                      className="btn-text"
                    >
                      <b>Sign in with Google</b>
                    </button>
                  </div>
                </div>
                <a
                  href="https://fayerose87.github.io/meet/privacy.html"
                  rel="nofollow noopener"
                >
                  Privacy Policy
                </a>
            </div>
        </Row>
      </Container>
  ) : null;
}
export default WelcomeScreen;
