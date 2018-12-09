import React, { Component } from "react";
import styled from "styled-components";

import {
  edu_info,
  duty_info,
  academy_info,
  career_info,
  lisence_info
} from "../data/curriculum";

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

          @media (max-width: 1024px) {
            display: block;
            margin-left: 0;
            margin-top: 6px;
          }
        }

        @media (max-width: 768px) {
          width: 100%;
          margin-bottom: -1px;
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

        @media (max-width: 768px) {
          float: unset;
          display: block;
          width: 100%;
          font-size: 10px;
          padding-top: 4px;
          padding-bottom: 2px;
        }

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

            @media (max-width: 768px) {
              float: unset;
              width: auto;
            }

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

              @media (max-width: 768px) {
                width: auto;
              }

              &:before {
                display: none;
              }
            }

            @media (max-width: 768px) {
              width: auto;
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
                    <li key={project.title}>
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
    const EduInfo = parseCategory(edu_info);
    const DutyInfo = parseCategory(duty_info);
    const AcademyInfo = parseCategory(academy_info);
    const CareerInfo = parseCategory(career_info);
    const LisenceInfo = parseCategory(lisence_info);

    return (
      <CurriculumWrap id="curriculum-vitae">
        <EduInfo />
        <DutyInfo />
        <AcademyInfo />
        <CareerInfo />
        <LisenceInfo />
      </CurriculumWrap>
    );
  }
}

export default LandingPage;
