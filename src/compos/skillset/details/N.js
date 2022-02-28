import { useEffect } from "react";

import { GridPicItem, GridPics } from "../../css/grid";
import { PopupPageStyled } from "../../css/popup";

export default function DM({ setCheckedSkill, children }) {
  useEffect(() => {
    setCheckedSkill((prev) => ({ ...prev, N: "N" }));
    return () => {};
  }, []);
  return (
    <PopupPageStyled>
      {children}
      <div>
        <h3>python</h3>
        <fieldset>
          <legend>Coursera Certificates and Projects</legend>
          <GridPics>
            <GridPicItem backgroundImg={""} />
            <GridPicItem backgroundImg={""} />
          </GridPics>
        </fieldset>
      </div>
    </PopupPageStyled>
  );
}
