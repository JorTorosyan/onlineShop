import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import reducer from './store/index';



const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

ReactDOM.render(
  (<Provider store={store}>
     <App/>
   </Provider>),
document.getElementById('root'));
