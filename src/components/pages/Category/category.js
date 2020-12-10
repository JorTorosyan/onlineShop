import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../../Home/ProductItem';
import { CollapseBlock } from '../../Collapse/index';
import { Settings } from '../../individualProducts/settings';
import { Redirect } from "react-router-dom";
import { ProductListItem } from '../../Home/productListItem';
import { getProductsDetalis, getCount } from './actions';
import { NowShoppingBy } from '../../NowShoppingBy/index';
import { HeaderMemo } from '../../Header/Header';
import { Categories, Types, Subcatigories, redWineSub, whiteWineSub } from './productArrays';
import CategoryImage from '../../CategoryImage/CategoryImage';
import MyOrders from '../Dashboard/MyOrders/MyOrders';
import Loader from 'react-loader-spinner';
// import PreLoader from '../../loader'
import './style.scss';


const Category = (props) => {

  const initialParameters = {
    category: '',
    type: [],
    subcategory: [],
    perPage: 9,
    orderBy: "price",
    order: "ASC",
    currentPage: 0,
    visibility: "catalog",
    price_from: 0,
    price_to: 17000,
    manufacturer: '',
    countries: [],
    main_type: '',
    main_subcategory: ''
  };
  const [isGrid, setIsGrid] = useState(true);
  const [isList, setIsList] = useState(false);
  const [checked, isChecked] = useState(false);
  const [showValue, setShowValue] = useState(9);
  const [sortByValue, setSortByValue] = useState('Position');
  const [selectPage, setSelectPage] = useState(0);
  const [isCheckforCountry, setIsCheckforCountry] = useState(false);

  const [parameters, setParameters] = useState({
    ...initialParameters
  });
  const productDetalis = useSelector(state => state.category.productDetalis);
  const collapse = useSelector(state => state.collapse);
  const isLoading = useSelector(state => state.category.isLoading);
  // const prodCount = useSelector(state => state.category.count)

  const { products } = productDetalis;
  const { connections } = collapse;
  const { details } = productDetalis;
  const { count } = productDetalis;


  const hanldeChangeGrid = () => {
    setIsGrid(true);
    setIsList(false);
  };
  const handleChangeList = () => {
    setIsList(true);
    setIsGrid(false);
  };


  const { category } = props.match.params; //wine
  const { type } = props.match.params; //red
  const { subcategory } = props.match.params; // shiraz


  useEffect(() => {
    let copyParameters = { ...initialParameters };
    copyParameters.category = category;
    if (type) {
      copyParameters.type.push(type);
      copyParameters.main_type = type;
    }
    if (subcategory) {
      copyParameters.subcategory.push(subcategory);
      copyParameters.main_subcategory = subcategory;
    }
    setParameters(copyParameters);
  }, [category, type, subcategory]);


  const onChangeManufactur = (targetManufac) => {
    setParameters({
      ...parameters,
      manufacturer: targetManufac
    });
    setFilterFlag(true);
  };


  const selectValue = e => {
    setSortByValue(e.target.value);
    setParameters({
      ...parameters,
      orderBy: e.target.value,
    });

  };

  const selectNumber = e => {
    setShowValue(e.target.value);
    setSelectPage(0);
    setParameters({
      ...parameters,
      perPage: e.target.value
    });
  };

  const checkforCountry = (e, value) => {
    setIsCheckforCountry(e.target.checked);
    setFilterCountry(value);
  };

  const setFilterCountry = value => {
    let countryArr = parameters.countries;
    if (!countryArr.includes(value)) {
      countryArr.push(value);
    } else {
      countryArr.splice(countryArr.indexOf(value), 1);
    }
    setParameters({
      ...parameters,
      countries: countryArr
    });
    setFilterFlag(true);
  };

  //immer
  const handleSelectToggle = value => {
    let typeArr = parameters.type;
    let subCatArr = parameters.subcategory;
    if (category && !type && !subcategory && !typeArr.includes(value)) {
      typeArr.push(value);
    } else {
      typeArr.splice(typeArr.indexOf(value), 1);
    }
    if ((type || subcategory) && !subCatArr.includes(value)) {
      subCatArr.push(value);
    } else {
      subCatArr.splice(subCatArr.indexOf(value), 1);
    }
    setParameters({
      ...parameters,
      type: typeArr,
      subcategory: subCatArr,
    });
    setFilterFlag(true);
  };

  const clearProdCategory = (value) => {
    let typeArr = parameters.type;
    let subCatArr = parameters.subcategory;
    if (typeArr.includes(value)) {
      typeArr.splice(typeArr.indexOf(value), 1);
    }
    if (subCatArr.includes(value)) {
      subCatArr.splice(subCatArr.indexOf(value), 1);
    }
    setParameters({
      ...parameters,
      type: typeArr,
      subcategory: subCatArr
    });
  };

  //check collapse checkbox
  const check = (e, value) => {
    isChecked(e.target.checked);
    let subCatArr = parameters.subcategory;
    let typeArr = parameters.type;
    if (category && !type && !subcategory && !subCatArr.includes(value)) {
      if (redWineSub.includes(value) && !typeArr.includes('red')) {
        typeArr.push('red');
      }
      if (whiteWineSub.includes(value) && !typeArr.includes('white')) {
        typeArr.push('white');
      }
      subCatArr.push(value);
    } else {
      subCatArr.splice(subCatArr.indexOf(value), 1);
      if (!subCatArr.some(el => redWineSub.includes(el))) {
        typeArr.includes('red') && typeArr.splice(typeArr.indexOf('red'), 1);
      }
      if (!subCatArr.some(el => whiteWineSub.includes(el))) {
        typeArr.includes('white') && typeArr.splice(typeArr.indexOf('white'), 1);
      }
    }
    setParameters({
      ...parameters,
      type: typeArr,
      subcategory: subCatArr
    });
    setFilterFlag(true);
  };

  const ClearAllProduct = () => {
    setParameters({
      ...parameters,
      type: [],
      subcategory: []
    });
  };


  const onChangePage = i => {
    setSelectPage(i.selected);
    setParameters({
      ...parameters,
      currentPage: i.selected + 1
    });

  };
  useEffect(() => {
    if (count) {
      setParameters({
        ...parameters,
        currentPage: 1
      });
      setSelectPage(0);
    }
  }, [parameters.type.length]);

  let pageCount = 0;
  pageCount = Math.ceil(count / parameters.perPage);


  const [value, setValue] = React.useState([0, 1000]);
  let [filterFlag, setFilterFlag] = useState(false);
  const handleChangeCommitted = (event, newValue) => {
    console.log('on', event, newValue);
    // setValue(newValue);
    setParameters({
      ...parameters,
      price_from: value[0],
      price_to: value[1]
    });
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setFilterFlag(true);
  };


  const dispatch = useDispatch();

  useEffect(() => {
    if (parameters.category) {
      dispatch(getProductsDetalis(parameters));
    }
  }, [parameters]);

  let copyDetalis = Object.assign({}, details);

  const [renderNumber, setRenderNumber] = useState(0);

  useEffect(() => {

    setRenderNumber(2);


  }, [products]);


  if (type === undefined && subcategory === undefined && !Categories.includes(category)) {
    return <Redirect to='/' />;
  }
  if (subcategory === undefined && type !== undefined && (!Types.includes(type) || !Categories.includes(category))) {
    return <Redirect to='/' />;
  }
  const marginTop = true;
  //copyDetalis.image ? 'marginTopNot' : 'marginTop';
  // const { renderNumber } = props;
  console.log('prod', props, renderNumber, products);






  return (
    < div className='catigory-container' >
      <CategoryImage copyDetalis={copyDetalis} type={type} category={category} />
      <HeaderMemo
        marginTop={marginTop}
        category={category}
        type={type}
        subcategory={subcategory}
      />
      <main>
        {(subcategory && <h4>{subcategory}</h4>) || <h4> {type ? `${type} ${category}` : category}
          <span>{count && `(${count}  Products )`}</span> </h4>}

        <div className="sort-container">
          {!type && <ul>
            {connections &&
              connections.map(el => (
                <li key={el.name}
                  onClick={(e) => handleSelectToggle(el.name)}
                  className={parameters.type.includes(el.name.toLowerCase()) ? 'active' : ''}>
                  {el.name}
                </li>
              ))}
          </ul>}
          <ul >
            {type && connections &&
              connections.map(el => (
                <li key={el.name}
                  onClick={(e) => handleSelectToggle(el.name)}
                  className={parameters.subcategory.includes(el.name.toLowerCase()) ? 'active' : ''}>
                  {el.name.replace(/_/g, " ")}
                </li>
              ))}
          </ul>
        </div>
        <div className="main-content">
          <aside className="filters">
            {(parameters.type.length > 0 ||
              parameters.subcategory.length > 0) && connections &&
              <NowShoppingBy
                type={type}
                subcategory={subcategory}
                ClearAllProduct={ClearAllProduct}
                clearProdCategory={(e, el) => clearProdCategory(e, el)}
                prodCategory={(parameters.type.length && parameters.type) ||
                  (parameters.subcategory.length > 0 && parameters.subcategory)}
              />}
            <CollapseBlock
              type={type}
              subcategory={subcategory}
              handleSelectToggle={(name) => handleSelectToggle(name)}
              setFilterCountry={(name) => setFilterCountry(name)}
              handleChange={(event, newValue) => handleChange(event, newValue)}
              handleChangeCommitted={(event, newValue) => handleChangeCommitted(event, newValue)}
              value={value}
              onChangeManufactur={targetManufac => onChangeManufactur(targetManufac)}
              targetManufac={parameters.manufacturer}
              category={category}
              parameters={parameters}
              check={(e, value) => check(e, value)}
              checkforCountry={(e, value) => checkforCountry(e, value)}
              filterFlag={filterFlag}
            />
          </aside>
          <div className={isList ? "list" : 'product'} >
            {/* {(products && products.length) ? <> */}
            {products && products.length > 0 && <div className="settings-top-wrapper">
              <Settings
                selectValue={e => selectValue(e)}
                sortByValue={sortByValue}
                selectNumber={e => selectNumber(e)}
                showValue={showValue}
                handleChangeList={handleChangeList}
                pageCount={pageCount}
                onChangePage={(i) => onChangePage(i)}
                selectPage={selectPage}
                hanldeChangeGrid={hanldeChangeGrid}
                isGrid={isGrid} isList={isList} />
            </div>}
            {isLoading ? <Loader
              className='loader'
              type="Oval"
              color="#ae1d14"
              height={40}
              width={40}
            /> :
              <>
                {products && products.length === 0 ? <MyOrders text='no product to show' marginT={'marginT'} /> :
                  products && products.map(el => (
                    <Fragment key={el.id} >
                      {isGrid && <ProductItem
                        product={el}
                      //   key={el.id}
                      // price={el.price}
                      // name={el.name}
                      // src={`http://liquornearme.test/storage/products/${el.img_path}`}
                      />}
                      {isList && <ProductListItem
                        key={el.id}
                        price={el.price}
                        name={el.name}
                        description={el.description}
                        src={`http://liquornearme.test/storage/products/${el.img_path}`}
                      />}
                    </Fragment>
                  ))}
              </>}
            {products && products.length > 0 && <div className="settings-bottom-wrapper">
              <Settings
                selectValue={e => selectValue(e)}
                sortByValue={sortByValue}
                selectNumber={e => selectNumber(e)}
                showValue={showValue}
                handleChangeList={handleChangeList}
                pageCount={pageCount}
                onChangePage={(i) => onChangePage(i)}
                selectPage={selectPage}
                hanldeChangeGrid={hanldeChangeGrid}
                isGrid={isGrid} isList={isList} />
            </div>}
            {/* </> : <MyOrders text='no product to show' marginT={'marginT'} />} */}
          </div>
        </div>
      </main>
    </div >


  );
};
export default Category;

// {type && connections &&
//   connections.map(el => (
//     <ul key={el.name}>
//       {el.subcategories && el.name === type &&
//         el.subcategories.map((el, i) =>

//           <li key={el.name}
//             onClick={(e) => handleSelectToggle(el.name)}
//             className={parameters.subcategory.includes(el.name.toLowerCase()) ? 'active' : ''}>
//             {el.name.replace(/_/g, " ")}
//           </li>
//         )}
//     </ul>
//   ))}
