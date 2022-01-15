import SkillList from "./skillList";
import { SkillsOuterStyled } from "../css/skills";
import { SkillCP, SkillCC } from "./context";

export default function SkillOuter() {
  return (
    <SkillCP>
      <SkillCC>
        {({ focusedBg }) => (
          <SkillsOuterStyled backgroundImg={focusedBg}>
            <h1>Web Dev Skillset</h1>
            <SkillList />
          </SkillsOuterStyled>
        )}
      </SkillCC>
    </SkillCP>
  );
}
