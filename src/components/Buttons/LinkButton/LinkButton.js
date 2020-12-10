import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

function LinkButton({ path = '', text, _onClick = () => { }, style }) {
    return (
        <div className="link_btn" onClick={_onClick} >
            <Link to={path} style={style} > <span>{text} </span> </Link>
        </div>
    );
}

export default LinkButton;
