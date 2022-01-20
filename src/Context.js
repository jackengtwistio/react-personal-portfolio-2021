import { createContext, useState } from "react";
const afterCertifContext = createContext();
const { Provider, Consumer } = afterCertifContext;

function ContextProvider(props) {
  const [certifDeclared, setCertifDeclared] = useState(false);
  return (
    <Provider value={{ certifDeclared, setCertifDeclared }}>
      {props.children}
    </Provider>
  );
}
export { ContextProvider as Provider, Consumer };
