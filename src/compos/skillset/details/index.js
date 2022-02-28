import { useEffect } from "react";
import { BigCloseButtonStyled } from "../../css/popup";
export default function PopupDetail({ e }) {
  const SelectedItem = e.CorrespondedPages[e.popupSkill];

  useEffect(() => {
    e.setCheckedSkill((prev) => ({
      ...prev,
      [e.popupSkill]: "checked",
    }));
    return () => {};
  }, [e.popupSkill]);
  console.log(e.correspondedAcronym);
  if (SelectedItem) {
    return (
      <>
        <SelectedItem>
          <BigCloseButtonStyled
            onClick={() => {
              e.timeTaker(new Date(), e.popupSkill, true);
              e.setPopupSkill("");
            }}
          />
        </SelectedItem>
      </>
    );
  }
  return <></>;
}
