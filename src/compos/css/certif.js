import styled, { keyframes } from "styled-components";
import { CloseButtonStyled } from "./closeButton";

const rotate = keyframes`
from{transform:rotate(0deg)}
to{transform:rotate(360deg)}
`;

export const SpinningStyled = styled.div`
  margin: auto;
  max-width: 100px;

  animation: 2s ${rotate} linear infinite;
  &:hover {
    cursor: grab;
  }
`;

export const HonorDivStyled = styled.div`
  color: silver;
  text-shadow: 0.1px 0.1px 0 #262626, 0.2px 0.2px 0 #262626,
    0.3px 0.3px 0 #262626, 0.4px 0.4px 0 #262626, 0.5px 0.5px 0 #262626,
    0.1px 0.1px 0 #262626, 0.6px 2px 2px rgba(0, 0, 0, 1), -0.1px -0.1px 0 #fff;
  background: radial-gradient(
      ellipse farthest-corner at right bottom,
      #fedb37 0%,
      #fdb931 8%,
      #9f7928 30%,
      #8a6e2f 40%,
      transparent 80%
    ),
    radial-gradient(
      ellipse farthest-corner at left top,
      #ffffff 0%,
      #ffffac 8%,
      #d1b464 25%,
      #5d4a1f 62.5%,
      #5d4a1f 100%
    );
  border-radius: 2em;
  box-shadow: inset 0px 3px 5px rgba(255, 255, 255, 0.5),
    0px 0px 10px rgba(0, 0, 0, 0.15);
  &:hover {
    color: white;
    box-shadow: inset 0px 3px 5px rgba(255, 255, 255, 1),
      0px 0px 10px rgba(0, 0, 0, 0.25);
  }
`;

export const CertifClaimStyled = styled.div`
  margin: -0.3em;

  display: grid;
  max-width: 300px;
  padding: 1em;
  border-radius: 2em;
  background: linear-gradient(
    45deg,
    rgba(2, 0, 36, 0) 5%,
    rgba(255, 255, 255, 0.5) 6%,
    rgba(255, 255, 255, 0) 9%,
    rgba(255, 255, 255, 0.5) 10%,
    rgba(255, 255, 255, 0) 17%,
    rgba(255, 255, 255, 0.5) 19%,
    rgba(255, 255, 255, 0) 21%
  );
  background-size: 150%;
  background-position: right;
  transition: 1s;
  &:hover {
    background-position: left;
  }
  img {
    max-width: 100%;
    cursor: grab;
  }
`;

export const ToggleButtonStyled = styled(CloseButtonStyled)`
  bottom: 0;
  margin: auto;
  margin-top: 1em;
`;
