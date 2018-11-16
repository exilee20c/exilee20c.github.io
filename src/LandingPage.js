import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Jumbotron from "./components/Jumbotron";

const LandingWrapper = styled.div`
  max-width: ${props => props.maxWidth};
  margin-left: auto;
  margin-right: auto;

  div {
    text-align: center;
    position: relative;

    .kr-text {
      font-family: "Nanum Gothic Coding", monospace;
    }

    .en-text {
      font-family: "Ubuntu Mono", monospace;
    }

    &.left {
      float: left;
    }

    &.right {
      float: right;
    }

    &.left,
    &.right {
      width: calc(50% - 25px);

      @media (max-width: 1024px) {
        width: 100%;
        float: unset;
      }

      p {
        font-size: 13px;
        line-height: 2;
        text-align: left;
      }
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

        @media (max-width: 1024px) {
          display: block;
          width: auto;
          height: 28px;
          text-align: left;

          & + li {
            margin-top: 24px;
          }

          i {
            font-size: 28px;
            vertical-align: middle;
          }

          p {
            margin-top: 0;
            margin-left: 12px;
            font-size: 20px;
            vertical-align: middle;
            display: inline-block;
          }
        }
      }
    }
  }

  hr {
    margin-top: 50px;
    margin-bottom: 30px;
    border-top-color: #546e7a;
    border-bottom-color: #455a64;

    &.just-air {
      margin-top: 0;
      border-top-color: transparent;
      border-bottom-color: transparent;
    }
  }
`;

const FloatingWrapper = styled.div`
  overflow: hidden;

  hr {
    display: none;
  }

  @media (max-width: 1024px) {
    width: calc(100% - 10vw);
    margin-left: auto;
    margin-right: auto;

    hr {
      display: block;
    }
  }
`;

