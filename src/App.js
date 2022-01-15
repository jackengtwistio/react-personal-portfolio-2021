import React from "react";
import "./App.css";
import Info from "./compos/info";
import SkillOuter from "./compos/skillset/";
import Jobs from "./compos/jobs";
import HowDid from "./compos/howdid";

function App() {
  return (
    <>
      <Info />
      <SkillOuter />
      <Jobs />
      <HowDid />
    </>
  );
}

export default App;
