import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { withMain } from "./withMain";

const FooterWrap = styled.footer`
  color: #ffffff;
  background-color: #000000;
`;

const FooterContent = styled.div`
  max-width: ${props => props.maxWidth};
  margin-left: auto;
  margin-right: auto;
`;

function withFooter(SectionComponent, maxWidth) {
  const Component = withMain(SectionComponent, maxWidth);

  return class extends React.Component {
    render() {
      return (
        <Fragment>
          <Component {...this.props} />

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

export { withFooter };
