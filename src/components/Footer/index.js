import React from 'react';
import { Link } from 'react-router-dom';
import {
  mail,
  location
} from '../../assets/img/index';
import './style.scss';
import { NewsLetter } from '../index';


const Footer = () => {
  function scrollTop() {
    window.scrollTo(0, 0);
  }
  return (
    <div className="container-footer">
      <NewsLetter />
      <div className="wrapper">
        <div className="first-row item">
          <div><h5>Follow us</h5>
            <div className="icons-wrapper">
              <span>
                <a href='https://www.facebook.com/remedywineandspirits' target="blank" >
                  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 430.113 430.114">
                    <path id="Facebook" d="M158.081,83.3c0,10.839,0,59.218,0,59.218h-43.385v72.412h43.385v215.183h89.122V214.936h59.805
		c0,0,5.601-34.721,8.316-72.685c-7.784,0-67.784,0-67.784,0s0-42.127,0-49.511c0-7.4,9.717-17.354,19.321-17.354
		c9.586,0,29.818,0,48.557,0c0-9.859,0-43.924,0-75.385c-25.016,0-53.476,0-66.021,0C155.878-0.004,158.081,72.48,158.081,83.3z"/>
                  </svg>
                </a>
              </span>
              <span>
                <a href='https://twitter.com/remedyliquor' target="blank" >
                  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 612 612">
                    <path d="M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411
			c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513
			c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101
			c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104
			c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194
			c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485
			c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z"/>
                  </svg>
                </a>
              </span>
              <span>
                <a href='https://www.youtube.com/watch?v=ls6T5EU-MbI' target="blank" >
                  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 512 512" >
                    <path d="M490.24,113.92c-13.888-24.704-28.96-29.248-59.648-30.976C399.936,80.864,322.848,80,256.064,80
            			c-66.912,0-144.032,0.864-174.656,2.912c-30.624,1.76-45.728,6.272-59.744,31.008C7.36,138.592,0,181.088,0,255.904
            			C0,255.968,0,256,0,256c0,0.064,0,0.096,0,0.096v0.064c0,74.496,7.36,117.312,21.664,141.728
            			c14.016,24.704,29.088,29.184,59.712,31.264C112.032,430.944,189.152,432,256.064,432c66.784,0,143.872-1.056,174.56-2.816
            			c30.688-2.08,45.76-6.56,59.648-31.264C504.704,373.504,512,330.688,512,256.192c0,0,0-0.096,0-0.16c0,0,0-0.064,0-0.096
            			C512,181.088,504.704,138.592,490.24,113.92z M192,352V160l160,96L192,352z"/>
                  </svg>
                </a>
              </span>
              <span>
                <a href='https://www.instagram.com/remedyliquor' target="blank" >
                  <svg viewBox="0 0 512.00096 512.00096" xmlns="http://www.w3.org/2000/svg">
                    <path d="m373.40625 0h-234.8125c-76.421875 0-138.59375 62.171875-138.59375 138.59375v234.816406c0 76.417969 62.171875 138.589844 138.59375 138.589844h234.816406c76.417969 0 138.589844-62.171875 138.589844-138.589844v-234.816406c0-76.421875-62.171875-138.59375-138.59375-138.59375zm108.578125 373.410156c0 59.867188-48.707031 108.574219-108.578125 108.574219h-234.8125c-59.871094 0-108.578125-48.707031-108.578125-108.574219v-234.816406c0-59.871094 48.707031-108.578125 108.578125-108.578125h234.816406c59.867188 0 108.574219 48.707031 108.574219 108.578125zm0 0" /><path d="m256 116.003906c-77.195312 0-139.996094 62.800782-139.996094 139.996094s62.800782 139.996094 139.996094 139.996094 139.996094-62.800782 139.996094-139.996094-62.800782-139.996094-139.996094-139.996094zm0 249.976563c-60.640625 0-109.980469-49.335938-109.980469-109.980469 0-60.640625 49.339844-109.980469 109.980469-109.980469 60.644531 0 109.980469 49.339844 109.980469 109.980469 0 60.644531-49.335938 109.980469-109.980469 109.980469zm0 0" /><path d="m399.34375 66.285156c-22.8125 0-41.367188 18.558594-41.367188 41.367188 0 22.8125 18.554688 41.371094 41.367188 41.371094s41.371094-18.558594 41.371094-41.371094-18.558594-41.367188-41.371094-41.367188zm0 52.71875c-6.257812 0-11.351562-5.09375-11.351562-11.351562 0-6.261719 5.09375-11.351563 11.351562-11.351563 6.261719 0 11.355469 5.089844 11.355469 11.351563 0 6.257812-5.09375 11.351562-11.355469 11.351562zm0 0" /></svg>
                </a>
              </span>
              <span>
                <a href='https://www.yelp.com/biz/remedy-liquor-glendale' target="blank" >
                  <i className="fa fa-yelp fa-2x"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="item"><h5>REMEDY LIQUOR</h5>
          <Link to="/about" onClick={scrollTop()} >About us</Link>
          <Link to="/terms">Terms of use</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/contact">Contact us</Link>
        </div>
        <div className="item"><h5>EVENTS and INFO</h5>
          <Link to="/blogs">Blog</Link>
          <Link to="/events">Events</Link>
          <Link to="/associated-vendors">Associated Vendors</Link>
        </div>
        <div className="item"><h5>CUSTOMER SERVICE</h5>
          <Link to="/customer-service">Customer service</Link>
          <Link to="/track-orders">Track orders</Link>
          <Link to="/advanced-search">Advanced search</Link></div>
      </div>

      <div className="wrapper-item">
        <div className="wrapper">
          <div className="item"><h5>Get the App</h5></div>
          <div className="item location"><h5>STORE CONTACT</h5>
            <p><img src={location} alt="location" />
              <span>1700 W Glenoaks Blvd.,
              Glendale, CA 91201</span></p>
          </div>
          <div className="item non-heading mail">
            <img src={mail} alt="mail" />
            <div>
              <Link to="">info@remedyliquor.com, </Link>
              <Link to="">customerservice@remedyliquor.com</Link>
            </div>
          </div>
          <div className="item non-heading">
            <span>Glendale, CA:</span> 818.549.1055
          </div>
        </div>

        <div className="warning">
          <Link to="">
            <img src="https://remedy-varnishcdn-ebizon.netdna-ssl.com/pub/media/wysiwyg/download.png" alt="" />
          </Link>
        </div>
      </div>
      <div className="copyright">
        <p>COPYRIGHT © 2018 REMEDY LIQUOR - PLEASE ENJOY RESPONSIBLY.</p>
        <img src="https://remedy-varnishcdn-ebizon.netdna-ssl.com/pub/media/wysiwyg/payment.png" alt="" />
      </div>
    </div>
  );
};
export default Footer;