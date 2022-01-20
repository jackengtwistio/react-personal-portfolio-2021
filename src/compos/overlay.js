import { OverlayStyled } from "./css/app";
import { SkillCC } from "./skillset/context";

export default function Overlay() {
  return (
    <SkillCC>
      {(e) =>
        (e.certifClicked || e.popupSkill !== "") && (
          <OverlayStyled
            onClick={() => {
              e.setCertifClicked(false);
              e.setPopupSkill("");
            }}
          />
        )
      }
    </SkillCC>
  );
}
