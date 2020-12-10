import React from 'react';
import './style.scss';


const AdvancedSearch = (props) => {
    return (
        <>
            <div className="advenced-container">
                <h1>Advanced Search</h1>
                <h2>Search Settings</h2>
                <div className="form-container">
                    <form action="submit">
                        <div className="input-content">
                            <label htmlFor="name">Product Name</label>
                            <input type="text" />
                        </div>
                        <div className="input-content">
                            <label htmlFor="name">Description </label>
                            <input type="text" />
                        </div>
                        <div className="input-content">
                            <label htmlFor="name">Short Description </label>
                            <input type="text" />
                        </div>
                        <div className="input-content">
                            <label htmlFor="name">SKU </label>
                            <input type="text" />
                        </div>
                        <div className="input-content prize">
                            <label htmlFor="name" >Price</label>
                            <input type="text" className='inpOne' />
                            <span style={{margin: '0 1%'}} >{' - '}</span>
                            <input type="text" className='inpTwo' />
                            <span style={{fontWeight:'700'}}>{' USD '}</span>
                        </div>
                        <div className="input-content">
                            <label htmlFor="name">Manufacturer</label>
                            <select id="Manufacturer" >
                                <option value="email">Bacardi</option>
                                <option value="ZIP code">Beam Suntory</option>
                                <option value="email">Diageo</option>
                                <option value="ZIP code">Macallan</option>
                            </select>
                        </div>
                        <div className="input-content">
                            <label htmlFor="name">Category</label>
                            <select id="Category" >
                                <option value="email">Bredny Cognac</option>
                                <option value="ZIP code">Gin</option>
                                <option value="email">Rum</option>
                                <option value="ZIP code">Tequila</option>
                            </select>
                        </div>
                        <div className="input-content">
                            <label htmlFor="name">ALU</label>
                            <input type="text" />
                        </div>
                        <div className="input-content">
                            <label htmlFor="name">Size</label>
                            <select id="Country" >
                                <option value="email">All</option>
                                <option value="ZIP code">0</option>
                                <option value="email">2xl</option>
                            </select>
                        </div>
                        <div className="input-content">
                            <label htmlFor="name">Wine Country</label>
                            <select id="Country" >
                                <option value="email">Armenia</option>
                                <option value="ZIP code">Argentina</option>
                                <option value="email">Russia</option>
                                <option value="ZIP code">Chile</option>
                            </select>
                        </div>
                        <button>Search</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default AdvancedSearch;