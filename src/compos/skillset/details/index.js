import { SkillCC } from "../context";
import { CloseButtonStyled } from "../../css/popup";

function CloseButton({ onClick }) {
  return <CloseButtonStyled onClick={onClick}>x</CloseButtonStyled>;
}

export default function Popup() {
  return (
    <SkillCC>
      {({ CorrespondedPages, setPopupItem, popupItem, setCheckedSkill }) => {
        const SelectedItem = CorrespondedPages[popupItem];
        if (SelectedItem) {
          return (
            <>
              <SelectedItem setCheckedSkill={setCheckedSkill}>
                <CloseButton
                  onClick={() => {
                    setPopupItem("");
                  }}
                />
              </SelectedItem>
            </>
          );
        }
        return <></>;
      }}
    </SkillCC>
  );
}
