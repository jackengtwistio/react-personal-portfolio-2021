import { useState } from "react";
import { SkillsOuterStyled, SkillStyled, SkillListStyled } from "./css/skills";
import webImg from "./img/web.jpg";
import reactjsImg from "./img/reactjs.png";
import nodejsImg from "./img/nodejs.png";
import dbImg from "./img/db.jpg";
import dmImg from "./img/dm.jpg";
import networkingImg from "./img/networking.jpg";
import { Popups } from "./popups";

const correspondedImgs = {
  "React.js": reactjsImg,
  "Node.js": nodejsImg,
  DB: dbImg,
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

export default function Skills({ setCheck }) {
  let [focusedBackground, setFocusedBackground] = useState(webImg);
  let [popupItem, setPopupItem] = useState("");

  console.log(popupItem);
  const skillLists = [
    "React.js",
    "Node.js",
    "DB",
    "Networking",
    "Data Manipulation",
  ];
  const skillsElements = skillLists.map((e, i) => (
    <Skill
      key={i}
      setPopupItem={() => {
        setPopupItem((p) => e);
      }}
      backgroundSync={() => setFocusedBackground((prev) => correspondedImgs[e])}
      defaultBack={() => setFocusedBackground(webImg)}
      title={e}
    />
  ));
  return (
    <SkillsOuterStyled backgroundImg={focusedBackground}>
      <h1>Web Dev Skillset</h1>
      <SkillListStyled>{skillsElements}</SkillListStyled>
      <Popups
        cancelPopup={() => setPopupItem((e) => "")}
        popupItem={popupItem}
        setCheck={setCheck}
      />
    </SkillsOuterStyled>
  );
}
