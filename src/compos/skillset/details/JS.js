import regex from "./pic/js/regex.pdf";
import weirdJS from "./pic/js/weirdJS.pdf";
import { GridContainer, Title } from "./compos";
import { PopupPageStyled } from "../../css/popup";

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
  GridObjStyled,dasfdfasdfasdfasdfasdfasdfasdfasdfasdfasdfa"
        title="Javascript"
      />

      <GridContainer
        items={[{ url: regex }, { url: weirdJS }]}
        type="application/pdf"
        subtitle="'Vanilla' Javascript"
        caption="two javascript courses I've completed from Udemy"
      />
      <GridContainer
        items={[{ url: "https://jack-kfk2t.ondigitalocean.app/" }]}
        type="text/html"
        subtitle="React.js"
        caption="a website of 'resume' made by react.js"
      />
      <GridContainer
        items={[
          {
            url: "https://github.com/jackengtwistio/nodejs-andrew",
            description: "Go to the GitHub repository",
          },
        ]}
        subtitle="Node.js"
        caption="works(drafts) did when following some Udemy course for learning
        Node.js"
        type="text/html"
      />
    </PopupPageStyled>
  );
}
