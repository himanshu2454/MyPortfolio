import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./Modal.css";

export default function FormModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ "backdrop-filter": "blur(10px)" }}
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
        <form>
          <input name="email" type="text" />
          <button type="button">reah out ot me!</button>
        </form>
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
