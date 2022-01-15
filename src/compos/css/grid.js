import styled from "styled-components";
export const GridPicItem = styled.div`
  align-self: center;
  justify-self: center;
  cursor: pointer;
  width: 100%;
  min-height: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: transform 250ms ease-in-out;
  background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
    url(${({ backgroundImg }) => backgroundImg}) no-repeat;
  background-size: cover;
  &:hover {
    transform: scale(1.05);
  }
  resize: both;
  overflow: auto;
`;

export const GridPics = styled.div`
  padding: 0.5em 3em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1em;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
