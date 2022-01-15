import { SkillCC } from "../context";
export default function Popup({ popupItem, setCheck, cancelPopup }) {
  return (
    <SkillCC>
      {({ CorrespondedPages }) => {
        const SelectedItem = CorrespondedPages[popupItem];
        if (SelectedItem) {
          return <SelectedItem />;
        }
        return <></>;
      }}
    </SkillCC>
  );
}
