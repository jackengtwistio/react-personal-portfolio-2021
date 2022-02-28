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
  box-shadow: 0 4px 8px 0
      ${({ certifDeclared }) =>
        certifDeclared ? "rgba(255, 215, 0.2)" : "rgba(0, 0, 0, 0.2)"},
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
export const OverlayStyled = styled.div`
  animation: 0.5s ${fadeIn} ease-in;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;
