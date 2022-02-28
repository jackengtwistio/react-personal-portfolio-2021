import SkillList from "./skillList";
import { SkillCP, SkillCC } from "./context";
import Overlay from "../overlay";
import styled from "styled-components";

const SkillsOuterStyled = styled.section`
  background-position: center;
  padding: 0.5em;
  background: url(${({ backgroundImg }) => backgroundImg}) top right;
  background-size: cover;
  h2,
  h1 {
    text-shadow: -1px -1px 0 #e7eff9, 1px -1px 0 #e7eff9, -1px 1px 0 #e7eff9,
      1px 1px 0 #e7eff9;
  }
`;
export default function SkillOuter() {
  return (
    <SkillCP>
      <SkillCC>
        {(e) => (
          <SkillsOuterStyled backgroundImg={e.focusedBg}>
            <h1>Web Dev Skillset</h1>
            <Overlay />
            <SkillList />
          </SkillsOuterStyled>
        )}
      </SkillCC>
    </SkillCP>
  );
}
