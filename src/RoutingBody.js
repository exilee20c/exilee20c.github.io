import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import { withLandingFooter } from "./withLandingFooter";
import LandingPage from "./LandingPage";

class RoutingBody extends Component {
  render() {
    return (
      <Fragment>
        <Route
          component={withLandingFooter(LandingPage, this.props.maxWidth)}
        />
      </Fragment>
    );
  }
}

export default RoutingBody;
