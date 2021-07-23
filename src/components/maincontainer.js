import React, { useContext } from "react";
import Tilt from "react-vanilla-tilt";
import { formContext } from "../context/formcontext";

export default function Parent() {
  const { setFlag } = useContext(formContext);
  const handleWannaConnect = () => {
    setFlag(true);
  };
  const options = {
    // reverse: false, // reverse the tilt direction
    // max: 35, // max tilt rotation (degrees)
    // perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    // scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    // speed: 300, // Speed of the enter/exit transition
    // transition: true, // Set a transition on enter/exit.
    // axis: null, // What axis should be disabled. Can be X or Y.
    // reset: true, // If the tilt effect has to be reset on exit.
    // easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
    // glare: false, // if it should have a "glare" effect
    // "max-glare": 1, // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
    // "glare-prerender": false, // false = VanillaTilt creates the glare elements for you, otherwise
    // // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
    max: 90,
    speed: 400,
    glare: true,
    perspective: 100,
  };

  return (
    <>
      <div className="mainContainer">
        <div style={{ "margin-top": "5em" }} className="headingContainer">
          <span id="title">
            Hi<span id="comma">,</span>
          </span>
        </div>
        <div className="headingContainer">
          <span id="title">Himanshu here</span>
        </div>
        <div className="desgContainer">
          <span id="desg">Software Developer</span>
          <Tilt
            options={options}
            style={{ width: "30%", margin: 0, padding: 0 }}
          >
            <div style={{ marginTop: "1rem" }}>
              <p>
                I'm full-stack developer with experience in React Library & .Net
                framework. I'm currently working for{" "}
                <a
                  href="https://fulfillmentiq.com/"
                  style={{ color: "orange" }}
                >
                  FullfillmentIQ
                </a>{" "}
                one of the pioneers in supply chain domain, building amazing
                warehouse software solutions.{" "}
              </p>
            </div>
          </Tilt>
        </div>
        <div className="buttonContainer">
          <Tilt
            options={options}
            style={{ width: "30%", margin: 0, padding: 0 }}
          >
            <div>
              <button
                style={{ width: "100%" }}
                onClick={handleWannaConnect}
                id="hirebutton"
              >
                Wanna connect ?
              </button>
            </div>
          </Tilt>
        </div>
      </div>
    </>
  );
}
