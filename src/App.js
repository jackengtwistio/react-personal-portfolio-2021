import { useState } from "react";
import "./App.css";
import Info from "./compos/info";
import Skills from "./compos/skills";
import Jobs from "./compos/jobs";
import HowDid from "./compos/howdid";
import { Progress } from "./compos/progress";

function App() {
  const [proCount, setProCount] = useState(0);
  const [check, setCheck] = useState(false);
  return (
    <>
      <Info />
      <Skills setCheck={() => setCheck((e) => !e)} />
      <Jobs />
      <HowDid />
      <Progress check={check} />
    </>
  );
}

export default App;
