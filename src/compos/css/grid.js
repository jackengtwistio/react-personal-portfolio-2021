import styled from "styled-components";

export const GridItem = styled.div`
  /* background-color: rgba(185, 46, 46, 0.8); */
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-radius: 1em;
  align-items: center;
  justify-self: center;
  resize: both;
  &:hover {
    transform: scale(1.05);
    box-shadow: inset 0px 3px 5px rgba(255, 255, 255, 1),
      0px 0px 10px rgba(0, 0, 0, 0.25);
  }
`;
export const GridPicItem = styled(GridItem)`
  cursor: pointer;
  min-width: 100%;
  min-height: 15em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: transform 250ms ease-in-out;
  background: url(${({ backgroundImg }) => backgroundImg}) no-repeat;
  background-size: cover;
  overflow: auto;
`;

export const GridContainer = styled.div`
  padding: 0.5em 3em;
  border-radius: 1em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 1em;
`;

export const GridPics = styled(GridContainer)`
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
