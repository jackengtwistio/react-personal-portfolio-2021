import styled from "styled-components";

export const GridItem = styled.div`
  border-radius: 1em;
  padding: 0.5em;
  background-color: #e7eff9;
  background-image: linear-gradient(315deg, #e7eff9 0%, #cfd6e6 74%);
  /* align-items: left;
  justify-self: left; */
`;
export const GridPicItem = styled(GridItem)`
  cursor: pointer;
  min-width: 100%;
  min-height: 10em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: transform 250ms ease-in-out;
  background: url(${({ backgroundImg }) => backgroundImg}) no-repeat;
  background-size: cover;
  overflow: auto;
  &:hover {
    transform: scale(1.05);
    box-shadow: inset 0px 3px 5px rgba(255, 255, 255, 1),
      0px 0px 10px rgba(0, 0, 0, 0.25);
  }
`;

export const GridContainer = styled.div`
  background-color: #e7eff9;
  padding: 2em 3em;
  border-radius: 1em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  gap: 2em;
  box-shadow: 0 0 5px 10px rgb(0 0 0 / 0.2) inset;
`;

export const GridPics = styled(GridContainer)`
  gap: 2em;

  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
