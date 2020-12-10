import React from 'react';
import { Link } from 'react-router-dom';


import './style.scss';

import RedButton from '../../../../Buttons/RedButton/RedButton';
import NetralButton from '../../../../Buttons/NetralButton/NetralButton';

function WishListItem({ src, name, price,
    quantity = '', _onClick = () => { }, _onChange, _handleAddToCard = () => { }, disable, outOfStock }) {
    const padding = { padding: '6px 10px' };
    const style = { fontSize: '15px' };
    const className = " out_of_stock";

    return (
        <div className="wish_list_item">
            <Link to="/">
                <img src={src} alt="wish_item" />
            </Link>
            <div className="list_name">
                <Link to="/">{name}</Link>
            </div>
            <div className="price">{'$'} {price} </div>
            <div className="field_wrapp">
                <input type="number" value={quantity} onChange={_onChange} />
                <RedButton
                    text={!outOfStock ? "ADD TO CART" : "Out of stock"}
                    padding={padding}
                    _onClick={_handleAddToCard}
                    disable={disable}
                    _className={outOfStock ? className : ""}
                />
            </div>
            <div className="remove_button">
                <NetralButton text="Remove" _onClick={_onClick} style={style} />
            </div>
        </div>
    );
}

export default React.memo(WishListItem);
