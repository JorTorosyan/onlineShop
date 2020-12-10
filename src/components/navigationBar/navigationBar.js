import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Search } from '../../components/Search';
import { Link } from 'react-router-dom';
import { debounce } from 'lodash';

import {
  MenuInnerContentFirst,
  MenuInnerContentSecond,
  MemoizedMenuInnerContentThird,
  MenuInnerContentFourth
} from '../index';
import BlackWishList from '../BlackWishList/index';
import { logo } from '../../assets/img';
import WarningMessage from '../../components/Messages/WarningMessage/WarningMessage';
import SuccessMessage from '../../components/Messages/SuccessMesage/SuccessMesage';
import { succMessageCreate, warnMessageCreate } from '../../actions/message';
import './style.scss';

const NavigationBar = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [scrollY, setScrollY] = useState(window.pageYOffset);
  const messageState = useSelector((state) => state.messageReducer);
  const { warnMessage, succMessage } = messageState;


  if (succMessage) {
    setTimeout(() => {
      dispatch(succMessageCreate(''));
    }, 8000);
  }

  if (warnMessage) {
    setTimeout(() => {
      dispatch(warnMessageCreate(''));
    }, 8000);
  }


  const windowHandleScroll = debounce(() => {
    setScrollY(window.pageYOffset);
  }, 8);

  useEffect(() => {
    window.addEventListener('scroll', windowHandleScroll);
    return () => {
      window.removeEventListener('scroll', windowHandleScroll);
    };
  }, [scrollY, windowHandleScroll]);
  //  style={scrollY === 0 ? { height: 120 } : { height: 85 }}
  //  (changePage ? ' move-to-top' : '' || ' move-to-bottom')className={'kernel-wrapper' + (isLoading ? ' load' : '')}
  return (
    <header className={"mainMenuNavigationBar" + (scrollY === 0 ? "" : " fix-header")} >

      {scrollY === 0 && <BlackWishList />}
      <div className="wrapper" style={scrollY === 0 ? { height: 120 } : { height: 85 }} >
        <div className="item logo" >
          <Link to="/"  ><img src={logo} alt="logo"
            style={scrollY === 0 ? { height: 120 } : {}} /></Link>
        </div>
        <div className="item nav-links">
          <div className="pos-abs-container">
            <div className="link-svg">
              <Link to="/categories/wine">Wine</Link>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
                <g>
                  <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" />
                </g>
              </svg>
            </div>
            <div className="pos-abs">
              <MenuInnerContentFirst />
            </div>
          </div>
          <div className="pos-abs-container">
            <div className="link-svg">
              <Link to="/categories/spirits">Spirits</Link>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" >
                <g>
                  <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" />
                </g>
              </svg>
            </div>
            <div className="pos-abs">
              <MenuInnerContentSecond />
            </div>

          </div>
          <div className="pos-abs-container">
            <div className="link-svg">
              <Link to="/categories/specials">Specials</Link>
            </div>
          </div>
          <div className="pos-abs-container">
            <div className="link-svg">
              <Link to="/categories/beer" onMouseEnter={() => setTitle('beer')} >Beer</Link>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
                <g>
                  <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" />
                </g>
              </svg>
            </div>
            <div className="pos-abs">
              <MemoizedMenuInnerContentThird
                title={title}
              />
            </div>

          </div>
          <div className="pos-abs-container">
            <div className="link-svg">
              <Link to="/categories/non-alcoholic">Non Alcoholic</Link>
            </div>
          </div>
          <div className="pos-abs-container">
            <div className="link-svg">
              <Link to="/categories/gift-sets">Gift sets</Link>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
                <g>
                  <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" />
                </g>
              </svg>
            </div>
            <div className="pos-abs">
              <MenuInnerContentFourth />
            </div>
          </div>
          <div className="pos-abs-container">
            <div className="link-svg">
              <Link to="/categories/pre-order" onMouseEnter={() => setTitle('pre-order')} >Pre-Order</Link>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
                <g>
                  <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" />
                </g>
              </svg>
            </div>
            <div className="pos-abs">
              <MemoizedMenuInnerContentThird
                title={title}
              />
            </div>
          </div>
        </div>
        <div className="item">
          <Search />
        </div>
      </div>
      {scrollY === 0 && warnMessage && warnMessage.length > 0 && <WarningMessage message={warnMessage} />}
      {scrollY === 0 && succMessage && succMessage.length > 0 && <SuccessMessage message={succMessage} />}

    </header>
  );
};
export default NavigationBar;



