import React from "react";
import "./App.css";
import Info from "./compos/info";
import SkillOuter from "./compos/skillset/";
import Jobs from "./compos/jobs";
import HowDid from "./compos/howdid";
import { AfterCertifCP, AfterCertifCC } from "./afterCertifContext";

function App() {
  return (
    <AfterCertifCP>
      <AfterCertifCC>
        {({ certifDeclared }) => (
          <div style={certifDeclared ? { color: "rgba(255, 215, 0)" } : null}>
            <Info />
            <SkillOuter />
            <Jobs />
            <HowDid />
          </div>
        )}
      </AfterCertifCC>
    </AfterCertifCP>
  );
}

export default App;
