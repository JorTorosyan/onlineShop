import React, { useEffect, useState, useCallback } from 'react';
import Slider from "react-slick";
 import Loader from 'react-loader-spinner'
import ProductItem from '../ProductItem/index';
import { newProducts } from '../../../util/service-urls';
import './style.scss';

const Products = ({ title, Product, productType, isLoading }) => {
  const [windowWidth, setWindowWidth] = useState(window.screen.width);

  const handleWindowResize = useCallback(() => setWindowWidth(window.screen.width), [])
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  function numberOfSlideProd(numOfProd) {
    if (windowWidth < 420 ) {
      numOfProd = 1
    }
    if (windowWidth < 769 && windowWidth > 420) {
      numOfProd = 2
    }
    if (windowWidth > 769 && windowWidth < 1400) {
      numOfProd = 4
    }
    if (windowWidth > 1400) {
      numOfProd = 5
    }
    return numOfProd
  }
function crateTrue(bool){
 if(Product[productType] && Product[productType].length > 4){
  bool = true 
 }else{
   bool = false
 }
 return bool
}
 const settings = {
    infinite: crateTrue(),
    speed: 200,
    slidesToShow: numberOfSlideProd(),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    adaptiveHeight: true
  };
 
  return (
    <>
      <div className="newProducts-wrapper">
        <h4>{title}</h4>
        {isLoading ? <Loader
          className='loader'
          style={{ textAlign: 'center' }}
          type="Oval"
          color="#ae1d14"
          height={70}
          width={70}
        /> : <>
            <Slider {...settings} className='slide-carousel'>
              {Product[productType] && Product[productType].length > 0 && Product[productType].map(el => (
                <ProductItem
                  style={{ margin: 10 }}
                  key={el.id}
                  src={`${newProducts}${el.filename}`}
                  price={el.price}
                  name={el.name}
                  product={el}
                />
              )
              )}
            </Slider>
          </>}
      </div>
    </>
  )
}
export const MemoizedProduct = React.memo(Products);
