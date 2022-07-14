import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CurrencyFormat from 'react-currency-format';
import SelectCountryCity from './SelectCountryCity';


const PaymentDetails = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function limit(val, max) {
        if (val.length === 1 && val[0] > max[0]) {
            val = '0' + val;
        }

        if (val.length === 2) {
            if (Number(val) === 0) {
                val = '01';

                //this can happen when user paste number
            } else if (val > max) {
                val = max;
            }
        }

        return val;
    }

    function cardExpiry(val) {
        let month = limit(val.substring(0, 2), '12');
        let year = val.substring(2, 4);

        return month + (year.length ? '/' + year : '');
    }

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
                    <div className='input-block'>
                        <label className='lbl-input' htmlFor='nameOnCard'>Name on Card</label>
                        <input
                            type='text'
                            id='nameOnCard'
                            className='input-field'
                            placeholder='Adress line 01'
                        ></input>
                    </div>
                    <div className='input-block'>
                        <label className='lbl-input' htmlFor='creditCard'>Credit Card</label>
                        <div className='card-input d-flex flex-row'>
                            <CurrencyFormat
                                id='creditCard'
                                className='card-prop flex-grow-1'
                                placeholder='Card Number'
                                format="#### #### #### ####" />
                            <CurrencyFormat
                                className='card-prop'
                                id='creditCardExpiry'
                                format={cardExpiry}
                                placeholder="MM/YY"
                                mask={['M', 'M', 'Y', 'Y']} />
                            <CurrencyFormat
                                className='card-prop'
                                id='creditCardCVC'
                                format='###'
                                placeholder="CVC" />
                        </div>
                        <div className='input-block'>
                        <label className='lbl-input' htmlFor='adress01'>Name on Card</label>
                        <input
                            type='text'
                            id='adress01'
                            className='input-field'
                            placeholder='Adress line 01'
                        ></input>
                        <input
                            type='text'
                            id='adress02'
                            className='input-field'
                            placeholder='Adress line 02'
                        ></input>
                    </div>

                    </div>
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