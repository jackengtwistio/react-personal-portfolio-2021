import styled from "styled-components";

export const ProgressStyled = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  border-radius: 2em;
  z-index: 5;
  progress {
    background-color: blue;
    transition: width 500ms ease-in-out;
    margin: 0.2em;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
    margin: auto;
  }
`;
