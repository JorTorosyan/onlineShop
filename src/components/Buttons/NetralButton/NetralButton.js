import React from 'react';


import './style.scss';

function NetralButton({ text, _onClick = () => { }, style }) {
    return (
        <div className="netral_btn" onClick={_onClick} style={style}>
            <span>{text} </span>
        </div>
    );
}

export default NetralButton;