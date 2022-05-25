import styled from "styled-components";

export const GridStyled = styled.div`
  padding: 0.5em;
  border-radius: 1em;
  background-color: #e7eff9;
  background-image: linear-gradient(315deg, #e7eff9 0%, #cfd6e6 74%);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const GridPicStyled = styled(GridStyled)`
  min-height: 12em;
  overflow: hidden;
  background: url(${({ backgroundImg }) => backgroundImg}) no-repeat;
  background-size: cover;
  transition: transform 250ms ease-in-out;
  &:hover {
    border: 2px solid rgb(245, 245, 245, 0.3);
    border-radius: 25px;
    transform: scale(1.05);
    box-shadow: inset 0px 3px 5px rgba(255, 255, 255, 1),
      0px 0px 10px rgba(0, 0, 0, 0.25);
  }
`;

export const GridObjStyled = styled(GridStyled)`
  /* min-height: 20em; */
  background: url(${({ backgroundImg }) => backgroundImg}) no-repeat;
  background-size: cover;
  overflow: hidden;
  box-shadow: none;
`;

export const GridTextStyled = styled(GridStyled)``;

export const GridContainerStyled = styled.div`
  background-position: center;
  display: grid;
  background-color: #e7eff9;
  border-radius: 1em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 5em 3em;
  gap: 2em;
  background-color: #e7eff9;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const ObjContainerStyled = styled(GridContainerStyled)`
  padding: 2em 3em;
  grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
`;

export const TextContainerStyled = styled(GridContainerStyled)`
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
`;

export const PicContainerStyled = styled(GridContainerStyled)`
  padding: 2em 3em;
  background-color: transparent;
`;
