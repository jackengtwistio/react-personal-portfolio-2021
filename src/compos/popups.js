import DM from "./skills-detail/DM";

export function Popups({ popupItem, setCheck, cancelPopup }) {
  if (popupItem === "Data Manipulation") {
    return <DM setCheck={setCheck} cancelPopup={cancelPopup} />;
  } else {
    return <></>;
  }
}
