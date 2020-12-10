import React from 'react'
import './style.scss'

export function CompareProduct({Style}) {
  
    return (
        <div className="compare-and-wish-list-content" style={Style} >
            <div className="compare-product">
                <h2>COMPARE PRODUCTS</h2>
                <div className="line"></div>
                <p>You have no items to compare.</p>
            </div>

            <div className="my-wish-lsit-content">
                <p className="my-wish-list">MY WISH LIST</p>
                <div className="line"></div>
                <p className="items-count">You have no items in your wish list.</p>
            </div>
        </div>
    )
}
