import React from 'react';
import ReactPaginate from 'react-paginate';

import './style.scss';
import { FaListUl } from 'react-icons/fa';
import { FiGrid } from 'react-icons/fi';

export function Settings(props) {

  return (
    <div className="settings-container">
      <div className="wrapper">
        <div className="item" id='list'>
          <FiGrid onClick={props.hanldeChangeGrid}
            style={props.isGrid ? { color: '#ae0814' } : { color: 'black' }}
            size='1.3em' className='grid-icon' />
          <FaListUl
            onClick={props.handleChangeList} size='1.3em'
            style={props.isList ? { color: '#ae0814' } : { color: 'black' }}
            className='list-icon' />
        </div>
        <div className="item">
          <label htmlFor="sortby">Sort by</label>
          <select name="sortby" id="sortby"
            value={props.sortByValue}
            onChange={e => props.selectValue(e)}>
            <option value="">Position</option>
            <option value="best_seller">best seller</option>
            <option value="name">product name</option>
            <option value="price">price</option>
            <option value="wine_score">wine score</option>
          </select>
        </div>
        <div className="item" >
          <label htmlFor="Show" >Show</label>
          <select value={props.showValue} name="Show" onChange={e => props.selectNumber(e)}
            style={{ width: 60 }} id="show">
            <option value="9">9</option>
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="60">60</option>
            <option value="90">90</option>
          </select>
        </div>
        {props.pageCount > 1 && <div className="item" id='pagination' >
          <div className="text-xs-center">
            <ReactPaginate
              onPageChange={(i) => props.onChangePage(i)}
              pageCount={props.pageCount}
              pageRangeDisplayed={3}
              marginPagesDisplayed={1}
              disableInitialCallback={true}
              forcePage={props.selectPage}
            />
          </div>
        </div>}
      </div>
    </div>
  );
}
