import React, { Component } from "react";
import styled from "styled-components";

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
  font-size: 16px;
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
  font-size: 16px;
  color: #ffffff;
  display: inline-block;
`;

const NavButton = styled.li`
  line-height: 16px;
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
          <a href="#jumbotron">
            *<Color value="#e53935">@</Color>
            exilee20c
          </a>
        </LogoTitle>
        <NavStack>
          <NavButton>
            <a href="#curriculum-vitae">curriculum vitae</a>
          </NavButton>
          <NavButton>
            <a href="#introduce">introduce</a>
          </NavButton>
          {/* <NavButton>
            <Link to="side-projects">side projects</Link>
          </NavButton>
          <NavButton>
            <Link to="copy-and-paste">copy and paste</Link>
          </NavButton> */}
        </NavStack>
      </HeaderWrap>
    );
  }
}

export default HeaderContent;
