import React from 'react';

import './style.scss';

export const BestSellerItem = (props) => {

  return(
    <div className="wrapper-bsi">
      <img className="item" alt="" src={props.src}/>
      <div className="item">
          <span className="name">{props.name}</span>
          <a href="">text</a>
          <span className="price">{props.price}</span>
      </div>
    </div>
  )
}

