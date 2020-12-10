import React, { useState } from 'react';

import { downArrow, downArrowWhite } from '../../../../assets/img';
import './GiftOptions.scss';

function GiftOptions() {
    const [hover, setHover] = useState(false);
    const [open, setOpen] = useState(false);

    const handleHover = () => {
        setHover(() => true);
    };
    const handleOutHover = () => {
        setHover(() => false);
    };
    const handleClickToggle = () => {
        setOpen(() => !open);
    };
    return (
        <div className="gift-option">
            <button onClick={handleClickToggle} onMouseEnter={handleHover} onMouseLeave={handleOutHover} >
                <span>Gift Options</span>
                <img width="16" style={open ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0deg)' }} src={!hover ? downArrow : downArrowWhite} alt="downArrow" />
            </button>
            {open && <div className="gift-container">
                <h3>Gift Message (optional)</h3>
                <label >To:<input type="text" /></label>
                <label>From:<input type="text" /></label>
                <label>Message:<textarea name="" id="" ></textarea></label>
                <div className="btn-wrapper">
                    <button className="clear-btn" >Cancel</button>
                    <button type="submit" className="red-btn" style={{ marginLeft: 12 }}>Update</button>
                </div>
            </div>}
        </div>
    );
}

export default React.memo(GiftOptions);
