const initialState = {
    categories: [],
    productDetalis: [],
    isLoading: false,
    error: null,
    count:''
  }
  
  export const category = (state=initialState, action) => {
    switch(action.type){
      case 'GET_CATEGORIES': {
        return {
          ...state,
         categories: action.data.data,
        }
      }
      case 'GET_PRODUCTS_DETALIS' : {
        return {
          ...state,
        productDetalis: action.data
        }
      }
      case 'GET_PRODUCTS_COUNT' : {
        return {
          ...state,
          count: action.data.count
        }
      }
      case 'GET_CATEGORY_ERROR' :{
        return {
          ...state,
          error: action.error
        }
      }
      case 'LOADING_PRODUCT': {
        return{
          ...state,
          isLoading: true
        }
      }
      case 'LOADED_PRODUCT':{
        return{
          ...state,
          isLoading: false
        }
      }
      default: {
        return state
      }
    }
  }