import pic from "./img/py-class-inheritance.png";
import { GridPicItem, GridPics } from "../css/grid";
import { PopupPageStyled } from "../css/popup";

export function Py({ setCheck, cancelPopup }) {
  return (
    <PopupPageStyled>
      <div onMouseLeave={setCheck} onClick={cancelPopup}>
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

export default function DM({ setCheck, cancelPopup }) {
  return <Py setCheck={setCheck} cancelPopup={cancelPopup} />;
}
