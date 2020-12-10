import { FetchApi } from '../../../util/fetchApi';
import { categories } from '../../../util/service-urls';

export const getProductsDetalis = (parameters) => async dispatch => {
  let url = new URL(categories);
  Object.keys(parameters).forEach(function (key) {
    if (typeof parameters[key] === 'string') {
      url.searchParams.append(key, parameters[key]);
    } else {
      url.searchParams.append(key, JSON.stringify(parameters[key]));
    }
  });
  dispatch({
    type: 'LOADING_PRODUCT'
  })

  try {
    const response = await FetchApi.get(url)
    dispatch({
      type: 'GET_PRODUCTS_DETALIS',
      data: response.data
    })

  } catch (e) {
    dispatch({
      type: 'GET_CATEGORY_ERROR',
      error: "something went wrong"
     })
  }
  dispatch({
    type: 'LOADED_PRODUCT'
  })
}



// export const getCount = (argCategory) => async dispatch => {
//    let url = new URL(categories);
// const response =await FetchApi.get(`${url}?category=${argCategory}&type=%5B%5D&subcategory=%5B%5D&perPage=9&orderBy=price&order=ASC&currentPage=1&visibility=catalog&price_from=0&price_to=17000&manufacturer=&countries=%5B%5D&main_type=&main_subcategory=`);

//   try {
//     dispatch({
//       type: 'GET_PRODUCTS_COUNT',
//       data: response.data
//     })
//   } catch (e) {
//     console.error(e.message);
//   }
//   dispatch({
//     type: 'LOADED_PRODUCT'
//   })
//} 





// "category": "specials",
// "type": "red",
// "subcategory": "shiraz",
// "perPage": 9,
// "orderBy": "price",
// "order": "ASC",
// "currentPage": 1,
// "visibility":"catalog"






// Visibility
// perPage, currentPage, order, orderBy
// Category
// Type
// Subcategory
// perPage kara lini 9,15,30,60,90,120
// order kara lini ASC kam DESC
// orderBy kara 
//lini id, best_seller, name, price, wine_score

// export const getCategories = parameters => async dispatch => {
//   console.log(parameters);
//   let urlTypes = new URL(categories);
//   Object.keys(parameters).forEach(function (key) {
//     if (typeof parameters[key] === 'string') {
//       urlTypes.searchParams.append(key, parameters[key]);
//     } else {
//       urlTypes.searchParams.append(key, JSON.stringify(parameters[key]));
//     }
//   });
//   dispatch({ type: 'LOADING_PRODUCT' })
//   const result = await FetchApi.get(urlTypes)

//   try {
//     dispatch({
//       type: 'GET_CATEGORIES',
//       data: result,

//     })
//     dispatch({
//       type: 'GET_RELATED_DATA',
//       data: result.data
//     })
//     dispatch({
//       type: 'LOADED_PRODUCT'
//     })
//   } catch (e) {
//     console.error(e.message);
//   }
// }