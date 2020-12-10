import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';

import './style.scss';
import { Link } from 'react-router-dom';

const Header = ({ category, type, subcategory, params }) => {

    const changeCaseFirstLetter = (str) => {
        if (typeof str === 'string') {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
        return null;
    };
    const changeCaseFirstLetterToLow = (str) => {
        if (typeof str === 'string') {
            return str.charAt(0).toLowerCase() + str.slice(1);
        }
        return null;
    };
    const [scrollY, setScrollY] = useState(window.pageYOffset);

    const windowHandleScroll = debounce(() => {
        setScrollY(window.pageYOffset);
    }, 4);

    useEffect(() => {
        window.addEventListener('scroll', windowHandleScroll);
        return () => {
            window.removeEventListener('scroll', windowHandleScroll);
        };
    }, [scrollY, windowHandleScroll]);

    // console.log('category, type, params', category, type, params);

    return (
        <div className={'urls'}>
            <div className="innerUrls">
                <Link to="/">
                    Home
                </Link>
                <Link to={{ pathname: `/${changeCaseFirstLetterToLow(category)}` }} >
                    {category && '/ '}
                    <span className="innerUrlsSpan">
                        {changeCaseFirstLetter(category)}
                    </span>
                </Link>
                {type && ' /  '}
                <span className="innerUrlsSpan">
                    {changeCaseFirstLetter(type)}{' '}
                    {/* {type && changeCaseFirstLetter(params)} */}
                </span>
                {subcategory && ' / '}
                <span className="innerUrlsSpan">
                    {changeCaseFirstLetter(subcategory)}
                </span>
            </div>
        </div>
    );
};

export const HeaderMemo = React.memo(Header);
