import React from 'react';

import './style.scss';

export const GridCubics = () => {
    
  return (
    <div className="container-cubic">
        <div className="wrapper wrapper-1">
            <div className="item">
                <a href="/categories/gift-sets">
                    <img src="https://remedy-varnishcdn-ebizon.netdna-ssl.com/pub/media/wysiwyg/gift-sets.jpg" alt="img"/>
                </a>
            </div>
            <div className="item">
                <a href="/categories/gift-baskets">
                    <img src="https://remedy-varnishcdn-ebizon.netdna-ssl.com/pub/media/wysiwyg/Girft-baskets.jpg" alt="img"/>
                </a>
            </div>
            <div className="item">
                <a href="/categories/accessories">
                    <img src="https://remedy-varnishcdn-ebizon.netdna-ssl.com/pub/media/wysiwyg/accessories.jpg" alt="img"/>
                </a>
            </div>
        </div>
        <div className="wrapper wrapper-2">
            <div className="item">
                <a href="/spirits">
                    <img src="https://remedy-varnishcdn-ebizon.netdna-ssl.com/pub/media/wysiwyg/SPIRITS.jpg" alt="img"/>
                </a>
            </div>
            <div className="item">
                <a href="/events">
                    <img src="https://remedy-varnishcdn-ebizon.netdna-ssl.com/pub/media/wysiwyg/WINes.jpg" alt="img"/>
                </a>
            </div>
        </div>
        <div className="wrapper wrapper-3">
            <div className="item">
                <a href="/categories/specials">
                  <img src="https://remedy-varnishcdn-ebizon.netdna-ssl.com/pub/media/wysiwyg/Specials.jpg" alt="img"/>
                </a>
            </div>
            <div className="item">
                <a href="/coupons">
                  <img src="https://remedy-varnishcdn-ebizon.netdna-ssl.com/pub/media/wysiwyg/Coupons.jpg " alt="img"/>
                </a>
            </div>
            <div className="item">
                <a href="/categories/sale">
                  <img src="https://remedy-varnishcdn-ebizon.netdna-ssl.com/pub/media/wysiwyg/Sale-Banner.jpg" alt="img"/>
                </a>
            </div>
        </div>
    </div>
  )
}
