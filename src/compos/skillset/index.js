import SkillList from "./skillList";
import { SkillsOuterStyled } from "../css/skills";
import { SkillCP, SkillCC } from "./context";
import Overlay from "../overlay";
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
