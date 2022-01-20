import { useState } from "react";
import { ProgressStyled } from "../css/progress.js";
import {
  CertifClaimStyled,
  SpinningStyled,
  ToggleButtonStyled,
  HonorDivStyled,
} from "../css/certif";
import certImg from "./certif/certif.jpeg";
import pdfDownload from "./certif/pdfDownload";
import QueryForm from "./certif/queryForm";
import { SkillCC } from "./context";
export default function Progress({ max, value, certifDeclared }) {
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
          <CertifClaimStyled>
            <SkillCC>
              {(e) => (
                <>
                  <span>
                    {}'s name is verified. Coursera certifies their successful
                    completion of Python Classes and Inheritance
                  </span>
                  <br />
                  <img
                    src={certImg}
                    alt="certification"
                    onClick={() => {
                      e.setCertifClicked(true);
                    }}
                  />
                </>
              )}
            </SkillCC>

            <ToggleButton />
            <QueryForm />
          </CertifClaimStyled>
        </HonorDivStyled>
      </ProgressStyled>
    );
  }
  if (max === value) {
    return (
      <ProgressStyled progressFinished={true}>
        <HonorDivStyled>
          <CertifClaimStyled>
            <b>
              Congratulations! you have successfully completed Jack's resume!
            </b>

            <progress id="file" max={max} value={value} />
            <SkillCC>
              {(e) => (
                <>
                  <SpinningStyled
                    onClick={() => {
                      e.setCertifClicked(true);
                    }}
                  >
                    <br />
                    <img src={certImg} alt="certification" />
                  </SpinningStyled>
                  {e.certifClicked && <QueryForm />}
                </>
              )}
            </SkillCC>

            <i>you can declare your certification by clicking it!</i>
          </CertifClaimStyled>
        </HonorDivStyled>
      </ProgressStyled>
    );
  }
  return (
    <ProgressStyled>
      <label htmlFor="file" onClick={pdfDownload}>
        Your progress:
      </label>
      <br />
      <progress id="file" max={max} value={value} />
    </ProgressStyled>
  );
}
