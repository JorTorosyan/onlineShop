import React from 'react'
import './style.scss'

const StoredPaymentMethods = () => {
    return (
        <div className="payment-methots-container">
        <h1>STORED PAYMENT METHODS</h1>
        <div className="message-info">
            <span>You have no stored payment methods.</span>
        </div>
    </div>
    )
}
export default StoredPaymentMethods;
