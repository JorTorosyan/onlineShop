import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

function RedLinkButton({ _onClick = () => { }, path, text }) {
    return (
        <Link className="red_btn_link" to={path} onClick={_onClick}>
            <button> {text} </button>
        </Link>

    );
}

export default RedLinkButton;
