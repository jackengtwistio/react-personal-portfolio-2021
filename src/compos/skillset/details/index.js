import { SkillCC } from "../context";
import { CloseButtonStyled } from "../../css/popup";
import { Consumer } from "../../../Context";
export default function Popup() {
  return (
    <SkillCC>
      {(e) => {
        const SelectedItem = e.CorrespondedPages[e.popupItem];
        if (SelectedItem) {
          return (
            <SelectedItem setCheckedSkill={e.setCheckedSkill}>
              <Consumer>
                {(props) => (
                  <CloseButtonStyled
                    onClick={() => {
                      e.setPopupItem("");
                      props.setWindowPopingup(false);
                    }}
                  />
                )}
              </Consumer>
            </SelectedItem>
          );
        }
        return <></>;
      }}
    </SkillCC>
  );
}
