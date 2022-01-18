import React from "react";
import { AppStyled } from "./compos/css/app";
import Info from "./compos/info";
import SkillOuter from "./compos/skillset/";
import Jobs from "./compos/jobs";
import HowDid from "./compos/howdid";
import { Provider, Consumer } from "./Context";

function App() {
  return (
    <Provider>
      <Consumer>
        {({ certifDeclared, windowPopingup }) => (
          <AppStyled certifDeclared={certifDeclared}>
            {windowPopingup && <div className="overlay" />}
            <Info />
            <SkillOuter />
            <Jobs />
            <HowDid />
          </AppStyled>
        )}
      </Consumer>
    </Provider>
  );
}

export default App;
