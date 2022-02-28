import { PopupPageStyled } from "../../css/popup";
import dns1 from "./pic/n/dns-cisco1.png";
import dns2 from "./pic/n/dns-cisco2.png";
import dns3 from "./pic/n/dns-cisco3.png";
import dns4 from "./pic/n/dns-cisco4.png";
import comp1 from "./pic/n/comptia1.pdf";
import comp2 from "./pic/n/comptia2.pdf";
import nontechis from "./pic/n/nontechis.pdf";
import ITsup from "./pic/n/ITsupport.pdf";
import osAndU from "./pic/n/osAndU.pdf";
import bitsBytes from "./pic/n/bitsBytes.pdf";
import { GridContainer, Title } from "./compos";

export default function DM({ children }) {
  return (
    <PopupPageStyled>
      {children}
      <Title
        intro="GridPicStyled,
PicContainerStyled,
GridStyled,
GridContainerStyled,
ObjContainerStyled,
GridObjStyled,"
        title="Computer Networking"
      />
      <GridContainer
        subtitle="Google IT Supports"
        caption="three courses completion from Google IT Support certification"
        type="application/pdf"
        items={[{ url: bitsBytes }, { url: osAndU }, { url: ITsup }]}
      />
      <GridContainer
        subtitle="Basic computer and networking"
        caption="three courses completion from Udemy"
        type="application/pdf"
        items={[{ url: comp1 }, { url: comp2 }, { url: nontechis }]}
      />
      <GridContainer
        items={[{ url: dns1 }, { url: dns2 }, { url: dns3 }, { url: dns4 }]}
        subtitle="Cisco Networking Lab"
        caption="configuring DNS by following a udemy course using cisco lab"
        type="image/png"
      />
    </PopupPageStyled>
  );
}
