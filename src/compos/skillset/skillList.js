import { SkillStyled, SkillListStyled } from "../css/skills";
import Popup from "./details";
import webImg from "./img/web.jpg";
import Progress from "./progress";
import { SkillCC } from "./context";
import { AfterCertifCC } from "../../afterCertifContext";

export default function SkillList() {
  return (
    <SkillCC>
      {({ setFocusedBg, correspondedImgs, setPopupItem, checkedSkill }) => (
        <SkillListStyled>
          {Object.keys(correspondedImgs).map((e, i) => (
            <SkillStyled
              key={i}
              onClick={() => setPopupItem(e)}
              onMouseEnter={() => setFocusedBg(correspondedImgs[e])}
              onMouseLeave={() => setFocusedBg(webImg)}
              backgroundImg={correspondedImgs[e] || webImg}
            >
              <h2>{e}</h2>
            </SkillStyled>
          ))}
          <Popup />
          <AfterCertifCC>
            {({ certifDeclared, setCertifDeclared }) => (
              <Progress
                max={Object.keys(correspondedImgs).length}
                value={Object.keys(checkedSkill).length}
                certifDeclared={certifDeclared}
                setCertifDeclared={setCertifDeclared}
              />
            )}
          </AfterCertifCC>
        </SkillListStyled>
      )}
    </SkillCC>
  );
}
