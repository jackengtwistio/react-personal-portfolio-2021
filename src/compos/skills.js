import { useState } from "react";
import { SkillsOuterStyled, SkillStyled, SkillListStyled } from "./css/skills";
import webImg from "./img/web.jpg";
import reactjsImg from "./img/reactjs.png";
import nodejsImg from "./img/nodejs.png";
import dbImg from "./img/db.jpg";
import dmImg from "./img/dm.jpg";
import networkingImg from "./img/networking.jpg";

const correspondedImgs = {
  "React.js": reactjsImg,
  "Node.js": nodejsImg,
  DB: dbImg,
  Networking: networkingImg,
  "Data Manipulation": dmImg,
};

function Skill(props) {
  let { title, backgroundSync, defaultBack } = props;
  return (
    <SkillStyled
      onMouseEnter={() => backgroundSync(correspondedImgs[title])}
      onMouseLeave={defaultBack}
      backgroundImg={correspondedImgs[title] || webImg}
    >
      <h2>{title}</h2>
    </SkillStyled>
  );
}

export default function Skills() {
  let [focusedBackground, setFocusedBackground] = useState(webImg);

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
      backgroundSync={(e) => setFocusedBackground(e)}
      defaultBack={() => setFocusedBackground(webImg)}
      title={e}
    />
  ));
  console.log(focusedBackground);
  return (
    <SkillsOuterStyled backgroundImg={focusedBackground}>
      <h1>Web Dev Skillset</h1>
      <SkillListStyled>{skillsElements}</SkillListStyled>
    </SkillsOuterStyled>
  );
}
