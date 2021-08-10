import { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./Modal.css";
// import { formContext } from "../context/formcontext";

export default function HireModal(props) {
  // const { setFlag } = useContext(formContext);

  // const showForm = () => {
  //   props.onHide();
  //   setFlag(true);
  // };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ "backdrop-filter": "blur(10px)" }}
      className="model"
    >
      <Modal.Header
        closeButton
        style={{
          "background-color": "#313332",
          border: "1px solid red",
          color: "white",
        }}
      >
        <Modal.Title id="contained-modal-title-vcenter">
          Glad ! you decided to connect &#128591;
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          "background-color": "#313332",
          border: "1px solid #313332",
          color: "white",
        }}
      >
        <h4>Would you like to -</h4>
        <span>
          <a href="https://bit.ly/3xMEunh">
            <button
              style={{
                "background-color": "red",
                padding: "1em",
                border: "1px solid red",
                borderRadius: "5px",
                color: "white",
              }}
            >
              Download my resume &#x1F4C4;
            </button>
          </a>
        </span>
        <span>
          <h4 style={{ display: "inline", "margin-left": "1rem" }}>or</h4>
        </span>
        <span>
          <a href="https://github.com/himanshu2454/">
            <button
              style={{
                "background-color": "red",
                padding: "1em",
                border: "1px solid red",
                color: "white",
                borderRadius: "5px",
                marginLeft: "1rem",
              }}
            >
              Checkout my Github{" "}
              <i
                class="fa fa-github"
                aria-hidden="true"
                style={{ fontSize: "1.5rem", color: "black" }}
              ></i>
            </button>
          </a>
        </span>
        {/* <span>
          <h4>or</h4>
        </span> */}
        {/* <span>
          <button
            style={{
              "background-color": "red",
              padding: "1em",
              border: "1px solid red",
              borderRadius: "5px",
              color: "white",
            }}
            onClick={showForm}
          >
            reach out to you instead ?
          </button>
        </span> */}
      </Modal.Body>
      <Modal.Footer
        style={{
          "background-color": "#313332",
          border: "1px solid red",
          color: "white",
        }}
      >
        <Button
          onClick={props.onHide}
          style={{
            "background-color": "red",
            padding: "0.5em",
            border: "1px solid red",
          }}
        >
          Maybe, Later &#128075;
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
