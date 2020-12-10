import React from 'react'
import { Link } from 'react-router-dom'
import { rightArrow } from '../../../assets/img'
import './style.scss'

 const MenuInnerContentThird = ({ title }) => {
  const prodNameBeer = ['domestic', 'imported']
  const prodNamePreOrder = ['wine-futures', 'spirits']
  
  function crateNameBeer(name) {
    if (title === 'beer') {
      name = prodNameBeer[0]
    } else {
      name = prodNamePreOrder[0]
    }
    return name
  }
  function crateNamePreOrder(name) {
    if (title === 'pre-order') {
      name = prodNamePreOrder[1]
    } else {
      name = prodNameBeer[1]
    }
    return name
  }

  return (
    <div className="container-menu-innerContentThird">
      <div className="item nav-1">
        <h3>{title}</h3>
        <Link to={{
          pathname: `/types/${title}/${crateNameBeer()}`
        }}  >
          {crateNameBeer().replace(/-/g, " ")}
          <img src={rightArrow} alt="arrow" />
        </Link>
        <Link to={{
          pathname: `/types/${title}/${crateNamePreOrder()}`
        }}
        >
          {crateNamePreOrder().replace(/-/g, " ")}
          <img src={rightArrow} alt="arrow" />
        </Link>
      </div>
      
      {/* nav-2 */}
      <div className="item nav-2">
        <Link to={{
          pathname: `/types/${title}/${crateNameBeer()}`
        }}
          className="heading">
          {crateNameBeer().replace(/-/g, " ")}
        </Link>
      </div>
      <div className="item">
        <Link to={{
          pathname: `/types/${title}/${crateNamePreOrder()}`
        }}
          className="heading">
          {crateNamePreOrder().replace(/-/g, " ")}
        </Link>
      </div>
    </div>
  )
}
export const MemoizedMenuInnerContentThird = React.memo(MenuInnerContentThird);
