import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import BookAdd from "../book-add/BookAdd";

function ModalBookEditing(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" onClick={handleShow}> Edit book </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Form Editing Book</Modal.Title>
                </Modal.Header>
                <Modal.Body> <BookAdd localButton={props.localButton}/> </Modal.Body>
            </Modal>
        </div>
    );
}

export default ModalBookEditing;