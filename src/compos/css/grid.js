import styled from "styled-components";
import webImg from "../img/web.jpg";
export const GridPicItem = styled.div`
  cursor: pointer;
  width: 100%;
  min-height: 350px;
  transition: transform 250ms ease-in-out;
  background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
    url(${({ backgroundImg }) => backgroundImg || webImg}) no-repeat;
  background-size: cover;
  &:hover {
    transform: scale(1.1);
  }
`;

export const GridPics = styled.div`
  padding: 5em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 1em;
`;
