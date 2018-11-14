import React, { Component, Fragment } from "react";
import styled from "styled-components";

import Jumbotron from "./components/Jumbotron";

const LandingWrapper = styled.div`
  max-width: ${props => props.maxWidth};
  margin-left: auto;
  margin-right: auto;
`;

class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <Jumbotron maxWidth={this.props.maxWidth} />
        <LandingWrapper maxWidth={this.props.maxWidth}>gdgg</LandingWrapper>
      </Fragment>
    );
  }
}

export default LandingPage;
