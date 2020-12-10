import React from 'react';


import './style.scss';
import { check } from '../../../assets/img';

function SuccessMessage({
    message = "" }) {
    return (
        <div className="success_message">
            <img src={check} alt="warning" />
            <span>{message}</span>
        </div>
    );
}

export default SuccessMessage;

// You added JOSEPH PHELPS INSIGNIA RED WINE NAPA RED WINE 2016 to your shopping cart.