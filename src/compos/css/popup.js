import styled from "styled-components";
import { GridPics } from "./grid";

export const PopupPageStyled = styled.div`
  z-index: 1;
  position: fixed;
  bottom: 10%;
  top: 10%;
  left: 10%;
  right: 10%;
  overflow: auto;
  /* contain: content; */
`;

export const CloseButtonStyled = styled.button`
  top: 50%;
  right: 2.5%;
  /* margin-right: */
  max-width: 5em;
  z-index: 1;
  position: fixed;
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 2%;

  cursor: pointer;

  &:hover {
    background-color: RoyalBlue;
  }
`;
