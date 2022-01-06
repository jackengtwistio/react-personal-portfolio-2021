import { ProgressStyled } from "./css/progress.js";

export function Progress({ check }) {
  return (
    <ProgressStyled>
      <label for="file">File progress:</label>
      <progress id="file" max="100" value={check ? "100" : "10"}></progress>
    </ProgressStyled>
  );
}
