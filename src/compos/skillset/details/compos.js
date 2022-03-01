import { useState } from "react";
import { BubbleStyled, TitleStyled } from "../../css/popup";
import {
  GridPicStyled,
  PicContainerStyled,
  GridStyled,
  GridContainerStyled,
  ObjContainerStyled,
  GridObjStyled,
} from "../../css/grid";
export function Title({ intro, title }) {
  const [bubble, setBubble] = useState(false);
  return (
    <GridContainerStyled>
      {bubble && (
        <BubbleStyled
          onMouseEnter={() => setBubble(true)}
          onMouseLeave={() => setBubble(false)}
        >
          <h5>What I know:</h5>
          {intro}
        </BubbleStyled>
      )}
      <TitleStyled
        onMouseEnter={() => setBubble(true)}
        onMouseLeave={() => setBubble(false)}
      >
        <h1>
          <span>{title}</span>
          <div></div>
        </h1>
      </TitleStyled>
    </GridContainerStyled>
  );
}
export function GridContainer({ items, subtitle, caption, type }) {
  function Grid(item) {
    return (
      <>
        <a href={item.url}>
          <li>{item.description}</li>
          <object data={item.url} type={type} width="100%" height="100%">
            preview notimplemented
          </object>
        </a>
      </>
    );
  }
  return (
    <>
      <h4>{subtitle}</h4>
      <p>{caption}</p>
      {items &&
        (type === "image/png" ? (
          <PicContainerStyled>
            {items.map((item) => (
              <GridPicStyled>{Grid(item)}</GridPicStyled>
            ))}
          </PicContainerStyled>
        ) : (
          <ObjContainerStyled>
            {items.map((item) => (
              <GridObjStyled>{Grid(item)}</GridObjStyled>
            ))}
          </ObjContainerStyled>
        ))}
    </>
  );
}
