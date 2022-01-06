import styled from "styled-components";
import { GridPicItem, GridPics } from "./grid";

export const SkillsOuterStyled = styled.section`
  color: rgb(216, 204, 189);
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${({ backgroundImg }) => backgroundImg});

  background-size: cover;
  &:after {
    content: " 🦄";
  }
`;

export const SkillListStyled = styled(GridPics)`
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 4em;
  padding: 4em;
`;

export const SkillStyled = styled(GridPicItem)``;
