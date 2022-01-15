import DM from "./details/DM";
import N from "./details/N";
import JS from "./details/JS";
import React from "react";

const { Provider, Consumer } = React.createContext();

function SkillCP(props) {
  const CorrespondedPages = {
    "Full-Stack-JS": JS,
    Networking: N,
    "Data Manipulation": DM,
  };
  return <Provider value={{ CorrespondedPages }}>{props.children}</Provider>;
}
export { SkillCP, Consumer as SkillCC };
