import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderMemo } from '../../../components/Header/Header';
import { Link } from 'react-router-dom';
import { increaseCount, decreaseCount, validCount } from './actions';

import './style.scss';
import { mail, heart, share } from '../../../assets/img';

const AddToCart = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.addToCardState.count);
    const [target, setTarget] = useState('detalis');
    const changeValue = (e) => {
        dispatch({ type: "SET_INPUT_VALUE", payload: e.target.value });
    };
    const handleChangeIncrement = () => {
        dispatch(increaseCount());
    };
    const handleChangeDecrement = () => {
        dispatch(decreaseCount());
    };
    useEffect(() => {
        if (count < 0 || count === 0) {
            dispatch(validCount());
        }
    }, [count]);

    const handleToLocalStorege = () => {
        localStorage.setItem('imgSrc', 'https://remedy-varnishcdn-ebizon.netdna-ssl.com/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/2/0/2016-alpha-omega-era-proprietary-red-napa-valley_main-1.jpg');
        localStorage.setItem('h1', 'ALPHA OMEGA ERA RED WINE NAPA 2016');
    };
    const category = " winecategory";

    return (
        <>
            <HeaderMemo category={category} />
            <div className="card-container">
                <div className="item img-wrapper">
                    <img src="https://remedy-varnishcdn-ebizon.netdna-ssl.com/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/2/0/2016-alpha-omega-era-proprietary-red-napa-valley_main-1.jpg" alt="img" />
                </div>
                <div className="item">
                    <h1>ALPHA OMEGA ERA RED WINE NAPA 2016</h1>
                    <p><span className="avail">Availability:</span> In stock</p>
                    <p className="price">$269.99</p>
                    <p><span className="avail">SKU</span>  39996951300001</p>
                    <div className="special_engraving-content">
                        <form action="">
                            <p>Special Engraving  <span>+ $25.00</span> </p>
                            <input type="text" />
                        </form>
                        <div className="num-charachter"><i className="fas fa-caret-up" ></i>
                        Maximum number of characters: <span>70</span></div>
                    </div>
                    <div className="add-btn-wrapper">
                        <input className="number" onChange={changeValue} value={count} />
                        <div className="plus-minus-wrapper">
                            <i onClick={handleChangeIncrement} className="fas fa-plus"></i>
                            <i onClick={handleChangeDecrement} className="fas fa-minus"></i>
                        </div>
                        <button onClick={handleToLocalStorege} >
                            <i className="fas fa-shopping-bag"></i>
                        Add to cart</button>
                    </div>
                    <div className="share-like-section">
                        <Link to="">
                            <img src={mail} alt="mail" />
                        </Link>
                        <Link to="">
                            <img src={heart} alt="heart" />
                        </Link>
                        <Link to="" style={{ marginLeft: 20 }} >
                            <img src={share} alt="share" />
                        </Link>
                    </div>
                </div>

                <div className="more-info-wrapper">
                    <div className="detalis-wrapper">
                        <div>
                            <h2 onClick={() => setTarget('detalis')}
                                className={target === "detalis" ? "active" : null}>Details</h2>

                        </div>
                        <div >
                            <h2 onClick={() => setTarget('more_information')}
                                className={target === "more_information" ? "active" : null}
                            >More information</h2>
                        </div>
                        <div>
                            <h2 onClick={() => setTarget('reviews')}
                                className={target === "reviews" ? "active" : null}
                            >Reviews</h2>

                        </div>
                    </div>
                    <div className="text-content">
                        <div style={target === "detalis" ? { display: 'block' } : { display: 'none' }} >Opaque, dark ruby color introduces this wine that expresses dark fruit aroma and flavors. With spicy sweet oak complexity, the wine exudes dark fruit such as blackberry, black currant, blueberry and dark cherry. There are nuances of dark chocolate, chocolate berry truffle dusted with cocoa powder, cola, aromatic cedar, cinnamon, clove, graham crackers and a hint of tobacco. The body is very full with a soft entry, coupled with dark cherry/berry flavors that develop from start to finish. With great texture and mouth feel, this Cabernet is full-bodied, rich and opulent.</div>
                        <div style={target === "more_information" ? { display: 'block' } : { display: 'none' }} >
                            <ul>
                                <li><span className="list" >Manufacturer</span>   <span className="country">N/A</span>  </li>
                                <li><span className="list">Product is For Sale </span> <span className="country">N/A</span> </li>
                                <li><span className="list">Wine Score</span>   <span className="country">No</span></li>
                                <li><span className="list">Wine Country</span> <span className="country">USA</span></li>
                                <li><span className="list">Call For Price</span> <span className="country">No</span></li>
                            </ul>
                        </div>
                        <div style={target === "reviews" ? { display: 'block' } : { display: 'none' }} >
                            <div className="message-info">
                                <span>Only registered users can write reviews. Please
                                <Link to='/customer-login'>{" "}SIGN IN </Link> or {" "}
                                    <Link to='/customer-sign-up'> CREATE AN ACCOUNT</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default AddToCart;
