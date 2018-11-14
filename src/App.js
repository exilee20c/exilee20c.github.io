import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

import HeaderContent from "./HeaderContent";
import RoutingBody from "./RoutingBody";

const BODY_WIDTH = "1024px";
const HeaderWrap = styled.header`
  background-color: #263238;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;

  a {
    color: inherit;
    text-decoration: none;
  }

  &:top-docked {
  }
  &:top-floating {
  }
`;

function logEvent() {
  this.setState({ is_scroll_top: !!window.scrollY });
}

class ExileeWebApp extends Component {
  state = {
    is_scroll_top: true
  };

  logEvent = logEvent.bind(this);

  componentDidMount() {
    window.addEventListener("scroll", this.logEvent);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.logEvent);
  }

  render() {
    return (
      <Router>
        <Fragment>
          {/* START::HEADER_CONTENT */}
          <HeaderWrap
            className={this.state.is_scroll_top ? "top-floating" : "top-docked"}
          >
            <HeaderContent maxWidth={BODY_WIDTH} />
          </HeaderWrap>
          {/* E N D::HEADER_CONTENT */}

          {/* START::ROUTING_BODY_HOC */}
          <RoutingBody maxWidth={BODY_WIDTH} />
          {/* E N D::ROUTING_BODY_HOC */}
        </Fragment>
      </Router>
    );
  }
}

export default ExileeWebApp;
