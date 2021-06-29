import { useState } from "react";
import "./App.css";
// import Modal from "./Modal/Modal";

function App() {
  // const [ModalFlag, setFlag] = useState(false);

  // const handleWannaConnect = () => {
  //   setFlag(true);
  // };

  return (
    <div className="App">
      <div className="mainContainer">
        <div style={{ "margin-top": "5em" }} className="headingContainer">
          <span id="title">
            Hi<span id="comma">,</span>
          </span>
        </div>
        <div className="headingContainer">
          <span id="title">I'm Himanshu</span>
        </div>
        <div className="desgContainer">
          <span id="desg">Software Developer</span>
        </div>
        <div className="buttonContainer">
          <button id="hirebutton">Wanna connect ?</button>
        </div>
      </div>

      {/* {ModalFlag ? <Modal /> : ""} */}
    </div>
  );
}

export default App;
