import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Jumbotron from "./components/Jumbotron";

const LandingWrapper = styled.div`
  max-width: ${props => props.maxWidth};
  margin-left: auto;
  margin-right: auto;

  div {
    text-align: center;

    .kr-text {
      font-family: "Nanum Gothic Coding", monospace;
    }

    .en-text {
      font-family: "Ubuntu Mono", monospace;
    }

    h6 {
      margin-top: 32px;
      margin-bottom: 20px;
      font-size: 14px;
      font-weight: bold;
    }

    ul {
      li {
        display: inline-block;
        transition: filter 0.5s ease;

        filter: grayscale(1);

        a {
          text-decoration: none;
          color: inherit;
        }

        &:hover {
          filter: grayscale(0);
        }

        width: 200px;

        i {
          font-size: 64px;

          &.fa-react {
            color: #61dafb;
          }
          &.fa-database {
            color: #607d8b;
          }
          &.fa-java {
            color: #ff0000;
          }
          &.fa-npm {
            color: #cb3837;
          }
        }

        p {
          margin-top: 6px;
          font-size: 12px;
        }
      }
    }
  }

  hr {
    margin-top: 50px;
    margin-bottom: 30px;
    border-top-color: #546e7a;
    border-bottom-color: #455a64;
  }
`;

class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <Jumbotron maxWidth={this.props.maxWidth} />
        <LandingWrapper maxWidth={this.props.maxWidth}>
          <div>
            <h6 className="kr-text">무엇을 다룰수 있나요?</h6>
            <ul>
              <li>
                <i className="fab fa-java" />
                <p className="en-text">Since. 2013-01-01, Java 7</p>
              </li>
              <li>
                <i className="fas fa-database" />
                <p className="en-text">MS-SQL, Oracle, MySQL</p>
              </li>
              <li>
                <i className="fab fa-react" />
                <p className="en-text">Since. 2017-02-01</p>
              </li>
              <li>
                <i className="fab fa-npm" />
                <p className="en-text">Own 2 Packages</p>
              </li>
            </ul>
          </div>

          <hr />

          <div>
            <h6 className="kr-text">무엇을 다룰수 있나요?</h6>
            <ul>
              <li>
                <i className="fab fa-java" />
                <p className="en-text">Since. 2013-01-01, Java 7</p>
              </li>
              <li>
                <i className="fas fa-database" />
                <p className="en-text">MS-SQL, Oracle, MySQL</p>
              </li>
              <li>
                <i className="fab fa-react" />
                <p className="en-text">Since. 2017-02-01</p>
              </li>
              <li>
                <i className="fab fa-npm" />
                <p className="en-text">Own 2 Packages</p>
              </li>
            </ul>
          </div>

          <hr />

          <div>
            <h6 className="kr-text">무엇을 다룰수 있나요?</h6>
            <ul>
              <li>
                <i className="fab fa-java" />
                <p className="en-text">Since. 2013-01-01, Java 7</p>
              </li>
              <li>
                <i className="fas fa-database" />
                <p className="en-text">MS-SQL, Oracle, MySQL</p>
              </li>
              <li>
                <i className="fab fa-react" />
                <p className="en-text">Since. 2017-02-01</p>
              </li>
              <li>
                <i className="fab fa-npm" />
                <p className="en-text">Own 2 Packages</p>
              </li>
            </ul>
          </div>

          <hr />

          <div>
            <h6 className="kr-text">무엇을 다룰수 있나요?</h6>
            <ul>
              <li>
                <i className="fab fa-java" />
                <p className="en-text">Since. 2013-01-01, Java 7</p>
              </li>
              <li>
                <i className="fas fa-database" />
                <p className="en-text">MS-SQL, Oracle, MySQL</p>
              </li>
              <li>
                <i className="fab fa-react" />
                <p className="en-text">Since. 2017-02-01</p>
              </li>
              <li>
                <i className="fab fa-npm" />
                <p className="en-text">Own 2 Packages</p>
              </li>
            </ul>
          </div>
        </LandingWrapper>
      </Fragment>
    );
  }
}

export default LandingPage;
