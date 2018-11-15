import React, { Component, Fragment } from "react";
import styled, { keyframes } from "styled-components";

const FooterWrap = styled.footer`
  color: #ffffff;
  background-color: #000000;
  overflow: hidden;
`;

const FooterContent = styled.div`
  max-width: ${props => props.maxWidth};
  padding-top: 32px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 32px;
`;

const Belonging = styled.div`
  text-align: center;
  font-size: 12px;
  padding-top: 24px;
`;

const ContactList = styled.ul`
  text-align: center;
`;

const ContactHeader = styled.li`
  display: inline-block;
  font-family: "Ubuntu Mono", monospace;
  padding-right: 12px;
  border-right: 1px solid #ffffff;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to{
    opacity: 1;
  }
`;

const ListItemWithTooltip = styled.li`
  width: 40px;
  display: inline-block;
  overflow: visible;
  position: relative;

  &:hover {
    div.tooltip-position {
      display: block;
      animation: ${fadeIn} 0.3s ease;
    }
  }

  > i {
    display: block;
    font-size: 22px;
    line-height: 28px;
    text-align: center;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    color: inherit;
    background-color: transparent;
    border: 0;
    padding: 0;
    outline: none;
    cursor: pointer;
  }

  div.tooltip-position {
    display: none;
    position: absolute;
    width: 240px;
    height: 30px;
    left: calc(50% - 120px);
    top: -30px;
    font-size: 13px;
    font-family: "Ubuntu Mono", monospace;

    div {
      background-color: #ffffff;
      color: #000000;
      padding: 6px 0;
      border-radius: 4px;

      &:before,
      &:after {
        content: "";
        position: absolute;
        width: 6px;
        height: 6px;
        top: calc(100% - 5px);
        box-sizing: border-box;
        border-top: 3px solid #ffffff;
        border-bottom: 3px solid transparent;
        border-left: 3px solid transparent;
        border-right: 3px solid transparent;
      }

      &:before {
        left: calc(50% - 6px);
        border-right-color: #ffffff;
      }

      &:after {
        left: 50%;
        border-left-color: #ffffff;
      }

      input {
        padding: 0;
        margin: 0;
        border: 0;
        width: 100px;
        font-size: 13px;
        font-family: "Ubuntu Mono", monospace;
        cursor: pointer;

        ::selection {
          color: inherit;
          background-color: inherit;
        }
      }

      > i.far.fa-copy {
        margin-left: 0.5em;
        transition: color 0.5s ease;

        &.just-copied {
          transition: color 0.15s ease;
          color: #4dd0e1;

          & + span {
            opacity: 1;
            transition: opacity 0.15s ease;
          }
        }

        & + span {
          font-family: "Nanum Gothic Coding", monospace;
          margin-left: 0.5em;
          font-size: 13px;
          color: #4dd0e1;
          display: inline-block;
          width: 0;
          overflow: visibie;
          white-space: nowrap;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
      }
    }
  }
`;

const TooltipHolder = ({ className, value, alt, copy }) => {
  const copy_id = copy ? className.replace(/[ -]/g, "_") : "";

  const Wrapper = copy
    ? ({ children }) => (
        <button
          onClick={() => {
            const hidden_input = document.getElementById(copy_id);
            if (hidden_input && typeof hidden_input.select === "function") {
              hidden_input.select();
              document.execCommand("copy");
              document
                .getElementById(`fa_${copy_id}`)
                .classList.add("just-copied");
              window.setTimeout(
                () =>
                  document
                    .getElementById(`fa_${copy_id}`)
                    .classList.remove("just-copied"),
                600
              );
            }
          }}
        >
          {children}
        </button>
      )
    : value
      ? ({ children }) => (
          <a href={value} rel="noopener noreferrer" target="_blank">
            {children}
          </a>
        )
      : Fragment;

  return (
    <ListItemWithTooltip>
      <Wrapper>
        <i className={className} />
        <div className="tooltip-position">
          <div>
            {copy ? (
              <input type="text" value={alt || value} id={copy_id} readOnly />
            ) : (
              alt || value
            )}
            {copy && <i id={`fa_${copy_id}`} className="far fa-copy" />}
            {copy && <span>복사됨</span>}
          </div>
        </div>
      </Wrapper>
    </ListItemWithTooltip>
  );
};

class Footer extends Component {
  render() {
    return (
      <FooterWrap>
        <FooterContent maxWidth={this.props.maxWidth}>
          <ContactList>
            <ContactHeader>CONTACT ME</ContactHeader>
            <TooltipHolder
              className="fas fa-phone"
              copy
              alt="+8210-4102-9272"
            />
            <TooltipHolder
              className="far fa-envelope"
              value="mailto:exilee20c@gmail.com"
              alt="exilee20c@gmail.com"
            />
            <TooltipHolder
              className="fab fa-github"
              value="https://github.com/exilee20c"
              alt="exilee20c (Inhyuk Park)"
            />
            <TooltipHolder
              className="fab fa-npm"
              value="https://www.npmjs.com/~exilee20c"
            />
            <TooltipHolder
              className="fab fa-instagram"
              value="https://www.instagram.com/exilee20c"
              alt="@exilee20c • Instagram"
            />
            <TooltipHolder
              className="fab fa-google-plus"
              value="https://plus.google.com/108896043419447344345"
              alt="exilee20c - Google+"
            />
          </ContactList>

          <Belonging>
            이 GitHub Page는 프론트엔드 개발자 박인혁(exilee20c@gmail.com)에
            대한 정보를 담고 있습니다.
          </Belonging>
        </FooterContent>
      </FooterWrap>
    );
  }
}

export default Footer;
