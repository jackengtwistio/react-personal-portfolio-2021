import pic from "./img/py-class-inheritance.png";
import { GridPicItem, GridPics } from "../css/grid";

export function Py(props) {
  console.log(props.popup);
  return (
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
        </GridPics>
      </fieldset>
    </div>
  );
}
