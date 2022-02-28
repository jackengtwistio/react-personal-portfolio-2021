import { SkillCC } from "../context";
import { BigCloseButtonStyled } from "../../css/popup";
export default function Popup() {
  return (
    <SkillCC>
      {(e) => {
        const SelectedItem = e.CorrespondedPages[e.popupSkill];
        if (SelectedItem) {
          return (
            <SelectedItem setCheckedSkill={e.setCheckedSkill}>
              <BigCloseButtonStyled
                onClick={() => {
                  e.timeTaker(new Date(), e.popupSkill, true);
                  e.setPopupSkill("");
                }}
              />
            </SelectedItem>
          );
        }
        return <></>;
      }}
    </SkillCC>
  );
}
