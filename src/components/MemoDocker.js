import React, { Component } from "react";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { far, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import {
  faStickyNote,
  faPlusSquare,
  faSquare,
  faCheckSquare
} from "@fortawesome/free-solid-svg-icons";

library.add(
  far,
  faStickyNote,
  faPlusSquare,
  faSquare,
  faCheckSquare,
  faTrashAlt
);

const Div = styled.div`
  position: fixed;
  bottom: 0;
  right: 24px;
  background-color: #2196f3;
  color: #ffffff;

  button.pick {
    cursor: pointer;
    width: 100%;
    text-align: left;
    border: 0;
    padding: 10px;
    margin: 0;
    outline: none;
    background-color: inherit;
    color: inherit;

    svg {
      vertical-align: middle;
      font-size: 24px;
    }

    span {
      vertical-align: middle;
      margin-left: 10px;
      font-size: 16px;
      font-family: "Ubuntu Mono", monospace;
    }
  }

  div.pane {
    width: 320px;
    height: 400px;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: -400px;
    transition: margin-bottom 0.7s ease-in-out;
    font-size: 16px;

    &.open {
      margin-bottom: 0px;
    }

    input {
      vertical-align: middle;
      font-family: "Ubuntu Mono", monospace;
      font-size: inherit;
      background-color: transparent;
      color: #ffffff;
      border: 0;
      padding: 0;
      margin: 0;
      outline: none;
      width: calc(100% - 24px);
      margin-left: 10px;
    }

    button {
      vertical-align: middle;
      font-size: inherit;
      cursor: pointer;
      border: 0;
      padding: 0;
      margin: 0;
      outline: none;
      background-color: inherit;
      color: inherit;
    }

    ul.memoes {
      font-size: inherit;
      font-family: "Ubuntu Mono", monospace;

      li {
        button {
          span {
            margin-left: 10px;
          }
        }
        margin-top: 10px;
      }
    }

    button.clean {
      cursor: pointer;
      border: 0;
      padding: 0;
      margin: 0;
      outline: none;
      background-color: inherit;
      color: inherit;
      margin-top: 10px;

      svg {
        vertical-align: middle;
      }

      span {
        margin-left: 10px;
        vertical-align: middle;
        font-size: 16px;
        font-family: "Ubuntu Mono", monospace;
      }
    }
  }
`;
const load = () => {
  if (
    window.localStorage &&
    typeof window.localStorage.getItem === "function"
  ) {
    try {
      return JSON.parse(window.localStorage.getItem("_exl_todo"));
    } catch (e) {
      return undefined;
    }
  }
  return undefined;
};

export class MemoDocker extends Component {
  state = load() || { open: true, memo: "", memoes: [], m_l: 0 };

  memoRef = React.createRef();

  openByClick = () =>
    this.setState(
      ({ open }) => ({ open: !open }),
      () => {
        if (this.state.open) this.memoRef.current.focus();
      }
    );

  memoIt = ({ target }) => this.setState({ memo: target.value });
  addMemo = () =>
    this.state.memo &&
    this.setState(({ memoes }) => ({
      m_l: memoes.unshift({
        g: new Date().toISOString(),
        v: this.state.memo,
        d: false
      }),
      memo: ""
    }));

  doneMemo = (g, d) => {
    this.setState(({ memoes }) => ({
      m_l: (memoes[memoes.findIndex(m => m.g === g)].d = d)
    }));
  };

  cleanMemo = () => {
    this.setState(({ memoes }) => ({
      memoes: memoes.filter(m => !m.d)
    }));
  };

  keyBind = (e, key, cb) => {
    if (e.key === key && typeof cb === "function") cb();
  };

  componentDidMount() {
    window.addEventListener("beforeunload", this.save);
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.save);
  }

  save = () => {
    if (
      window.localStorage &&
      typeof window.localStorage.setItem === "function"
    ) {
      window.localStorage.setItem("_exl_todo", JSON.stringify(this.state));
    }
    console.log("_exl_todo", JSON.stringify(this.state));
  };

  render() {
    const { title: t } = this.props;
    const { open, memo, memoes } = this.state;

    return (
      <Div>
        <button className="pick" onClick={this.openByClick}>
          <FontAwesomeIcon icon={["far", "sticky-note"]} />
          <span>{t || 'TODO DOCKER'}</span>
        </button>

        <div className={`pane${open ? " open" : ""}`}>
          <button onClick={this.addMemo}>
            <FontAwesomeIcon icon={["far", "plus-square"]} />
          </button>
          <input
            ref={this.memoRef}
            type="text"
            onChange={this.memoIt}
            onKeyPress={e => this.keyBind(e, "Enter", this.addMemo)}
            value={memo}
          />

          <ul className="memoes">
            {memoes.map(({ g, v, d }) => (
              <li key={g}>
                <button onClick={() => this.doneMemo(g, !d)}>
                  <FontAwesomeIcon
                    icon={["far", d ? "check-square" : "square"]}
                  />
                  <span>{v}</span>
                </button>
              </li>
            ))}
          </ul>
          <button className="clean" onClick={this.cleanMemo}>
            <FontAwesomeIcon icon={["far", "trash-alt"]} />
            <span>CLEAN DONE</span>
          </button>
        </div>
      </Div>
    );
  }
}

export default MemoDocker;
