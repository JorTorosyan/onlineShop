import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import {
  heart,
  share
} from '../../../assets/img';
import { connect } from "react-redux";
import UserService from "../../../util/UserService";
import { CreateCart } from "../../../actions/cart";

const ProductItem = (props) => {
  const [product, setProduct] = useState([]);
  const [addToButton, setAddToButton] = useState(false);
  const [message, setMessage] = useState("");
  let index = null;

  useEffect(() => {
    setProduct(props.product);

  }, [props.product]);

  useEffect(() => {
    if (product.quantity > 0) {
      setAddToButton(true);
    }
  }, [product]);
  const addProduct = () => {

    let data = {};
    data.product_id = product.id;
    if (props.login) {
      UserService.post('/add-to-cart', data, props.dispatch)
        .then(response => {
          if (response.errors) {
            setMessage(response.errors[0].message);
          } else {
            for (let key in props.cart.products) {
              if (props.cart.products[key]['unique_number'] === response['unique_number']) {
                index = key;
              }
            }
            let tmpresopnse = response;
            delete tmpresopnse.exists;
            let totalSum = parseFloat(props.cart.totalSum) + parseInt(response.price);
            let tmp = props.cart.products.slice();
            if (index === null) {
              tmp.push(tmpresopnse);
              props.dispatch(CreateCart({ count: props.cart.count + 1, products: tmp, totalSum: totalSum, showModal: false }));
            } else {
              tmp[index].quantity = props.cart.products[index].quantity + 1;
              props.dispatch(CreateCart({ count: props.cart.count, products: tmp, totalSum: totalSum, showModal: false }));
            }
          }
        })
        .catch(function (ex) {
          console.error(ex);
        });

    }
  };

  return (
    <div className="container-prod">
      <div className="img-wrapper">
        <img
          className="main-img"
          alt="img"
          src={`http://liquornearme.test/storage/products/${product.img_path}`}
        />
      </div>
      <p className="productItemName">
        {props.product.name}
      </p>
      <span className="price">
        ${product.price}
      </span>
      {addToButton && (<span onClick={addProduct} className="redish">
        Add to Cart
      </span>)}
      {!addToButton && (<span className="redish">
        Out of Stock
      </span>)}

      <span className="stock-info">
        {props.stock}
      </span>
      <div className="add-to-links-secondary" >
        <Link
          to="/customer-login"
          className="action wishlist"
          data-action="add-to-wishlist"
          title="Wishlist">
          <img src={heart} alt="heart" />
        </Link>
        <Link
          to="/customer-login"
          className="action compare"
          title="Compare">
          <img src={share} alt="share" />
        </Link>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  cart: state.cart,
  login: state.userAgent.login

});
export default connect(mapStateToProps)(ProductItem);