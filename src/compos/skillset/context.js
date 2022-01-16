import React, { useState } from "react";

import DM from "./details/DM";
import N from "./details/N";
import JS from "./details/JS";
import webImg from "./img/web.jpg";
import reactjsImg from "./img/reactjs.png";
import dmImg from "./img/dm.jpg";
import networkingImg from "./img/networking.jpg";

const { Provider, Consumer } = React.createContext();

function SkillCP(props) {
  const CorrespondedPages = {
    "Full-Stack-JS": JS,
    Networking: N,
    "Data Manipulation": DM,
  };
  const correspondedImgs = {
    "Full-Stack-JS": reactjsImg,
    Networking: networkingImg,
    "Data Manipulation": dmImg,
  };
  const [focusedBg, setFocusedBg] = useState(webImg);
  const [popupItem, setPopupItem] = useState("");
  const [checkedSkill, setCheckedSkill] = useState({});
  const value = {
    focusedBg,
    setFocusedBg,
    popupItem,
    setPopupItem,
    correspondedImgs,
    CorrespondedPages,
    checkedSkill,
    setCheckedSkill,
  };
  return <Provider value={{ ...value }}>{props.children}</Provider>;
}
export { SkillCP, Consumer as SkillCC };
