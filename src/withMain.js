import React, { Component, Fragment } from "react";
import styled from "styled-components";

const MainWrapper = styled.main`
  max-width: ${props => props.maxWidth};
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 16px;
  padding-bottom: 16px;
`;

function withMain(SectionComponent, maxWidth) {
  return class extends Component {
    render() {
      return (
        <MainWrapper maxWidth={maxWidth}>
          <SectionComponent {...this.props} />
        </MainWrapper>
      );
    }
  };
}

export { withMain };
