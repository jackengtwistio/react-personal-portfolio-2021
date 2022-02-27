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
  const correspondedAcronym = {
    "Full-Stack-JS": "JS",
    Networking: "N",
    "Data Manipulation": "DM",
  };
  const correspondedImgs = {
    "Full-Stack-JS": reactjsImg,
    Networking: networkingImg,
    "Data Manipulation": dmImg,
  };
  function getTimeLasted() {
    let timeCalculated = {};
    for (let item in endTime) {
      timeCalculated[item] = endTime[item].getTime() - initTime[item].getTime();
      console.log(endTime);
    }
    setlastedTime({
      ...timeCalculated,
    });
  }
  function timeTaker(time, item, isFinished) {
    if (
      (!isFinished && initTime[item]) ||
      (isFinished && endTime[item]) ||
      item === undefined
    ) {
      return;
    }
    if (isFinished) {
      setEndTime({ ...endTime, [item]: time });
      return;
    }
    setInitTime({ ...initTime, [item]: time });
  }

  //filter out not first time clicking the same item
  const [certifClicked, setCertifClicked] = useState(false);
  const [userName, setUserName] = useState("");
  const [focusedBg, setFocusedBg] = useState(webImg);
  const [popupSkill, setPopupSkill] = useState("");
  const [checkedSkill, setCheckedSkill] = useState({});
  const [certifDeclared, setCertifDeclared] = useState(false);
  const [initTime, setInitTime] = useState({});
  const [endTime, setEndTime] = useState({});
  const [lastedTime, setlastedTime] = useState({});

  const value = {
    certifDeclared,
    setCertifDeclared,
    certifClicked,
    setCertifClicked,
    userName,
    setUserName,
    focusedBg,
    setFocusedBg,
    popupSkill,
    setPopupSkill,
    correspondedImgs,
    CorrespondedPages,
    correspondedAcronym,
    checkedSkill,
    setCheckedSkill,
    setInitTime,
    setEndTime,
    lastedTime,
    timeTaker,
    getTimeLasted,
  };
  return <Provider value={{ ...value }}>{props.children}</Provider>;
}
export { SkillCP, Consumer as SkillCC };
