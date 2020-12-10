import React from 'react';
import {Link} from 'react-router-dom'
import './style.scss';

export const MenuInnerContentFourth = () => {

  return (
    <div className="container-menu-innerContentFourth">
    <div className="item nav-1">
      <h3>Gift Sets</h3>
      <Link to="/types/gift-sets/gift-baskets">Gift Baskets <img src="../../assets/img/icons/right-arrow.svg" alt=""/></Link>
      <Link to="/types/gift-sets/engraving">Engraving <img src="../../assets/img/icons/right-arrow.svg" alt=""/></Link>
      <Link to="/types/gift-sets/chocolates">Chocolates <img src="../../assets/img/icons/right-arrow.svg" alt=""/></Link>
      <Link to="/types/gift-sets/decorative-bottles">Decorative Bottles <img src="../../assets/img/icons/right-arrow.svg" alt=""/></Link>
      <Link to="/types/gift-sets/gift-sets">Gift Sets <img src="../../assets/img/icons/right-arrow.svg" alt=""/></Link>
    </div>
    <div className="item nav-2">
      <Link to="/types/gift-sets/gift-baskets" className="heading">Gift Baskets</Link>
      <Link to="/types/gift-sets/engraving" className="heading">Engraving</Link>
      <Link to="/types/gift-sets/chocolates" className="heading">Chocolates</Link>

    </div>
    <div className="item">
      <Link to="/types/gift-sets/decorative-bottles" className="heading">Decorating bottles</Link>
      <Link to="/types/gift-sets/gift-sets" className="heading">gift sets</Link>
    </div>
  </div>
  )
}


