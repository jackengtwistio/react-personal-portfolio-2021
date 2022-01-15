import styled from "styled-components";

export const ProgressStyled = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  border-radius: 3em;
  color: black;
  z-index: 1;
  padding: 0.5em;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  progress {
    background-color: blue;
    margin-left: 0.5em;
    transition: width 500ms ease-in-out;
  }
`;
