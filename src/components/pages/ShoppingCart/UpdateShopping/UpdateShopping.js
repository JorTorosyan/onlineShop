import React from 'react';
import { Link } from 'react-router-dom';

import './UpdateShopping.scss';


function UpdateShopping() {
  return (
    <div className="update_shopping">
      <div className="btn-wrapper">
        <div className="red_two">
          <Link to="/">
            <button type="submit" className="red-btn">Continue Shopping
         </button>
          </Link>
          <button type="submit" className="red-btn" style={{ marginLeft: 12 }} >Update Shopping Cart</button>
        </div>
        <button className="clear-btn">Clear Shopping Cart</button>
      </div>
    </div>

  );
}

export default UpdateShopping;
