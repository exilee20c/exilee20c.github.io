import React, { Component } from "react";
import styled from "styled-components";

const MainWrapper = styled.main`
  margin-top: 40px;
  padding-bottom: 16px;
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
