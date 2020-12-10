import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import { 
  heart,
  share 
} from '../../../assets/img';

export const ProductListItem = props => {
  return(
    <div className="container-prodList" >
      <div className="img-wrapper">      
      <div className="add-to-links-secondary">
        <Link 
          to="/customer-login" 
          className="action wishlist" 
          data-action="add-to-wishlist" 
          title="Wishlist">
          <img src={heart} alt="heart"/>
        </Link>
        <Link 
          to="/customer-login" 
          className="action compare" 
          title="Compare">
          <img src={share} alt="share"/>
        </Link>
      </div>
        <img 
          className="main-img" 
          alt="img" 
          src={props.src}
        />
      </div>
      <div className="product-item-details" >
        <div className='product name product-item-name'>
        {props.name}
        </div>
     <div className="price">
        ${props.price}
      </div>
      <div className='product description product-item-description'>
            <p>{props.description}</p>
        </div>
        <div><a href="https://remedyliquor.com/wine/insignia-napa-red-wine-2008-10.html">Learn more</a></div>
      <Link 
        to="/" 
        className="redish">
          Add to Cart
      </Link>
      <div className="stock-info">
        {props.stock}
      </div>

      </div>


    </div>
  )
}