import { useEffect, useState } from "react";
import regexImg from "./pic/js/regex.pdf";
import weirdJSImg from "./pic/js/weirdJS.pdf";
import { GridPicItem, GridPics } from "../../css/grid";
import { PopupPageStyled, BubbleStyled, TitleStyled } from "../../css/popup";

export default function DM({ setCheckedSkill, children }) {
  useEffect(() => {
    setCheckedSkill((prev) => ({ ...prev, JS: "JS" }));
    return () => {};
  }, []);
  const [bubble, setBubble] = useState(false);
  return (
    <PopupPageStyled>
      {children}
      <div>
        {/* <div style={{ justifySelf: "center" }}> */}
        <GridPics
          onMouseEnter={() => setBubble(true)}
          onMouseLeave={() => setBubble(false)}
        >
          {bubble && (
            <BubbleStyled>
              Type any text here and the bubble will grow to fit the text no
              matter how many lines. Isn't that nifty?
            </BubbleStyled>
          )}
          <TitleStyled>
            <h1>
              <span>Javascript</span>
              <div></div>
            </h1>
          </TitleStyled>
        </GridPics>
        {/* </div> */}

        <h4>Udemy Courses I have completed</h4>
        <GridPics>
          <GridPicItem>
            <object
              data={regexImg}
              type="application/pdf"
              width="100%"
              height="100%"
            >
              <a href="https://www.udemy.com/certificate/UC-ad59520f-04db-424c-9f88-f64a5a4fcd6a/">
                certificate source
              </a>
            </object>
          </GridPicItem>
          <GridPicItem>
            <object
              data={weirdJSImg}
              type="application/pdf"
              width="100%"
              height="100%"
            >
              <a href="https://www.udemy.com/certificate/UC-d053c984-d018-4a74-8e87-edd22fd744b7">
                certificate source
              </a>
            </object>
          </GridPicItem>
        </GridPics>
        <h4>
          works(drafts) did when following some Udemy course for learning
          Javascript
        </h4>
        <a href="https://github.com/jackengtwistio/nodejs-andrew">
          <p>github</p>
        </a>
      </div>
    </PopupPageStyled>
  );
}
