import React, { Component } from "react";
import styled from "styled-components";

const CurriculumWrap = styled.section`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;

  ul.content-list {
    font-size: 14px;

    li.content-item {
      p {
        display: inline-block;

        span {
          margin-left: 6px;
          font-size: 10px;
          display: inline-block;
          padding: 2px 6px;
          background-color: #666666;
          color: #ffffff;
        }
      }

      div.time-wrap {
        background-color: #666666;
        color: #ffffff;
        padding: 1px 6px;
        font-size: 12px;
        width: 230px;
        display: inline-block;
        float: right;
        overflow: hidden;

        i {
          display: inline-block;
          width: 12px;
          margin-right: 6px;
          text-align: center;
        }

        time {
          display: inline-block;
          text-align: center;

          &.time-to {
            width: 112px;
            float: right;

            &:before {
              content: "~";
              display: inline-block;
              width: 12px;
              text-align: center;
            }
          }

          &.time-from {
            width: 112px;

            &:after {
              content: "~";
              display: inline-block;
              width: 12px;
              text-align: center;
            }

            & + .time-to {
              width: 100px;
              &:before {
                display: none;
              }
            }
          }
        }
      }

      div.project-wrap {
        margin-left: 12px;

        p.title {
          display: block;
          margin-top: 18px;
          margin-bottom: 12px;

          span {
            margin-left: 0;
            font-size: 12px;
            display: inline-block;
            background-color: #bababa;
          }

          &:after {
            content: "";
            width: calc(100% - 90px);
            height: 1px;
            display: inline-block;
            background-color: #bababa;
            vertical-align: bottom;
          }
        }

        ul.project-list {
          li {
            span {
              background-color: #bababa;
            }

            div.time-wrap {
              background-color: #bababa;
            }

            & + li {
              margin-top: 12px;
            }
          }
        }
      }

      & + li.content-item {
        margin-top: 12px;
        padding-top: 12px;
        border-top: 1px solid #666666;
      }
    }
  }
`;

const EDU_INFO = {
  title: "학력사항",
  list: [
    { title: "인천 대인고등학교 자연계열 졸업", to: "2009년 02월 11일" },
    {
      title: "인천재능대학교 컴퓨터정보과 졸업",
      desc: "평점 4.2 / 4.5점, 취득학점 89점, 학업우수표창",
      from: "2009년 02월 27일",
      to: "2013년 02월 06일"
    },
    {
      title: "한국방송통신대학교 컴퓨터과학과 편입학",
      desc: "3학년 편입학, 현재는 4학년 휴학중",
      from: "2016년 03월 05일"
    }
  ]
};

const DUTY_INFO = {
  title: "병역사항",
  list: [
    {
      title: "육군 포병 만기제대",
      desc: "현재는 예비군",
      from: "2009년 10월 13일",
      to: "2011년 08월 07일"
    }
  ]
};

const LISENCE_INFO = {
  title: "자격사항",
  list: [
    {
      title: "정보처리산업기사",
      from: "2017년 05월 29일"
    }
  ]
};

const CAREER_INFO = {
  title: "경력사항",
  list: [
    {
      title: "유니버셜리얼타임(주) 근무",
      desc: "Java 7, Spring Framework, Oracle, jQuery, 솔루션, SI",
      from: "2013년 01월 01일",
      to: "2013년 12월 28일",
      project: [
        {
          title: "수자원공사 발전통합운영체계",
          desc: "Java 7, Spring Framework, Oracle, jQuery, 백오피스",
          from: "2013년 01월 01일",
          to: "2013년 05월 31일"
        },
        {
          title: "현대해상 실시간 모니터링",
          desc: "Java 7, Spring Framework, Oracle, jQuery, 백오피스",
          from: "2013년 06월 01일",
          to: "2013년 12월 27일"
        }
      ]
    },
    {
      title: "(주)에이치알인트로 근무",
      desc: "Java 7, Spring Framework, Oracle, MySQL, jQuery, 솔루션, SI",
      from: "2016년 08월 08일",
      to: "2017년 01월 20일",
      project: [
        {
          title: "데이터베이스 마이그레이션",
          desc: "자사 솔루션 Oracle --> MySQL ",
          from: "2016년 09월 05일",
          to: "2016년 09월 23일"
        },
        {
          title: "고속철도 전용망 유심칩관리체계",
          desc: "Java 7, Spring Framework, MySQL, jQuery, 백오피스",
          from: "2016년 09월 26일",
          to: "2016년 12월 27일"
        }
      ]
    },
    {
      title: "(주)컬쳐크래프트 근무",
      desc: "웹 프론트엔드 개발, 리액트, 서비스 개발 및 운영",
      from: "2017년 02월 01일",
      project: [
        {
          title: "모코비 백오피스 개발 및 서비스 운영",
          desc: "php 기반 REST API, 리액트",
          from: "2017년 02월 01일",
          to: "2018년 03월 22일"
        },
        {
          title: "빈플레이트 서비스 및 백오피스 개발",
          desc: "php 기반 REST API, 리액트",
          from: "2017년 06월 19일"
        }
      ]
    }
  ]
};

function parseCategory(json_data) {
  const { title, list } = json_data;

  return () => (
    <article key={title} className="category">
      <h6>{title}</h6>
      <ul className="content-list kr-text">
        {list.map(item => (
          <li key={item.title} className="content-item">
            <p>
              {item.title}
              {item.desc && <span>{item.desc}</span>}
            </p>

            <div className="time-wrap">
              <i className="far fa-calendar-alt" />
              {item.from && <time className="time-from">{item.from}</time>}
              {item.to && <time className="time-to">{item.to}</time>}
            </div>

            {item.project && (
              <div className="project-wrap">
                <p className="title">
                  <span>프로젝트 경력</span>
                </p>
                <ul className="project-list">
                  {item.project.map(project => (
                    <li>
                      <p>
                        {project.title}
                        {project.desc && <span>{project.desc}</span>}
                      </p>

                      <div className="time-wrap">
                        <i className="far fa-calendar-alt" />
                        {project.from && (
                          <time className="time-from">{project.from}</time>
                        )}
                        {project.to && (
                          <time className="time-to">{project.to}</time>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </article>
  );
}

class LandingPage extends Component {
  render() {
    const EduInfo = parseCategory(EDU_INFO);
    const DutyInfo = parseCategory(DUTY_INFO);
    const LisenceInfo = parseCategory(LISENCE_INFO);
    const CareerInfo = parseCategory(CAREER_INFO);

    return (
      <CurriculumWrap id="curriculum-vitae">
        <EduInfo />
        <DutyInfo />
        <LisenceInfo />
        <CareerInfo />
      </CurriculumWrap>
    );
  }
}

export default LandingPage;
