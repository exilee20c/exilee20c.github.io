import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterWrap = styled.footer`
  color: #ffffff;
  background-color: #000000;
`;

const Logo = styled.div`
  display: inline-block;
  font-size: 32px;
  font-family: "Ubuntu Mono", monospace;
`;
const Color = styled.span`
  color: ${props => props.value || "inherit"};
`;

const FooterContent = styled.div`
  max-width: ${props => props.maxWidth};
  padding-top: 32px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 64px;
`;

class Footer extends Component {
  render() {
    return (
      <FooterWrap>
        <FooterContent maxWidth={this.props.maxWidth}>
          <Logo>
            *<Color value="#ff0000">@</Color>
            exilee20c
          </Logo>
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
