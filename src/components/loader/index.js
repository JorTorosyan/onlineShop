import React from "react";
import Loader from 'react-loader-spinner'
import './style.scss'
const PreLoader = () => {
    return (
        <div className="loaderDiv">
          {/*<div className="loaderMain">*/}
            <div className="spiner-wrap">
                <Loader
                    className='loader'
                    type="Oval"
                    color="#ae1d14"
                    height={320}
                    width={80}
                />
            </div>
          {/*</div>*/}
        </div>
    // <div className="loaderDiv">
    //     <div className="loaderMain"></div>
    // </div>
    );
};

export default PreLoader;
