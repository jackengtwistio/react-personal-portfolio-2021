import { useState } from "react";
import { ProgressStyled } from "../css/progress.js";

export default function Progress({ skills }) {
  console.log(skills);
  // skills.forEach((e)=>{
  //   const []
  // })
  return (
    <ProgressStyled>
      <label for="file">File progress:</label>
      <progress id="file" max="100" value="1"></progress>
    </ProgressStyled>
  );
}
