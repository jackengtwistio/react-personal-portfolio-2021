import { useState } from "react";
import { SkillStyled, SkillListStyled } from "../css/skills";
import Popup from "./details/";
import webImg from "./img/web.jpg";
import reactjsImg from "./img/reactjs.png";
import dmImg from "./img/dm.jpg";
import networkingImg from "./img/networking.jpg";
import Progress from "./progress";
import { SkillCP } from "./context";

const correspondedImgs = {
  "Full-Stack-JS": reactjsImg,
  Networking: networkingImg,
  "Data Manipulation": dmImg,
};

function Skill(props) {
  let { title, backgroundSync, defaultBack, setPopupItem } = props;
  return (
    <SkillStyled
      onClick={setPopupItem}
      onMouseEnter={backgroundSync}
      onMouseLeave={defaultBack}
      backgroundImg={correspondedImgs[title] || webImg}
    >
      <h2>{title}</h2>
    </SkillStyled>
  );
}

export default function SkillList({ setFocusedBg }) {
  let [popupItem, setPopupItem] = useState("");

  const skillsElements = Object.keys(correspondedImgs).map((e, i) => (
    <Skill
      key={i}
      setPopupItem={() => {
        setPopupItem(e);
        console.log(e);
      }}
      backgroundSync={() => setFocusedBg(correspondedImgs[e])}
      defaultBack={() => setFocusedBg(webImg)}
      title={e}
    />
  ));
  return (
    <SkillCP>
      <SkillListStyled>
        {skillsElements}
        <Popup popupItem={popupItem} />
        <Progress skills={Object.keys(correspondedImgs)} />
      </SkillListStyled>
    </SkillCP>
  );
}
