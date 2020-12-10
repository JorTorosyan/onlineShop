import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import './style.scss';
const MyModal = (props) =>{
    const[message, setMessage] = useState('');
    const[title, setTitle] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        props.setShowParent(false);
    };

    useEffect(() => {
        setShow(props.show);
        setMessage(props.message);
        setTitle(props.title);

    }, [props])

    return(
        <Modal show={show} onHide={handleClose} dialogClassName="myModal">
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body >{message}</Modal.Body>
            <Modal.Footer>
                <button variant="secondary" onClick={handleClose} type='button' className="btn myModalButton">
                    Close
                </button>
            </Modal.Footer>
        </Modal>
    )
}
export default MyModal;