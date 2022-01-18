import styled from "styled-components";

export const HowDidStyled = styled.section`
  @media (min-width: 600px) {
    margin: auto;
    max-width: 1000px;
    display: grid;
    grid-template-columns: 0px 1fr 200px 0px;
    grid-template-areas:
      ". title img. "
      ". subtitle img ."
      ". text img .";
    grid-column-gap: 1em;

    .how-title {
      grid-area: title;
    }

    .how-subtitle {
      text-align: left;
      background-color: rgb(82, 82, 241);
      grid-area: subtitle;
      grid-row: 2;
      position: relative;
      left: -1em;
      width: calc(100% + 2em);
      padding-left: 1em;
      padding-right: calc(200px + 4em);
    }
    .how-text {
      grid-area: text;
    }
    .how-img {
      grid-area: img;
      z-index: 2;
      height: 100%;
    }
  }
`;
