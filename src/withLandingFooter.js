import React, { Fragment } from "react";

import Footer from "./components/Footer";

import { withLandingMain } from "./withLandingMain";

function withLandingFooter(SectionComponent, maxWidth) {
  const Component = withLandingMain(SectionComponent);

  return class extends React.Component {
    render() {
      return (
        <Fragment>
          <Component {...this.props} maxWidth={maxWidth} />

          <Footer maxWidth={maxWidth} />
        </Fragment>
      );
    }
  };
}

export { withLandingFooter };
