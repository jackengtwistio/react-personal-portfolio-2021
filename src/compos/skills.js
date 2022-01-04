import { useState } from "react";
import Python from "./skill-detail/python";

function Skill(props) {
  const [popup, setPopup] = useState(false);
  return (
    <h1
      style={{
        margin: 0,
        padding: 0,
      }}
      className="grid-item"
      onClick={() => setPopup(!popup)}
      href="#"
    >
      <div className="skill grid-item">
        {props.name}

        <Python popup={popup} />
      </div>
    </h1>
  );
}

export default function Skills() {
  const skillLists = [
    "React.js",
    "Node.js",
    "DB",
    "Networking",
    "Data Manipulation",
  ];
  const skillsElement = skillLists.map((e) => <Skill name={e} />);
  return (
    <div className="grid-skills-outer">
      <h1>Web Dev Skillset</h1>
      <fieldset>
        <legend style={{ color: "white" }}>click to view details</legend>
        <div className="grid-skills">{skillsElement}</div>
      </fieldset>
    </div>
  );
}
