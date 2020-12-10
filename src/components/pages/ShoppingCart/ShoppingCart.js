import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import Summary from './Summary/Summary';
import UpdateShopping from './UpdateShopping/UpdateShopping';
import { deleteIcon } from '../../../assets/img';
import GiftOptions from './GiftOptions/GiftOptions';

const ShoppingCart = () => {
  return (
    <div className="shopping_card">
      <h1>SHOPPING CART</h1>
      <div className="wrapper">
        <div className="table_wrapp">
          <table>
            <thead><tr className="labels">
              <th className="item-wrapper" style={{ width: '20%', paddingLeft: 20 }}>Image</th>
              <th style={{ width: '35%' }}> Product Name</th> <th>Qty</th>
              <th>Price</th>
              <th>Subtotal</th>
              <th>Remove</th>
            </tr>
            </thead>
            <tbody className="product-wrapper">
              <tr>
                <td>
                  <Link to="">
                    <img src="https://remedy-varnishcdn-ebizon.netdna-ssl.com/pub/media/catalog/product/cache/2f58bf1051a2f0ceba166b720ec0a490/2/0/2018_ggn_30yr_bottle_and_open_box_150dpi.jpg" alt="" />
                  </Link>
                </td>
                <td>
                  <Link to=""> GLENGOYNE SCOTCH SINGLE MALT LIMITED RELEASE HIGHLAND 93.6PF 30YR 750ML
                </Link>
                </td>
                <td> <input type="number" placeholder="1" /></td>
                <td> <span className="price">$799.99</span></td>
                <td> <span className="price">$799.99</span></td>
                <td>
                  <div className="delete">
                    <img src={deleteIcon} alt="deleteIcon" />
                  </div></td>
              </tr>
              <tr>
                <td>
                  <Link to="">
                    <img src="https://remedy-varnishcdn-ebizon.netdna-ssl.com/pub/media/catalog/product/cache/2f58bf1051a2f0ceba166b720ec0a490/2/0/2018_ggn_30yr_bottle_and_open_box_150dpi.jpg" alt="" />
                  </Link>
                </td>
                <td>
                  <Link to=""> GLENGOYNE SCOTCH SINGLE MALT LIMITED RELEASE HIGHLAND 93.6PF 30YR 750ML
                </Link>
                </td>
                <td> <input type="number" placeholder="1" /></td>
                <td> <span className="price">$799.99</span></td>
                <td> <span className="price">$799.99</span></td>
                <td>
                  <div className="delete">
                    <img src={deleteIcon} alt="deleteIcon" />
                  </div></td>
              </tr>
            </tbody>
          </table>
          <UpdateShopping />
        </div>
        <Summary />
      </div>
      <GiftOptions />
    </div>

  );
};
export default ShoppingCart;
