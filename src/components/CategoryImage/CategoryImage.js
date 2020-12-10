import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import './style.scss';

const CategoryImage = ({ copyDetalis, type, category }) => {

    const [scrollY, setScrollY] = useState(window.pageYOffset);

    const windowHandleScroll = debounce(() => {
        setScrollY(window.pageYOffset);
    }, 8);

    useEffect(() => {
        window.addEventListener('scroll', windowHandleScroll);
        return () => {
            window.removeEventListener('scroll', windowHandleScroll);
        };
    }, [scrollY, windowHandleScroll]);

    return (
        <div className='category-image-content' >
            <header className={"page-header"} style={copyDetalis.image ? { height: 330 } : { height: 3 }} >
                {copyDetalis.image && <img src={`http://liquornearme.test/category-images/${copyDetalis.image}`} alt="header" />}
                <div className="h2-container">
                    <div className="h2-content">
                        <h2>{type ? `${type} ${category}` : category} </h2>
                    </div>
                </div>
            </header>

        </div>
    );
};

export default React.memo(CategoryImage);