class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <Jumbotron maxWidth={this.props.maxWidth} />
        <LandingWrapper maxWidth={this.props.maxWidth}>
          <FloatingWrapper>
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
          </FloatingWrapper>

          <hr />

          <FloatingWrapper>
            <div className="left">
              <h6 className="kr-text">첫단추 : 자바 웹 개발자</h6>
              <p className="kr-text">
                2013년 1월, 자바 웹 개발자로 경력의 첫걸음을 시작했습니다.
                SI프로젝트로 스프링 프레임웍과 오라클 JDBC로 수자원공사의
                발전통합운영시스템 관리자용 백오피스 개발 프로젝트를 하면서
                프로젝트 매니저에게 스카웃 제의를 받기도 했습니다. 자바
                초급개발자로서 여러 프로젝트를 경험하다보면 데이터베이스 기술이
                늘어가는게 느껴지고, MVC패턴은 언제나 큰 틀을 벗어나지 않으며,
                화면단에서의 고객의 추가기능 요청사항은 도전정신을 자극하는
                복잡한 로직을 필요로 하는 경우가 있었습니다. 이 화면단 작업이
                가장 재밌었습니다. 자연스레 프로젝트의 코어개발이 끝난후
                퍼블리싱을 입힌 후에 추가적으로 고객사로부터 복잡한 추가기능
                요청이 들어오기를 기다리게 됐습니다.
              </p>
            </div>

            <hr />

            <div className="right">
              <h6 className="kr-text">
                (리액트) => {"{ return 프론트엔드 개발자; }"}
              </h6>
              <p className="kr-text">
                프론트엔드 개발 붐이 일어나고, 관련 직군의 채용도 확대되자 가장
                재밌게 생각했던 화면단 개발에 좀더 집중하고 싶은 생각에 이직을
                하였습니다. 그렇게 2017년 2월, 첫 리액트 프로젝트를 시작으로
                현재까지 리액트 개발을 통해 프론트엔드 개발자의 길을 걸어가고
                있습니다. 시작은 회사에서 운영하는 서비스가 리액트로 구현되었기
                때문에 이를 유지보수하기 위해서 자연스럽게 리액트를 접해야했기
                때문이지만, HTML 마크업과 유사한 JSX 문법덕에 거부감이 없었고,
                높은 점유율 덕에 많은 레퍼런스들과 다양한 서드파티
                라이브러리들이 존재한다는 장점덕에 다른 라이브러리를 학습해야할
                필요성은 아직 느끼지 못하고 있습니다.
              </p>
            </div>
          </FloatingWrapper>

          <hr />

          <FloatingWrapper>
            <div className="left">
              <h6 className="kr-text">
                라이브러리 편찬자 : 개발자를 위한 개발자
              </h6>
              <p className="kr-text">
                협업을 하다보면 내가 만든 모듈을 협업자들에게 공유하고 이에
                대해서 개발이 한결 편리해졌다는 피드백을 받을때 뿌듯함을 느끼게
                됩니다. 사용자가 원하는 프로그램을 만드는 개발자, 그 개발을
                수월하게 만드는 라이브러리, 이 라이브러리를 만든다는 것은 정말
                멋진 일이라고 생각합니다. 저 또한 여러 라이브러리를 사용하여
                개발능률을 향상시킬수 있었습니다. 만들어진 라이브러리를 쓰는데에
                멈추지 않고, 직접 만든 라이브러리를 배포하여 다른 개발자들에게
                도움이 될수있기를 바라며 기회가 될때마다 NPM에 패키지를 올리고
                있습니다.
              </p>
            </div>

            <hr />

            <div className="right">
              <h6 className="kr-text">서비스 정신</h6>
              <p className="kr-text">
                개인사정으로 잠시 개발을 쉬며 카페에서 바리스타로 일한 적이
                있습니다. 다양한 사람을 만나 응대하고, 전쟁같은 피크타임을
                여러차례 넘기면서 예전에는 캐치하지 못했던 사소한 부분들을
                캐치해내는 순발력과 센스가 생겼습니다. 고객을 대하는 마음가짐을
                잊지 않고 대외관계를 유지하기도 이전보다 수월해졌습니다. 카페에
                갈때 커피에 관심이 많은 동료가 있으면 짧은 경험이나마 커피에
                대한 이야기를 해주는 소소한 낙도 있습니다.
              </p>
            </div>
          </FloatingWrapper>

          <hr />

          <FloatingWrapper>
            <div className="left">
              <h6 className="kr-text">국비지원교육 : 다시 개발자로</h6>
              <p className="kr-text">
                다시 개발자로 돌아가기 위해 바로 구직을 하는 방법도 있었지만,
                국비지원교육을 받으며 좀더 실력을 쌓는편이 좋겠다고 생각해서
                자바 웹 개발자를 양성하는 국비지원교육을 6개월간 수료하였습니다.
                경력자로서 아무래도 아는 내용이 더 많았기에 강의내용을 좀더
                자세히 알고싶어하는 학우들에게 저만의 포인트로 다시한번
                강의내용을 설명해주면서 도움을 주고는 했습니다. 교육과정 내에서
                수행하는 팀프로젝트에서는 여러 팀에서 디버깅 도움 요청이
                쇄도하였고, 저에게는 이때가 엄청난 성장의 기회였습니다. 역시
                가장 좋은 학습방법은 누군가를 가르쳐주는 것이라고 생각합니다.
              </p>
            </div>

            <hr />

            <div className="right">
              <h6 className="kr-text">정보처리산업기사</h6>
              <p className="kr-text">
                국비지원교육을 수강하던 때에 취업강점을 위해 정보처리기사
                자격증을 따라는 충고를 들었고, 전문학사 자격으로 응시 가능한
                정보처리산업기사에 도전하기 시작하였고, 드디어 2017년 5월 29일,
                정보처리산업기사 자격을 취득하였습니다.
              </p>
            </div>
          </FloatingWrapper>

          <hr className="just-air" />
        </LandingWrapper>
      </Fragment>
    );
  }
}

export default LandingPage;
