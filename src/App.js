import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

import HeaderContent from "./HeaderContent";
import RoutingBody from "./RoutingBody";

const BODY_WIDTH = "1024px";

const HeaderWrap = styled.header`
  background-color: rgba(0, 0, 0, 0);
  position: fixed;
  width: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  transition: background-color 0.5s ease;

  a {
    color: inherit;
    text-decoration: none;
  }

  &.top-floating {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

function scrollHandler() {
  if (window.scrollY) {
    this.headerRef.current.classList.remove("top-docked");
    this.headerRef.current.classList.add("top-floating");
  } else {
    this.headerRef.current.classList.remove("top-floating");
    this.headerRef.current.classList.add("top-docked");
  }
}

class ExileeWebApp extends Component {
  headerRef = React.createRef();
  scrollHandler = scrollHandler.bind(this);

  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandler);
  }

  render() {
    return (
      <Router>
        <Fragment>
          {/* START::HEADER_CONTENT */}
          <HeaderWrap ref={this.headerRef} className="top-docked">
            <HeaderContent maxWidth={BODY_WIDTH} />
          </HeaderWrap>
          {/* E N D::HEADER_CONTENT */}

          <RoutingBody maxWidth={BODY_WIDTH} />
        </Fragment>
      </Router>
    );
  }
}

export default ExileeWebApp;
