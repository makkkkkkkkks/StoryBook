import React from "react";
import Modal from 'react-bootstrap/Modal';

const ModalWindow = (props) => (
    <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Form Editing Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {props.childerComponent}
        </Modal.Body>
    </Modal>
);

export default ModalWindow;