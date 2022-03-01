import styled from "styled-components";

export const HowDidStyled = styled.section`
  position: relative;
  color: white;
  .webs-map {
    filter: brightness(99%);
    transform: scale(${(e) => e.scale});
    opacity: 0.3;
    position: absolute;
    top: ${(e) => e.mapTop}px;
  }
  @media (min-width: 600px) {
    .webs-map {
      transform: scale(${(e) => e.scale});
      top: ${(e) =>
        e.mapTop}px; //do not understanding why without +50px  it would not work
      left: ${(e) => e.left}px;
    }
    margin: auto;

    padding-top: ${(e) => e.paddingTop}px;

    .container {
      margin: auto;
      display: grid;
      grid-template-columns: 0px 1fr 200px 0px;
      grid-template-areas:
        ". title . . "
        ". subtitle img ."
        ". text img .";
      grid-column-gap: 1em;
      max-width: 1000px;
    }
    .how-title {
      grid-area: title;
      color: white;
      grid-auto-rows: min-content;
    }

    .how-subtitle {
      text-align: left;
      background-color: #006994;
      grid-area: subtitle;
      grid-row: 2;
      grid-auto-rows: min-content;
      position: relative;
      left: -1em;
      width: calc(100% + 2em);
      padding-left: 2em;
      padding-right: calc(200px + 3em);
    }
    .how-text {
      grid-area: text;
      justify-content: left;
      text-align: left;
      max-width: 1000px;
      color: white;
    }
    .how-img {
      grid-area: img;
      z-index: 1;
      height: 100%;
      img {
        max-width: 100%;
      }
    }
  }
`;
