import React from 'react';

import './style.scss';

function TextArea({ _onChange = () => { }, labelText, after, rows = 5, cols = 10 }) {
    return (
        <div className="text_area">
            <label htmlFor="email">{labelText} {after && (
                <span> * </span>
            )} </label>
            <textarea onChange={_onChange} name="emails" id="" cols={cols} rows={rows}></textarea>
        </div>
    );
}

export default TextArea;
