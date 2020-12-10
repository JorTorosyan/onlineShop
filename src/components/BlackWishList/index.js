import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartModal from './cartModal';
import { Link } from 'react-router-dom';
import { CheckModal } from '../index';
import cookie from "react-cookie";
import { user, cartshopwhite, login } from '../../assets/img/index';
import { LoggedIn, EmptyUserProfile } from "../../actions/login";
import './style.scss';
import { connect } from "react-redux";
import CallService from './../../util/CallService';
import { CreateCart } from "../../actions/cart";
import { ChangeLoader } from "../../actions/loader";
import { showCard } from "../../actions/cart";

const BlackWishList = (props) => {

  const [isShowModal, setIsShowModal] = useState(false);
  const cardButtonRef = useRef(null);
  const ref = React.createRef(null);
  const dispatch = useDispatch();

  const handleClickOutside = useCallback((event) => {
    if (ref.current && !ref.current.contains(event.target) &&
      !cardButtonRef.current.contains(event.target)) {
      setIsShowModal(false);
    }
  }, [ref]);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside, ref]);



  const logout = () => {
    props.dispatch(ChangeLoader(true));
    CallService.logout()
      .then(data => {
        if (data.code && data.code === 200) {
          props.dispatch(ChangeLoader(false));
          cookie.remove("Authorization");
          props.dispatch(EmptyUserProfile());
          props.dispatch(LoggedIn(false));
          props.dispatch(CreateCart({ count: 0, products: [] }));
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  const state = useSelector(state => state.CartOpenReducer);
  const { showModal } = state;

  const handleShowModal = () => {
    dispatch(showCard(false));
    setIsShowModal(!isShowModal);
  };

  useEffect(() => {
    if (showModal) {
      setIsShowModal(true);
    }
  }, [state, showModal]);


  return (
    <>
      <CheckModal />
      <div className="wrapper-wishlist" >
        <div className="container-black">
          <div className="item">
            <Link to="/constant-contact">Exclusive Mailing List</Link>
            <Link to="/blog">Remedy Recipes</Link>
            <Link to="/customer-login">Events</Link>
            <Link to="/customer-login">My Wishlist</Link>
          </div>
          <div className="item">
            {!props.login && <Link to="/customer-login">
              <div className="flex-wrapper">
                <div><img src={user} alt='user' /></div>
                <span>My Account</span>
              </div>
            </Link>}
            {props.login && <Link to="/customer">
              <div className="flex-wrapper">
                <div><img src={user} alt='user' /></div>
                <span>My Account</span>
              </div>
            </Link>}
            <div className="flex-wrapper">
              <div>
                <img src={cartshopwhite} alt="" />
              </div>
              <span ref={cardButtonRef} style={{ position: 'relative', marginRight: 26 }}
                onClick={handleShowModal} >My Cart<span className="quantity">{props.cart.count}</span></span>
            </div>

            {isShowModal && <CartModal show={props.showModal} onClick={(e) => handleClickOutside(e)} />}
            {!props.login && <Link to="/customer-login" style={{ marginRight: 15 }} >
              <div className="flex-wrapper">
                <div>
                  <img src={login} alt="" />
                </div>
                <span>Login</span>
              </div>
            </Link>}
            {props.login &&
              <div className="flex-wrapper">
                <div>
                  <img src={login} alt="" />
                </div>
                <span className="spanLogOut" onClick={logout}>Log out</span>
              </div>}

          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = state => {
  return {
    login: state.userAgent.login,
    state: state,
    cart: state.cart,
  };
};
export default connect(mapStateToProps)(BlackWishList);


