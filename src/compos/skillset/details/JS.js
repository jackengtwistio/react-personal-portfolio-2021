import { useEffect } from "react";
import pic from "../cert/py-class-inheritance.png";
import { GridPicItem, GridPics } from "../../css/grid";
import { PopupPageStyled } from "../../css/popup";

export default function DM({ setCheckedSkill, children }) {
  useEffect(() => {
    setCheckedSkill((prev) => ({ ...prev, JS: "JS" }));
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
            <GridPicItem backgroundImg={pic} />
            <GridPicItem backgroundImg={pic} />
            <GridPicItem backgroundImg={pic} />
            <GridPicItem backgroundImg={pic} />
            <GridPicItem backgroundImg={pic} />
            <GridPicItem backgroundImg={pic} />
            <GridPicItem backgroundImg={pic} />
            <GridPicItem backgroundImg={pic} />
            <GridPicItem backgroundImg={pic} />
            <GridPicItem backgroundImg={pic} />
            <GridPicItem backgroundImg={pic} />
            <GridPicItem backgroundImg={pic} />
            <GridPicItem backgroundImg={pic} />
            <GridPicItem backgroundImg={pic} />
            <GridPicItem backgroundImg={pic} />
          </GridPics>
        </fieldset>
      </div>
    </PopupPageStyled>
  );
}
