import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import './style.scss'

export const NowShoppingBy = ({ prodCategory, clearProdCategory, ClearAllProduct, type,  subcategory }) => {
 return (
        <div className="now-shopping-by">
            <p>Now Shopping by</p>
            <ul>{prodCategory && prodCategory.map((el, i) =>
                <li key={i} >
                    <CloseIcon key={i} onClick={(e) => clearProdCategory(el)}
                        style={{ cursor: 'pointer', fontSize: 15, marginTop: 4 }} />
                    <span>{(!type &&  !subcategory && `type`) || (type && `subcategory`) } </span> : {el.replace(/_/g, " ")}
                </li>
            )}
            </ul>
            <p onClick={ClearAllProduct} style={{cursor: 'pointer'}}>Clear All</p>
        </div>
    )
}
