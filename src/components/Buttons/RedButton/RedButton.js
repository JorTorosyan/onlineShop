import React from 'react';

import './style.scss';

function RedButton({ _onClick = () => { }, text, padding = { padding: '10px 15px' }, disable = true, _className }) {


    function createClassName() {
        let className = 'red_btn';
        if (disable) {
            className += ' disable';
        }
        else if (_className) {
            className += _className;
        } else if (disable && _className) {
            className += _className + ' disable';
        }
        return className;
    }

    return (
        <button
            className={createClassName()}
            onClick={_onClick} style={padding}
        >{text}
        </button>
    );
}

export default RedButton;
