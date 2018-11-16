import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Jumbotron from "./components/Jumbotron";
import CurriculumVitae from "./components/CurriculumVitae";
import TooMuchTalking from "./components/TooMuchTalking";

const LandingWrapper = styled.div`
  max-width: ${props => props.maxWidth};
  margin-left: auto;
  margin-right: auto;

  .kr-text {
    font-family: "Nanum Gothic Coding", monospace;
  }

  .en-text {
    font-family: "Ubuntu Mono", monospace;
  }

  h6 {
    margin-top: 50px;
    margin-bottom: 20px;
    font-size: 14px;
    font-weight: bold;
  }

  hr {
    margin-top: 50px;
    margin-bottom: 30px;
    border-top-color: #546e7a;
    border-bottom-color: #455a64;

    &.just-air {
      margin-top: 0;
      border-top-color: transparent;
      border-bottom-color: transparent;
    }
  }

  @media (max-width: 1024px) {
    width: calc(100% - 10vw);
  }
`;

class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <Jumbotron maxWidth={this.props.maxWidth} />
        <LandingWrapper maxWidth={this.props.maxWidth}>
          <CurriculumVitae />

          <hr />

          <TooMuchTalking />

          <hr className="just-air" />
        </LandingWrapper>
      </Fragment>
    );
  }
}

export default LandingPage;
