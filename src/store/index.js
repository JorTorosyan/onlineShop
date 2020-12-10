import { combineReducers } from 'redux';
import { category } from '../components/pages/Category/reducer';
import { collapse } from '../components/Collapse/reducer';
import { subscriptionsReducer } from '../components/Home/NewsLetter/reducer';
import { addToCardState } from '../components/pages/AddToCart/reduser';
import { UserReducer } from '../reducers/userReducer';
import { CartReducer, CartOpenReducer } from '../reducers/cartReducer';
import { LoaderReducer } from "../reducers/loaderReducer";
import { messageReducer } from "../reducers/messageReducer";


export default combineReducers({
  category,
  collapse,
  subscriptionsReducer,
  addToCardState,
  userAgent: UserReducer,
  cart: CartReducer,
  loader: LoaderReducer,
  messageReducer,
  CartOpenReducer
});