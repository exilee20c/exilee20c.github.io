import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { withLandingMain } from "./withLandingMain";

const FooterWrap = styled.footer`
  color: #ffffff;
  background-color: #000000;
`;

const FooterContent = styled.div`
  max-width: ${props => props.maxWidth};
  margin-left: auto;
  margin-right: auto;
`;

function withLandingFooter(SectionComponent, maxWidth) {
  const Component = withLandingMain(SectionComponent);

  return class extends React.Component {
    render() {
      return (
        <Fragment>
          <Component {...this.props} maxWidth={maxWidth} />

          <FooterWrap>
            <FooterContent maxWidth={maxWidth}>
              <div>이거슨 푸터</div>
              <ul>
                <li>
                  <Link to="gd">ㅎㅇ</Link>
                </li>
              </ul>
            </FooterContent>
          </FooterWrap>
        </Fragment>
      );
    }
  };
}

export { withLandingFooter };
