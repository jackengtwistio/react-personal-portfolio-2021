import { useState } from "react";
import { QueryFormStyled } from "../../css/popup";
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
            console.log(e.userName);
            e.setUserName(name);
            console.log(e.userName);
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
            certification again{" "}
          </p>
        </div>
        <div className="toggle">
          <span
            onClick={() => {
              e.setWindowPopingup(false);
              e.setCertifClicked(false);
            }}
          >
            Cancel
          </span>
          <span
            onClick={() => {
              e.setCertifClicked(false);
              e.setWindowPopingup(false);
              pdfDownload(e.userName).then(() => e.setCertifDeclared(true));
            }}
          >
            Accept
          </span>
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
                  e.setWindowPopingup(false);
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
      <Consumer>
        {(e) => {
          if (e.certifClicked) {
            return <QueryPage e={{ ...e }} userName={e.userName} />;
          }
        }}
      </Consumer>
    </QueryFormStyled>
  );
}
