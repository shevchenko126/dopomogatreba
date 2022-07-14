import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SelectCountryCity from './SelectCountryCity';


const PaymentDetails = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                open modal
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Payment Details</Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-flex flex-column'>
                    <label htmlFor='nameOnCard'>Name on Card</label>
                    <input
                        type='text'
                        id='nameOnCard'
                        placeholder='Adress line 01'
                    ></input>
                    <SelectCountryCity/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default PaymentDetails