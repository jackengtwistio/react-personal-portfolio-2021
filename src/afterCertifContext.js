import { createContext, useState } from "react";
const afterCertifContext = createContext();
const { Provider, Consumer } = afterCertifContext;

function AfterCertifCP(props) {
  const [certifDeclared, setCertifDeclared] = useState(false);
  const value = { certifDeclared, setCertifDeclared };
  return <Provider value={{ ...value }}>{props.children}</Provider>;
}
export { AfterCertifCP, Consumer as AfterCertifCC, afterCertifContext };
