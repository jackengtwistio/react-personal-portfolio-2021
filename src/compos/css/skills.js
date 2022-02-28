import styled from "styled-components";
import { GridPicItem, GridPics } from "./grid";

export const SkillsOuterStyled = styled.section`
  padding: 0.5em;
  background: linear-gradient(rgba(20, 20, 20, 0.4), rgba(20, 20, 20, 0.4)),
    url(${({ backgroundImg }) => backgroundImg}) top right;
  background-size: cover;
  h2,
  h1 {
    text-shadow: -1px -1px 0 #e7eff9, 1px -1px 0 #e7eff9, -1px 1px 0 #e7eff9,
      1px 1px 0 #e7eff9;
  }
`;

export const SkillListStyled = styled(GridPics)`
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  background-color: transparent;
`;

export const SkillStyled = styled(GridPicItem)`
  &:hover {
    border: 2px solid rgb(245, 245, 245, 0.3);
    border-radius: 25px;
  }
`;
