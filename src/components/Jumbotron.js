import React, { Component } from "react";
import styled from "styled-components";

const JumbotronContent = styled.div`
  background-color: #263238;
  height: 3000px;
`;

class Jumbotron extends Component {
  render() {
    return <JumbotronContent>나야나</JumbotronContent>;
  }
}

export default Jumbotron;
