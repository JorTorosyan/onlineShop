import React, { useState } from 'react';

import './style.scss';
import { arrow_down } from '../../../../assets/img';

function Summary() {
    const [open, setOpen] = useState(false);
    const handleClickToggle = () => {
        setOpen(() => !open);
    };
    const [openDiscount, setOpenDiscount] = useState(false);

    const handleClickToggleDiscount = () => {
        setOpenDiscount(() => !openDiscount);
    };
    return (
        <div className="column summary">
            <h2>Summary</h2>
            <div className="estimation">
                <div className="toggler" >
                    <p>Estimate Shipping and Tax</p>
                    <img onClick={handleClickToggle} width="20" src={arrow_down} alt="arrow-down" />
                </div>



                {open && <div className="opening-div" >
                    <p>Enter your destination to get a shipping estimate.</p>
                    <label htmlFor="">City<input type="text" /></label>
                    <label htmlFor="">Country
              <select type="text">
                            <option value="">Test</option>
                            <option value="">Test</option>
                            <option value="">Test</option>
                            <option value="">Test</option>
                        </select>
                    </label>
                    <label htmlFor="">Zip/Postal Code<input type="number" /></label>
                    <label htmlFor="">State/Province
              <select type="text">
                            <option value="">Test</option>
                            <option value="">Test</option>
                            <option value="">Test</option>
                            <option value="">Test</option>
                        </select></label>
                    <label htmlFor="">In-Store pickup
              <input type="radio" />
                    </label>
                </div>}


            </div>
            <div className="third-column-wrapper">
                <span>Subtotal</span>
                <span>$799.99</span>
            </div>
            <div className="third-column-wrapper">
                <span>Shipping (In-Store Pickup - In-Store Pickup)</span>
                <span>$0.00</span>
            </div>
            <div className="third-column-wrapper">
                <span>Additional Fees</span>
                <span>$2.15</span>
            </div>
            <div className="third-column-wrapper">
                <span>Yes(1.00%)</span>
                <span>$2.15</span>
            </div>
            <div className="third-column-wrapper">
                <span>Order Total Incl. Tax</span>
                <span><b>$807.99</b></span>
            </div>
            <div className="third-column-wrapper">
                <span>Order Total Excl. Tax</span>
                <span><b>$807.99</b></span>
            </div>
            <div className="estimation">
                <div className="toggler">
                    <img onClick={handleClickToggleDiscount} width="20" src={arrow_down} alt="arrow-down" />
                </div>


                {openDiscount && <div className="discount-hidden">
                    <label>Enter discount code</label>
                    <input type="text" placeholder="Apply Discount" />
                    <button>Apply Discount</button>
                </div>}



            </div>
            <div className="btn-wrapper">
                <button className="red-btn" style={{ width: '90%', margin: '12px auto', display: 'block' }}>Proceed To Checkout</button>
            </div>
        </div>
    );
}

export default React.memo(Summary);
