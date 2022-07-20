import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CurrencyFormat from 'react-currency-format';
import SelectCountryCity from './SelectCountryCity';
import NumberFormat from 'react-number-format';
import currencyFormat from './currencyFormat';

const PaymentDetails = ({ props }) => {
    const { accountPlan, planPrice } = props


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
    const currentDate = (new Date()).getDate();
    const today = currentDate + (currentDate === 1 ? 'st' : (currentDate === 2 ? 'nd' : (currentDate === 3 ? 'rd' : 'th')))

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
                <form action='' method='post'>
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
                                required
                            ></input>
                        </div>
                        <div className='input-block'>
                            <label className='lbl-input' htmlFor='creditCard'>Credit Card</label>
                            <div className='card-input d-flex flex-row flex-wrap justify-content-between'>
                                <CurrencyFormat
                                    id='creditCard'
                                    className='card-prop flex-grow-1'
                                    placeholder='Card Number'
                                    format="#### #### #### ####"
                                    required />
                                <CurrencyFormat
                                    className='card-prop'
                                    id='creditCardExpiry'
                                    format={cardExpiry}
                                    placeholder="MM/YY"
                                    mask={['M', 'M', 'Y', 'Y']}
                                    required />
                                <NumberFormat
                                    className='card-prop'
                                    id='creditCardCVC'
                                    format='###'
                                    type={'password'}
                                    mask=''
                                    placeholder="CVC"
                                    required />
                            </div>
                            <div className='input-block'>
                                <label className='lbl-input' htmlFor='adress01'>Adress</label>
                                <input
                                    type='text'
                                    id='adress01'
                                    className='input-field'
                                    placeholder='Adress line 01'
                                    required
                                ></input>
                                <input
                                    type='text'
                                    id='adress02'
                                    className='input-field'
                                    placeholder='Adress line 02'
                                ></input>
                            </div>

                        </div>
                        <SelectCountryCity />
                        <div className='info'>
                            <div className='account-plan'>
                                <span className='account-plan__label'>Account plan: </span>
                                {accountPlan}
                                <span className='account-plan__price'>{currencyFormat(planPrice, 'symbol')}</span>
                            </div>
                            <div className='payment-total'>
                                <span>Total: </span>
                                <span className='payment-total__price'>{currencyFormat(planPrice, 'code')}</span>
                            </div>
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <button
                            type='submit'
                            className='btn-submit'
                        // onClick={handleClose}
                        >Subscribe &amp; Checkout</button>
                        <div className='payment-reminder'>We will bill you every month on the {today}, unless you cancel.</div>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}

export default PaymentDetails