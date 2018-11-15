import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import { withMain } from "./withMain";
import { withFooter } from "./withFooter";
import { withLandingFooter } from "./withLandingFooter";
import LandingPage from "./LandingPage";
import CurriculumVitae from "./CurriculumVitae";

const SideProjects = () => <div>side-projects</div>;
const CopyAndPaste = () => <div>copy-and-paste</div>;

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
          path="/side-projects"
          component={withMain(SideProjects, this.props.maxWidth)}
        />
        <Route
          path="/copy-and-paste"
          component={withMain(CopyAndPaste, this.props.maxWidth)}
        />
      </Fragment>
    );
  }
}

export default RoutingBody;
