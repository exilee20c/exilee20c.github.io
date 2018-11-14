import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterWrap = styled.footer`
  color: #ffffff;
  background-color: #000000;
`;

const FooterContent = styled.div`
  max-width: ${props => props.maxWidth};
  margin-left: auto;
  margin-right: auto;
`;

class Footer extends Component {
  render() {
    return (
      <FooterWrap>
        <FooterContent maxWidth={this.props.maxWidth}>
          <div>푸터가 들어갈 공간입니다.</div>
          <ul>
            <li>
              <Link to="/">메인화면</Link>
            </li>
          </ul>
        </FooterContent>
      </FooterWrap>
    );
  }
}

export default Footer;
