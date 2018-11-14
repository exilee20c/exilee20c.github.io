import React, { Fragment } from "react";

import Footer from "./components/Footer";

import { withMain } from "./withMain";

function withFooter(SectionComponent, maxWidth) {
  const Component = withMain(SectionComponent, maxWidth);

  return class extends React.Component {
    render() {
      return (
        <Fragment>
          <Component {...this.props} />

          <Footer maxWidth={maxWidth} />
        </Fragment>
      );
    }
  };
}

export { withFooter };
