import { SkillCC } from "../context";
import { CloseButtonStyled } from "../../css/popup";
export default function Popup() {
  return (
    <SkillCC>
      {(e) => {
        const SelectedItem = e.CorrespondedPages[e.popupSkill];
        if (SelectedItem) {
          return (
            <SelectedItem setCheckedSkill={e.setCheckedSkill}>
              <CloseButtonStyled
                onClick={() => {
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
