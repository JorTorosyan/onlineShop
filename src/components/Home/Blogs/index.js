import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import './style.scss';

export const Blogs = () => {
  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,      
  }

  return(
    <div className="blog-wrapper">
      <h4>Blogs</h4>
      <Slider {...settings}>
        <Link to='/blog'>
          <div>
            <img src="https://remedy-varnishcdn-ebizon.netdna-ssl.com/pub/media/wysiwyg/The-Next-Generation-of-Spiced-Rums-720x720-article.jpg" alt="blog-img"/>
          </div>
          <p>Five Incredible Spiced Rums for Under $50</p>
        </Link>
        <Link to='/blog'>
          <div>
            <img src="https://remedy-varnishcdn-ebizon.netdna-ssl.com/pub/media/wysiwyg/henry_mckenna_send_out_2.jpg" alt="img"/>
          </div>
          <p> Henry McKenna 10 Year Wins Best in Show Whiskey at SFWSC</p>
        </Link>
        <Link to='/blog'>
          <div>
            <img src="https://remedy-varnishcdn-ebizon.netdna-ssl.com/pub/media/wysiwyg/Ararat_brandy__cognac__bottles.jpg" alt="img"/>
          </div>
          <p>Armenian Brandy: Is It Cognac?</p>
        </Link>
        <Link to='/blog'>
          <div>
            <img src="https://remedy-varnishcdn-ebizon.netdna-ssl.com/pub/media/wysiwyg/Ararat_brandy__cognac__bottles.jpg" alt="img"/>
          </div>
          <p>Armenian Brandy: Is It Cognac?</p>
        </Link>
        <Link to='/blog'>
          <div> 
            <img src="https://remedy-varnishcdn-ebizon.netdna-ssl.com/pub/media/wysiwyg/henry_mckenna_send_out_2.jpg" alt="img"/>
          </div>
          <p> Henry McKenna 10 Year Wins Best in Show Whiskey at SFWSC</p>
        </Link>
      </Slider>
      <div className="container-btn">
        <button>View more</button>
      </div>
  </div>
  )
}