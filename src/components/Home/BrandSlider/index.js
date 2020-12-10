import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Loader from 'react-loader-spinner';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { URLBrands } from '../../../util/service-urls';
import './style.scss';

export const BrandSlider = ({ Brands, isLoading }) => {
  const [windowWidth, setWindowWidth] = useState(window.screen.width);

  const handleWindowResize = useCallback(() => setWindowWidth(window.screen.width), []);
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  const { brands } = Brands;
  function numberOfSlideProd(numOfProd) {
    if (windowWidth < 420) {
      numOfProd = 1;
    }
    if (windowWidth < 769 && windowWidth > 420) {
      numOfProd = 2;
    }
    if (windowWidth > 769 && windowWidth < 1025) {
      numOfProd = 4;
    }
    if (windowWidth > 1250) {
      numOfProd = 5;
    }
    return numOfProd;
  }
  function crateTrue(bool) {
    if (brands && brands.length > 5) {
      bool = true;
    } else {
      bool = false;
    }
    return bool;
  }

  const settings = {
    infinite: crateTrue(),
    speed: 200,
    slidesToShow: numberOfSlideProd(),
    slidesToScroll: 1,
    autoplay: true,
  };



  return (
    <div className="brandProducts-wrapper">
      <h4>SHOP BY BRAND</h4>
      {isLoading ? <Loader
        className='loader'
        type="Oval"
        color="#ae1d14"
        height={320}
        width={40}
      /> :
        <Slider {...settings}>
          {brands && brands.length > 0 && brands.map(el => (
            <Link to='/' key={el.name}>
              <img alt='slider-img' src={`${URLBrands}${el.dashboard_image}`} />
            </Link>
          ))}
        </Slider>}
    </div>
  );
};