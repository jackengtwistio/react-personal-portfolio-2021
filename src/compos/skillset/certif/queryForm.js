import { useState } from "react";
import { QueryFormStyled } from "../../css/popup";
import { SkillCC } from "../context";
import { Consumer } from "../../../Context";
import pdfDownload from "./pdfDownload";
export default function QueryForm() {
  const [nameConfirmed, setNameConfirmed] = useState(false);

  function QueryName({ e }) {
    const [name, setName] = useState("");
    return (
      <div>
        <p>the certification can be downloaded once you confirm your name</p>
        <br />
        <input
          type="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Your name"
        />
        <button
          onClick={() => {
            e.setUserName(name);
            setNameConfirmed(true);
          }}
        >
          confirm
        </button>
      </div>
    );
  }
  function ConfirmAgain({ e }) {
    return (
      <>
        <div className="content">
          <p>
            Dear {e.userName}, you may confirm that you want to download the
            certification (pdf){" "}
          </p>
        </div>
        <div className="toggle">
          <span
            onClick={() => {
              e.setCertifClicked(false);
            }}
          >
            Cancel
          </span>
          <Consumer>
            {(props) => (
              <span
                onClick={() => {
                  e.setCertifClicked(false);
                  pdfDownload(e.userName).then(() =>
                    props.setCertifDeclared(true)
                  );
                }}
              >
                Accept
              </span>
            )}
          </Consumer>
        </div>
      </>
    );
  }

  function QueryPage({ e }) {
    return (
      <div className="modalcontainer">
        <div className="flex">
          <div className="modal">
            <div className="close">
              <span
                onClick={() => {
                  e.setCertifClicked(false);
                }}
              >
                &#43;
              </span>
            </div>
            <h2>Modal title</h2>
            {nameConfirmed || e.userName ? (
              <ConfirmAgain e={{ ...e }} />
            ) : (
              <QueryName e={{ ...e }} />
            )}
          </div>
        </div>
      </div>
    );
  }
  return (
    <QueryFormStyled>
      <SkillCC>
        {(e) => {
          if (e.certifClicked) {
            return <QueryPage e={{ ...e }} userName={e.userName} />;
          }
        }}
      </SkillCC>
    </QueryFormStyled>
  );
}
