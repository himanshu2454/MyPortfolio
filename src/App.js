import React, { useState } from "react";
import HireModal from "./Modal/Modal";
import { formContext } from "./context/formcontext";
import Parent from "./components/maincontainer";
import "./App.css";

export default function App() {
  const [ModalFlag, setFlag] = useState(false);

  const modelcontext = {
    ModalFlag,
    setFlag,
  };

  return (
    <div className="App">
      <formContext.Provider value={modelcontext}>
        <div>
          <Parent />
          {ModalFlag ? (
            <HireModal show={ModalFlag} onHide={() => setFlag(false)} />
          ) : (
            ""
          )}
        </div>
      </formContext.Provider>
    </div>
  );
}
