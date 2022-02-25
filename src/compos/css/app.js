import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
0%{
  opacity:0;
}
100%{
  opacity:1;
}
`;

export const AppStyled = styled.div`
  color: ${({ certifDeclared }) =>
    certifDeclared ? "rgba(255, 215, 0)" : null};
`;
export const OverlayStyled = styled.div`
  animation: 1.5s ${fadeIn} ease-in;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;
