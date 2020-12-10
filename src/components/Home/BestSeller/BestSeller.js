import React from 'react';

import './style.scss';
import { BestSellerItem } from '../../index';

export const BestSeller = () => {
  
  return(
    <div className="container-best">
    <div className="wrapper">
      <div className="item description">
        <h4>Best seller</h4>
        <a href="" className="product">DON JULIO TEQUILA ANEJO 1942 750ML</a>
        <span className="price">$274.95</span>
        <p>DON JULIO 1942 ANEJO 750 ML. TEQUILA</p>
        <button>Add to cart</button>
      </div>
    <div className="item img-item">
      <img src="https://remedy-varnishcdn-ebizon.netdna-ssl.com/pub/media/catalog/product/cache/bf277c507def4438a27828d2b31aa8e0/d/o/don-julio-1942-anejo-tequila.jpg" alt=""/>
    </div>
    <div className="item">
      <BestSellerItem 
          src="https://remedy-varnishcdn-ebizon.netdna-ssl.com/pub/media/catalog/product/cache/f4a2bc458ca2feecb5750446998dc347/2/0/2015_wlw_nvmerlot_hr.jpg" 
          text="WHITEHALL LANE MERLOT NAPA  2015" 
          name="Merlot" 
          price="$26.99"/>
      <BestSellerItem 
          src="https://remedy-varnishcdn-ebizon.netdna-ssl.com/pub/media/catalog/product/cache/f4a2bc458ca2feecb5750446998dc347/l/i/lismore-21_1.jpg" 
          text="WHITEHALL LANE MERLOT NAPA  2015" 
          name="Scotch" 
          price="$25.99"/>
      <BestSellerItem 
          src="https://remedy-varnishcdn-ebizon.netdna-ssl.com/pub/media/catalog/product/cache/f4a2bc458ca2feecb5750446998dc347/2/0/2015_wlw_nvmerlot_hr.jpg" 
          text="WHITEHALL LANE MERLOT NAPA  2015" 
          name="Merlot" 
          price="$26.99"/>
    </div>
  </div>
  </div>
  )
}
