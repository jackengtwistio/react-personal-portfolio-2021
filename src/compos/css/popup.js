import styled from "styled-components";
import { CloseButtonStyled } from "./closeButton";

export const PopupPageStyled = styled.div`
  a {
    color: silver;
    text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
  }
  li {
    padding: 0.3em;
  }

  h4 {
    margin-bottom: -0.5em;
    padding-top: 2em;
    position: relative;
  }
  p {
    margin-bottom: -1.5em;
  }
  object {
    overflow: hidden;
  }
  overflow: auto;
  position: fixed;
  z-index: 4;
  bottom: 10%;
  top: 10%;
  left: 5%;
  right: 5%;
  padding: 1em;
  background-color: #e7eff9;
  border-radius: 1em;
  /* contain: content; */
`;

export const BigCloseButtonStyled = styled(CloseButtonStyled)`
  bottom: 10%;
  right: 10%;
  z-index: 5;
  position: fixed;
`;

export const QueryFormStyled = styled.div`
  position: fixed;
  z-index: 4;
  left: 30%;
  right: 30%;
  min-width: 400px;
  h2 {
    margin-top: 0px;
    color: #4d5c6e;
    font-weight: 400;
  }

  p {
    color: #72879e;
    line-height: 24px;
    text-shadow: 0 1px 0 rgba(255, 255, 255);
  }
  display: flex;

  button {
    display: inline-block;
    transition: all 200ms ease-in;
    cursor: pointer;
    background: #7f8ff4;
    color: #fff;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
    border-radius: 2em;
    padding: 12px 36px;
    margin-left: -96px;

    &:hover {
      background: darken(#7f8ff4, 4%);
    }

    &:active {
      background: #7f8ff4;
      box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.2);
    }
  }

  input {
    width: 360px;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
    border: 0;
    outline: 0;
    padding: 22px 18px;
  }
  .modal {
    position: relative;
    width: 100%;
    height: 330px;
    background-color: #fff;
    .content {
      padding: 30px;
    }
    .close {
      cursor: pointer;
      color: #fff;
      width: 50px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      position: absolute;
      right: 0;
      color: #999;
      font-size: 40px;
      span {
        transform: rotate(45deg);
        display: block;
      }
    }
    .toggle {
      width: 100%;
      position: absolute;
      bottom: 0;
      height: 50px;
      background-color: #fff;
      span {
        cursor: pointer;
        width: 50%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        float: left;
        background-color: #eee;
        color: "#4d5c6e";
        transition: 0.3s;
        text-transform: uppercase;
        font-weight: bold;
        &:hover {
          background-color: black;
        }
        &:nth-of-type(2) {
          float: right;
          color: #fff;
          background-color: #00c06d;
          &:hover {
            background-color: #00c06d;
          }
        }
      }
    }
  }
`;

export const TitleStyled = styled.div`
  margin: auto;
  padding: 0;
  box-sizing: border-box;
  font-family: "Righteous", cursive;
  justify-content: center;
  align-items: center;
  h1 {
    width: 300px;
    padding: 20px 30px;
    position: relative;
    justify-content: center;
    align-items: center;
    display: block;
    overflow: hidden;
    text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
      0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
      0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
      0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
      0 20px 20px rgba(0, 0, 0, 0.15);
    &:hover {
      div {
        top: -120px;
      }
    }

    span {
      position: relative;
      z-index: 1;
      font-size: 40px;
      letter-spacing: 8px;
    }

    div {
      width: 400px;
      height: 300px;
      background-color: #006994;
      box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
      position: absolute;
      left: 0;
      top: -80px;
      transition: 0.4s;

      &::before,
      &::after {
        width: 200%;
        height: 200%;
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -75%);
      }

      &::before {
        border-radius: 45%;
        background-color: #e7eff9;
        animation: wave 5s linear infinite;
      }

      &::after {
        border-radius: 40%;
        background-color: #e7eff9;
        animation: wave 10s linear infinite;
      }
    }
  }

  @keyframes wave {
    0% {
      transform: translate(-50%, -75%) rotate(0deg);
    }

    100% {
      transform: translate(-50%, -75%) rotate(360deg);
    }
  }
`;

export const BubbleStyled = styled.div`
  position: fixed;
  margin-left: -3em;
  z-index: 2;
  font-family: sans-serif;
  font-size: 18px;
  line-height: 24px;
  max-width: 20em;
  background: #fff;
  border-radius: 40px;
  padding: 24px;
  text-align: center;
  color: #000;

  &:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 24px solid #fff;
    border-right: 12px solid transparent;
    border-top: 12px solid #fff;
    border-bottom: 20px solid transparent;
    left: 32px;
    bottom: -24px;
  }
`;
