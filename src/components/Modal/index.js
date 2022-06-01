import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalComponent = ({ open, close, title, body, btnText }) => {
  return (
    <Modal show={open} onHide={close} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {body}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={close}>Close</Button>
        {btnText && (<Button>{btnText}</Button>)}
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
