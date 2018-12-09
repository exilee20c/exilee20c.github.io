import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import HeaderContent from "./HeaderContent";
import RoutingBody from "./RoutingBody";
import Scrollable from "hide-scrollbar-react";
import MemoDocker from "./components/MemoDocker";

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
  if (document.querySelector(".exl-scrollable-container")) {
    if (document.querySelector(".exl-scrollable-container").scrollTop) {
      this.headerRef.current.classList.remove("top-docked");
      this.headerRef.current.classList.add("top-floating");
    } else {
      this.headerRef.current.classList.remove("top-floating");
      this.headerRef.current.classList.add("top-docked");
    }
  }
}

class ExileeWebApp extends Component {
  headerRef = React.createRef();
  scrollHandler = scrollHandler.bind(this);

  componentDidMount() {
    document.querySelector(".exl-scrollable-container") &&
      document
        .querySelector(".exl-scrollable-container")
        .addEventListener("scroll", this.scrollHandler);
  }

  componentWillUnmount() {
    document.querySelector(".exl-scrollable-container") &&
      document
        .querySelector(".exl-scrollable-container")
        .removeEventListener("scroll", this.scrollHandler);
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Scrollable>
            {/* START::HEADER_CONTENT */}
            <HeaderWrap ref={this.headerRef} className="top-docked">
              <HeaderContent maxWidth={BODY_WIDTH} />
            </HeaderWrap>
            {/* E N D::HEADER_CONTENT */}

            <RoutingBody maxWidth={BODY_WIDTH} />
          </Scrollable>
          <MemoDocker title="localStorage(&quot;TODO&quot;)@exilee20c" />
        </Fragment>
      </Router>
    );
  }
}

export default ExileeWebApp;
