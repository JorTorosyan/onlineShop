import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { banners } from '../../../util/service-urls';
import Loader from 'react-loader-spinner';
import { debounce } from 'lodash';
import './styles.scss';

const MainSlider = ({ Banners, isLoading }) => {

  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    adaptiveHeight: true
  };
  const items = Banners.banners;
  const [scrollY, setScrollY] = useState(window.pageYOffset);

  const windowHandleScroll = debounce(() => {
    setScrollY(window.pageYOffset);
  }, 8);
  useEffect(() => {
    window.addEventListener('scroll', windowHandleScroll);
    return () => {
      window.removeEventListener('scroll', windowHandleScroll);
    };
  }, [scrollY]);


  return (
    <div className="mainSlider-wrapper">
      {isLoading ? <Loader
        className='loader'
        type="Oval"
        color="#ae1d14"
        height={320}
        width={40}
        style={{ textAlign: 'center' }}
      /> :
        <Slider {...settings}>
          {items && items.length > 0 && items.map(el => (
            <Link to='/' key={el.filename}>
              <img style={scrollY === 0 ? { marginTop: 0 } : {}}
                src={`${banners}${el.filename}`}
                alt="main-slider"
              />
            </Link>
          ))}
        </Slider>}
    </div>
  );
};
export const MainSliderMemo = React.memo(MainSlider);
