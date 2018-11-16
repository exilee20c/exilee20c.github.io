import React, { Component } from "react";
import styled from "styled-components";

const MainWrapper = styled.main`
  a {
    color: inherit;
    text-decoration: none;
  }
`;

function withLandingMain(SectionComponent) {
  return class extends Component {
    render() {
      return (
        <MainWrapper>
          <SectionComponent {...this.props} />
        </MainWrapper>
      );
    }
  };
}

export { withLandingMain };
