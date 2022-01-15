import { useState } from "react";
import SkillList from "./skills-compos";
import webImg from "./skills-compos/img/web.jpg";
import { SkillsOuterStyled } from "./css/skills";

export default function SkillOuter() {
  let [focusedBg, setFocusedBg] = useState(webImg);
  return (
    <SkillsOuterStyled backgroundImg={focusedBg}>
      <h1>Web Dev Skillset</h1>
      <SkillList setFocusedBg={setFocusedBg} />
    </SkillsOuterStyled>
  );
}
