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
              e.timeTaker(
                new Date(),
                e.correspondedAcronym[e.popupSkill],
                true
              );
              e.setPopupSkill("");
            }}
          />
        )
      }
    </SkillCC>
  );
}
