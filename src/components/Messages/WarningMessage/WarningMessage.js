import React from 'react';

import './style.scss';
import { warning } from '../../../assets/img';

function WarningMessage({
    message = "" }) {
    return (
        <div className="warning_message">
            <img src={warning} alt="warning" />
            <span>{message}</span>
        </div>
    );
}

export default WarningMessage;
