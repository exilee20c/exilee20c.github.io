import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import { withMain } from "./withMain";
import { withFooter } from "./withFooter";
import { withLandingFooter } from "./withLandingFooter";
import LandingPage from "./LandingPage";
import CurriculumVitae from "./CurriculumVitae";

const TheUntitleds = () => <div>the-untitleds</div>;
const MirrorDimension = () => <div>mirror-dimension</div>;

class RoutingBody extends Component {
  render() {
    return (
      <Fragment>
        <Route
          path="/"
          exact
          component={withLandingFooter(LandingPage, this.props.maxWidth)}
        />
        <Route
          path="/curriculum-vitae"
          component={withFooter(CurriculumVitae, this.props.maxWidth)}
        />
        <Route
          path="/the-untitleds"
          component={withMain(TheUntitleds, this.props.maxWidth)}
        />
        <Route
          path="/mirror-dimension"
          component={withMain(MirrorDimension, this.props.maxWidth)}
        />
      </Fragment>
    );
  }
}

export default RoutingBody;
