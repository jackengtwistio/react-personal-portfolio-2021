import { GridPicStyled, PicContainerStyled } from "../css/grid";
import PopupDetail from "./details";
import webImg from "./img/web.jpg";
import Progress from "./progress";
import { SkillCC } from "./context";

export default function SkillList() {
  function Skill({ e, skillTitle }) {
    return (
      <GridPicStyled
        onClick={() => {
          e.setPopupSkill(skillTitle);
          e.timeTaker(new Date(), e.correspondedAcronym[skillTitle], false);
        }}
        onMouseEnter={() => e.setFocusedBg(e.correspondedImgs[skillTitle])}
        onMouseLeave={() => e.setFocusedBg(webImg)}
        backgroundImg={e.correspondedImgs[skillTitle] || webImg}
      >
        <h2>{skillTitle}</h2>
      </GridPicStyled>
    );
  }
  return (
    <SkillCC>
      {(e) => (
        <PicContainerStyled>
          {Object.keys(e.correspondedImgs).map((skillTitle) => (
            <Skill key={skillTitle} e={e} skillTitle={skillTitle} />
          ))}
          {e.popupSkill && <PopupDetail e={{ ...e }} />}
          <Progress
            max={Object.keys(e.correspondedImgs).length}
            value={Object.keys(e.checkedSkill).length}
            certifDeclared={e.certifDeclared}
          />
        </PicContainerStyled>
      )}
    </SkillCC>
  );
}
