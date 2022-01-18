import styled from "styled-components";

export const AppStyled = styled.div`
  color: ${({ certifDeclared }) =>
    certifDeclared ? "rgba(255, 215, 0)" : null};
  .overlay {
    background-color: rgba(0, 0, 0, 0.9);
    position: fixed;
    z-index: 3;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;
