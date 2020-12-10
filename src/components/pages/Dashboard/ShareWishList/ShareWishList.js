import React from 'react';

import './style.scss';
import TextArea from '../../../TextArea/TextArea';
import RedButton from '../../../Buttons/RedButton/RedButton';


function ShareWishList() {
    const handleChange = (e) => {
        console.log(e.target.value);
    };
    const handleClick = () => {
        console.log('click');
    };
    return (
        <div className="share_wish_list">
            <h1>WISH LIST SHARING</h1>
            <h2>Account Information</h2>
            <div className="textArea_wrap">
                <TextArea
                    labelText="Email addresses, separated by commas"
                    after
                    _onChange={handleChange}
                />
            </div>
            <div className="textArea_wrap">
                <TextArea
                    labelText="Message"
                    _onChange={handleChange}
                />
            </div>
            <RedButton text="SHARE WISH LIST" _onClick={handleClick} />
        </div>
    );
}

export default ShareWishList;
