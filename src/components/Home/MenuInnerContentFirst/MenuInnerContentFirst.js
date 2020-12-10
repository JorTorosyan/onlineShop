import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

import "react-responsive-carousel/lib/styles/carousel.min.css";

import './style.scss'
import { 
  bottle,
  importedWine,
  domesticWine,
  peachWine
} from '../../../assets/img';

export const MenuInnerContentFirst = () => {
  
  return(
    <>
        <div className="container-menu-InnerContentFirst">
        <div className="item nav-1">
          <h3>Wine</h3>
          <Link to="/types/wine/red">Red Wine <img src="../../assets/img/icons/right-arrow.svg" alt=""/></Link>
          <Link to="/types/wine/sparkling">Sparkling Wine <img src="../../assets/img/icons/right-arrow.svg" alt=""/></Link>
          <Link to="/types/wine/sake">Sake <img src="../../assets/img/icons/right-arrow.svg" alt=""/></Link>
          <Link to="/types/wine/white">White wine <img src="../../assets/img/icons/right-arrow.svg" alt=""/></Link>
          <Link to="">New wines <img src="../../assets/img/icons/right-arrow.svg" alt=""/></Link>
          <Link to="/types/wine/90pt">90pt Plus wines <img src="../../assets/img/icons/right-arrow.svg" alt=""/></Link>
        </div>
        <div className="item nav-2">
          <img width="10" src={ bottle } alt="Thumbnail"/>
          <Link to="/types/wine/red" className="heading">Red Wine</Link>
          <Link to="/subcategories/wine/red/shiraz">Shiraz </Link>
          <Link to="/subcategories/wine/red/merlot">Merlot </Link>
          <Link to="/subcategories/wine/red/cabernet-sauvignon">Cabernet Sauving </Link>
          <Link to="/subcategories/wine/red/malbec">Malbec </Link>
          <Link to="/subcategories/wine/red/pinot-noir">Pinot Noir </Link>
          <Link to="/subcategories/wine/red/zinfandel">Zinfandel </Link>
          <Link to="/subcategories/wine/red/sangiovese">Sangiovese </Link>
          <Link to="/subcategories/wine/red/barbera">Barbera </Link>
          <Link to="/subcategories/wine/red/red-blends">Red blends </Link>
          <Link to="/subcategories/wine/red/rose-wine">Rose Wine </Link>
          <Link to="/subcategories/wine/red/sangria">Sangria </Link>
          <Link to="/subcategories/wine/red/port">Port </Link>
          <Link to="/subcategories/wine/red/syrah">Syrah</Link>
        </div>
        <div className="item">
          <Link to="/types/wine/sparkling" className="heading">Sparkling Wine</Link>
          <Link to="/types/wine/sake" className="heading">Sake</Link>
          <Link to="/types/wine/white" className="heading">White wine</Link>
          <Link to="/subcategories/wine/white/chardonnay">Chardonnay </Link>
          <Link to="/subcategories/wine/white/sauvignon-blanc">Sauvignon Blanc </Link>
          <Link to="/subcategories/wine/white/semillon">Semillon </Link>
          <Link to="/subcategories/wine/white/moscato">Moscato </Link>
          <Link to="/subcategories/wine/white/pinot-grigio">Pinot Grigio</Link>
          <Link to="/subcategories/wine/white/gewurztraminer">Gewurztraminer </Link>
          <Link to="/subcategories/wine/white/riesling">Riesling </Link>
          <Link to="/subcategories/wine/white/white-blends">White blends </Link>
          <Link to="/subcategories/wine/white/sangria">Sangria </Link>
          <Link to="/subcategories/wine/white/viognier">Viognier </Link>
          <Link to="/subcategories/wine/white/chardonnay" className="heading">New Wines</Link>
          <Link to="/types/wine/90pt" className="heading">90pt Plus Wines</Link>
        </div>
        <div className="item slider">
          <Carousel 
                   showIndicators={false} 
                   showThumbs={false} 
                   showStatus={false}>
                  <div>
                      <img src={ importedWine } />
                      <p className="legend">Imported</p>
                  </div>
                  <div>
                      <img src={ domesticWine } />
                      <p className="legend">Legend 2</p>
                  </div>
                  <div>
                      <img src={ peachWine } />
                      <p className="legend">Legend 3</p>
                  </div>
          </Carousel>
        </div>
      </div>
    </>
  )
}