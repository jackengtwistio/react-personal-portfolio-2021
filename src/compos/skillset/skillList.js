import { SkillStyled, SkillListStyled } from "../css/skills";
import Popup from "./details";
import webImg from "./img/web.jpg";
import Progress from "./progress";
import { SkillCC } from "./context";
import { Consumer } from "../../Context";

export default function SkillList() {
  return (
    <SkillCC>
      {({ setFocusedBg, correspondedImgs, setPopupItem, checkedSkill }) => (
        <SkillListStyled>
          {Object.keys(correspondedImgs).map((e, i) => (
            <Consumer>
              {(prop) => (
                <SkillStyled
                  key={i}
                  onClick={() => {
                    setPopupItem(e);
                    prop.setWindowPopingup(true);
                  }}
                  onMouseEnter={() => setFocusedBg(correspondedImgs[e])}
                  onMouseLeave={() => setFocusedBg(webImg)}
                  backgroundImg={correspondedImgs[e] || webImg}
                >
                  <h2>{e}</h2>
                </SkillStyled>
              )}
            </Consumer>
          ))}
          <Popup />
          <Progress
            max={Object.keys(correspondedImgs).length}
            value={Object.keys(checkedSkill).length}
          />
        </SkillListStyled>
      )}
    </SkillCC>
  );
}
