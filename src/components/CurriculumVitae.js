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
          background-color: #cccccc;
          color: #ffffff;
        }
      }

      div.time-wrap {
        background-color: #cccccc;
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

      & + li.content-item {
        margin-top: 12px;
        padding-top: 12px;
        border-top: 1px solid #cccccc;
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
      desc: "Java 7, Spring Framework, Oracle, jQuery, 시스템 통합 프로젝트",
      from: "2013년 01월 01일",
      to: "2013년 12월 28일"
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
