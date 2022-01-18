import styled from "styled-components";

export const CloseButtonStyled = styled.button`
  border-radius: 50%;
  margin: 1em;
  padding: 0.5em;
  width: 30px;
  height: 30px;
  border: 2px solid blue;
  color: blue;
  position: relative;
  cursor: pointer;
  &::before {
    content: " ";
    position: absolute;
    display: block;
    background-color: blue;
    width: 2px;
    left: 12px;
    top: 5px;
    bottom: 5px;
    transform: ${(e) => (e.close ? "rotate(180deg)" : "rotate(45deg)")};
  }
  &::after {
    content: " ";
    position: absolute;
    display: block;
    background-color: blue;
    height: 2px;
    top: 12px;
    left: 5px;
    right: 5px;
    transform: ${(e) => (e.close ? "rotate(180deg)" : "rotate(45deg)")};
  }
`;
