import React, { Component } from "react";
import RandomDot from "./RandomDot";
import styled, { keyframes } from "styled-components";

const JumbotronContent = styled.div`
  background-color: #263238;
  height: 300px;
  position: relative;
`;

const Canvas = styled.canvas`
  transition: opacity 1s ease;
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;

  &.initiating {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  &.initiated {
    opacity: 1;
  }
`;

const h6Move = keyframes`
  0% {
    margin-left: -10vw;
    opacity:0;
  }

  100% {
    margin-left: 0;
    opacity:1;
  }
`;

const h3Move = keyframes`
  0% {
    margin-left: 10vw;
    opacity:0;
  }

  100% {
    margin-left: 0;
    opacity:1;
  }
`;

const blockquoteMove = keyframes`
  0% {
    margin-top: 50px;
    opacity:0;
  }

  100% {
    margin-top: 0;
    opacity:1;
  }
`;

const JumbotronEssence = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  div {
    max-width: 1024px;
    margin-top: 80px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    h6 {
      font-family: "Nanum Gothic Coding", monospace;
      font-size: 16px;
      color: #ffffff;
      text-shadow: 1px 1px 3px black;

      margin-left: -10vw;
      opacity: 0;
      animation: ${h6Move} 1s ease-in forwards;
    }

    h3 {
      font-family: "Nanum Gothic Coding", monospace;
      font-size: 36px;
      margin-top: 20px;
      margin-bottom: 20px;
      color: #ffffff;
      text-shadow: 1px 1px 3px black;
      white-space: nowrap;

      margin-left: 10vw;
      opacity: 0;
      animation: ${h3Move} 1s 1s ease-in forwards;
    }

    blockquote {
      font-family: "Nanum Gothic Coding", monospace;
      font-size: 12px;
      color: #ffffff;
      text-shadow: 1px 1px 3px black;

      margin-top: 50px;
      opacity: 0;
      animation: ${blockquoteMove} 2s 3s ease-in forwards;

      cite {
        &:before {
          content: "-";
          padding: 0 4px;
        }
      }
    }
  }
`;

function matchCanvasSize() {
  const { wrapperRef, canvasRef } = this;

  canvasRef.current.width = wrapperRef.current.clientWidth;
}

class Jumbotron extends Component {
  state = {
    is_inited: false
  };

  wrapperRef = React.createRef();
  canvasRef = React.createRef();
  circleArray = [];
  matchCanvasSize = matchCanvasSize.bind(this);
  initCanvas = this.initCanvas.bind(this);

  componentDidMount() {
    this.matchCanvasSize();
    window.addEventListener("resize", this.matchCanvasSize);
    window.addEventListener("resize", this.initCanvas);
    this.initCanvas();
  }

  initCanvas() {
    this.setState({ is_inited: false }, () =>
      window.setTimeout(() => this.setState({ is_inited: true }), 1000)
    );
    if (this.animationId) {
      window.cancelAnimationFrame(this.animationId);
    }

    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    this.circleArray = [];
    for (let i = 0; i < parseInt(canvas.clientWidth / 10); i++) {
      this.circleArray.push(new RandomDot(ctx));
    }

    window.requestAnimationFrame(() => this.draw(ctx));
  }
  draw(ctx) {
    const { canvas } = ctx;
    const { clientWidth, clientHeight } = canvas;
    ctx.clearRect(0, 0, clientWidth, clientHeight);

    this.circleArray.map(circle => circle.paint());

    this.animationId = window.requestAnimationFrame(() => this.draw(ctx));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.matchCanvasSize);
    window.removeEventListener("resize", this.initCanvas);
    window.cancelAnimationFrame(this.animationId);
  }

  render() {
    return (
      <JumbotronContent ref={this.wrapperRef}>
        <Canvas
          className={this.state.is_inited ? "initiated" : "initiating"}
          width="1024"
          height="300"
          ref={this.canvasRef}
        />
        <JumbotronEssence>
          <div>
            <h6>어떤 과제건, 검색해서라도 구현해내는</h6>
            <h3>프론트엔드 개발자</h3>
            <blockquote>
              <span>말로 표현할 수 있는것은 모두 구현 가능하다.</span>
              <cite>박인혁</cite>
            </blockquote>
          </div>
        </JumbotronEssence>
      </JumbotronContent>
    );
  }
}

export default Jumbotron;
