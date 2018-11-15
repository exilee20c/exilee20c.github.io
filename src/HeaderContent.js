import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LOGO_HEIGHT = "32px";
const NAV_HEIGHT = "16px";

const HeaderWrap = styled.div`
  max-width: ${props => props.maxWidth};
  margin-left: auto;
  margin-right: auto;
`;

const Color = styled.span`
  color: ${props => props.value || "inherit"};
`;

const LogoTitle = styled.h1`
  font-family: "Ubuntu Mono", monospace;
  font-size: ${LOGO_HEIGHT};
  color: #ffffff;
  vertical-align: middle;
  display: inline-block;

  a {
    display: inline-block;
    padding: 4px 8px;
  }

  & + ul {
    margin-left: 12px;
  }
`;

const NavStack = styled.ul`
  font-family: "Nanum Gothic Coding", monospace;
  font-size: ${NAV_HEIGHT};
  color: #ffffff;
  display: inline-block;
`;

const NavButton = styled.li`
  line-height: ${LOGO_HEIGHT};
  vertical-align: middle;
  display: inline-block;

  a {
    display: inline-block;
    padding: 4px 8px;
  }

  & + & {
    margin-left: 12px;
  }
`;

class HeaderContent extends Component {
  render() {
    return (
      <HeaderWrap maxWidth={this.props.maxWidth}>
        <LogoTitle>
          <Link to="/">
            *<Color value="#e53935">@</Color>
            exilee20c
          </Link>
        </LogoTitle>
        {/* <NavStack>
          <NavButton>
            <Link to="curriculum-vitae">curriculum vitae</Link>
          </NavButton>
          <NavButton>
            <Link to="side-projects">side projects</Link>
          </NavButton>
          <NavButton>
            <Link to="copy-and-paste">copy and paste</Link>
          </NavButton>
        </NavStack> */}
      </HeaderWrap>
    );
  }
}

export default HeaderContent;
