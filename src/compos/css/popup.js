import styled from "styled-components";
import { CloseButtonStyled } from "./closeButton";

export const PopupPageStyled = styled.div`
  a {
    color: silver;
    text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
  }
  color: white;
  position: fixed;
  z-index: 4;
  bottom: 10%;
  top: 10%;
  left: 10%;
  right: 10%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
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

  /* .modalbttn {
    background-color: #24252a;
    padding: 12px 25px;
    text-transform: uppercase;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    border-radius: 4px;
    &:hover {
      background-color: lighten(#24252a, 3%);
    }
  } */
`;
