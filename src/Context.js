import { createContext, useState, useEffect } from "react";
const afterCertifContext = createContext();
const { Provider, Consumer } = afterCertifContext;

function ContextProvider(props) {
  const [certifDeclared, setCertifDeclared] = useState(false);
  const [certifClicked, setCertifClicked] = useState(false);
  const [userName, setUserName] = useState("");
  const [windowPopingup, setWindowPopingup] = useState(false);

  const value = {
    certifDeclared,
    setCertifDeclared,
    windowPopingup,
    setWindowPopingup,
    certifClicked,
    setCertifClicked,
    userName,
    setUserName,
  };
  return <Provider value={{ ...value }}>{props.children}</Provider>;
}
export { ContextProvider as Provider, Consumer };
