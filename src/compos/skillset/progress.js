import { useState } from "react";
import { ProgressStyled } from "../css/progress.js";
import {
  CertifClaimStyled,
  SpinningStyled,
  ToggleButtonStyled,
  HonorDivStyled,
} from "../css/certif";
import certImg from "./cert/certif.jpeg";
import pdfDownload from "./cert/pdfDownload";

export default function Progress({
  max,
  value,
  setCertifDeclared,
  certifDeclared,
}) {
  const [close, setClose] = useState(false);
  function ToggleButton() {
    return (
      <ToggleButtonStyled close={close} onClick={() => setClose(!close)} />
    );
  }
  if (close) {
    return (
      <ProgressStyled>
        <ToggleButton />
      </ProgressStyled>
    );
  }
  if (certifDeclared) {
    return (
      <ProgressStyled progressFinished={true}>
        <HonorDivStyled>
          <CertifClaimStyled
            onClick={() => {
              pdfDownload();
            }}
          >
            <span>
              {}'s name is verified. Coursera certifies their successful
              completion of Python Classes and Inheritance
            </span>
            <br />
            <img src={certImg} alt="certification" />
            <ToggleButton />
          </CertifClaimStyled>
        </HonorDivStyled>
      </ProgressStyled>
    );
  }
  if (max === value) {
    return (
      <ProgressStyled progressFinished={true}>
        <CertifClaimStyled>
          <p>Congratulations! you have successfully completed Jack's resume!</p>
          <br />
          <progress id="file" max={max} value={value} />
          <SpinningStyled
            onClick={async () => {
              await pdfDownload();
              setCertifDeclared(true);
            }}
          >
            <img src={certImg} alt="certification" />
          </SpinningStyled>
          <i>you can declare your certification by clicking it!</i>
          <ToggleButton />
        </CertifClaimStyled>
      </ProgressStyled>
    );
  }
  return (
    <ProgressStyled>
      <label htmlFor="file">Your progress:</label>
      <br />
      <progress id="file" max={max} value={value} />
      <ToggleButton />
    </ProgressStyled>
  );
}
