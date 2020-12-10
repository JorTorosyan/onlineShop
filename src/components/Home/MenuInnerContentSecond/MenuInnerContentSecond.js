import React from 'react';
import {Link} from 'react-router-dom'

import './style.scss';

export const MenuInnerContentSecond = () => {

  return(
       <div className="container-menu">
        <div className="item nav-1">
            <h3>Spirits</h3>
            <Link to="/types/spirits/brandy">Brandy Cognac <img src="../../assets/img/icons/right-arrow.svg" alt=""/></Link>
            <Link to="/types/spirits/gin">Gin <img src="../../assets/img/icons/right-arrow.svg" alt=""/></Link>
            <Link to="/types/spirits/liqueur">Liqueurs <img src="../../assets/img/icons/right-arrow.svg" alt=""/></Link>
            <Link to="/types/spirits/rum">Rum <img src="../../assets/img/icons/right-arrow.svg" alt=""/></Link>
            <Link to="/types/spirits/tequila">Tequila<img src="../../assets/img/icons/right-arrow.svg" alt=""/></Link>
            <Link to="/types/spirits/vodka">Vodka <img src="../../assets/img/icons/right-arrow.svg" alt=""/></Link>
            <Link to="/types/spirits/scotch">Scotch <img src="../../assets/img/icons/right-arrow.svg" alt=""/></Link>
            <Link to="/types/spirits/whiskey">Whiskey <img src="../../assets/img/icons/right-arrow.svg" alt=""/></Link>
            <Link to="/types/spirits/mixers">Mixers <img src="../../assets/img/icons/right-arrow.svg" alt=""/></Link>
            <Link to="/types/spirits/grappa">Grappa <img src="../../assets/img/icons/right-arrow.svg" alt=""/></Link>
            <Link to="/types/spirits/bourbon">Bourbon <img src="../../assets/img/icons/right-arrow.svg" alt=""/></Link>
            <Link to="/types/spirits/mezcal">Mezcal <img src="../../assets/img/icons/right-arrow.svg" alt=""/></Link>
            <Link to="/types/spirits/arak">Arak <img src="../../assets/img/icons/right-arrow.svg" alt=""/></Link>
            <Link to="/types/spirits/rtd">RTD <img src="../../assets/img/icons/right-arrow.svg" alt=""/></Link>
        </div>
        <div className="item nav-2">
            <Link to="/types/spirits/brandy" className="heading">Brandy Cognac</Link>
            <Link to="/types/spirits/gin" className="heading">Gin</Link>
            <Link to="/types/spirits/liqueur" className="heading">Liqueures</Link>
            <Link to="/types/spirits/rum" className="heading">Rum</Link>
            <Link to="/types/spirits/tequila" className="heading">Tequila</Link>
            <Link to="/types/spirits/vodka" className="heading">Vodka</Link>
            <Link to="/types/spirits/scotch" className="heading">Scotch</Link>
        </div>
        <div className="item">
            <Link to="/types/spirits/whiskey" className="heading">Whiskey</Link>
            <Link to="/types/spirits/mixers" className="heading">Mixers</Link>
            <Link to="/types/spirits/grappa" className="heading">Grappa</Link>
            <Link to="/types/spirits/bourbon" className="heading">Bourbon</Link>
            <Link to="/types/spirits/mezcal" className="heading">Mezcal</Link>
            <Link to="/types/spirits/arak" className="heading">Arak</Link>
            <Link to="/types/spirits/rtd" className="heading">Rtd</Link>
        </div>
        <div className="item slider">
        </div>
    </div>
  )
}

