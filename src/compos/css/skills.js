import styled from "styled-components";
import { GridPicItem, GridPics } from "./grid";

export const SkillsOuterStyled = styled.section`
  padding: 0.5em;
  background: linear-gradient(rgba(20, 20, 20, 0.4), rgba(20, 20, 20, 0.4)),
    url(${({ backgroundImg }) => backgroundImg}) top right;
  background-size: cover;
  h2 {
    text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white,
      1px 1px 0 white;
  }
  &:after {
    content: "<h1>Dev</h1>";
  }
`;

export const SkillListStyled = styled(GridPics)`
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 4em;
`;

export const SkillStyled = styled(GridPicItem)`
  &:hover {
    border: 2px solid rgb(245, 245, 245, 0.3);
    border-radius: 25px;
  }
`;
