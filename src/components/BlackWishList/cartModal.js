import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { connect } from 'react-redux';
import { productURL } from '../../util/service-urls';
import InputComponent from "../../components/InputComponent/index";
import UserService from "../../util/UserService";
import { CreateCart } from "../../actions/cart";
import CallService from "../../util/CallService";
import MyModal from "../Modal/MyModal";

const CartModal = React.forwardRef((props, ref) => {

  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [updateHide, setUpdateHide] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);

  console.log('props cardmodal', props.cart);
  useEffect(() => {
    setProducts(props.cart.products);
  }, [props.cart]);

  useEffect(() => {
    if (updateHide === true) {
      setUpdateHide(false);
      props.dispatch(CreateCart({ 'products': products, 'totalSum': cartTotal }));
    }
  }, [updateHide]);

  const getFromLocalStorege = {
    imgSrc: localStorage.getItem('imgSrc'),
    h1: localStorage.getItem('h1')
  };

  const handleChange = (e, key) => {
    // console.log(Number.isInteger(value), value, Number.isInteger(parseFloat(value)), parseFloat(value));
    // console.log(name, value, valid, key);
    console.log(props.cart.products);
    console.log(e);
    console.log(key);
    let isValid = e.target.value !== props.cart.products[key].quantity && e.target.value > 0 && Number.isInteger(parseFloat(e.target.value));
    let tempProducts = [...products];
    tempProducts[key] = {
      ...tempProducts[key],
      quantity: e.target.value !== "" ? parseFloat(e.target.value) : "",
      valid: isValid
    };
    setProducts([
      ...tempProducts,
    ]);
    // let isValid = valid && value !== props.cart.products[key].quantity && value > 0 && Number.isInteger(parseFloat(value));
    // let tempProducts = [...products];
    // tempProducts[key] = {
    //   ...tempProducts[key],
    //   quantity: value !== "" ? parseFloat(value) : "",
    //   valid: isValid
    // };
    // setProducts([
    //   ...tempProducts,
    // ]);
  };

  const handleSubmit = (key) => {
    let data = {
      quantity: products[key].quantity,
      cart_product_id: products[key].cart_product_id
    };
    let tempProducts = [...products];
    // tempProducts[key] = {
    //     ...tempProducts[key]
    // };
    delete tempProducts[key]['valid'];
    setProducts([
      ...tempProducts,
    ]);

    setCartTotal((products[key].quantity - props.cart.products[key].quantity) * products[key].price + parseInt(props.cart.totalSum));
    UserService.post('/edit-cart-product', data, props.dispatch)
      .then(response => {
        if (response.errors) {
          setMessage(response.errors[0].message);
          setShow(true);
          setTitle('Error');
        } else {
          setUpdateHide(true);
          //props.dispatch(UpdateQuantity(products));
          setMessage(response.message);
          setShow(true);
          setTitle('Success');
        }

      })
      .catch(function (ex) {
        console.error(ex);
        if (localStorage.getItem('cart') !== null) {
          props.dispatch(CreateCart(JSON.parse(localStorage.getItem('cart'))));
        } else {
          props.dispatch(CreateCart({ count: 0, products: [], totalSum: 0 }));
        }
      });
  };


  const handleSubmitGuest = (key) => {
    let data = {
      quantity: products[key].quantity,
      product_id: products[key].product_id
    };
    let totalSum = ((props.cart.totalSum - props.cart.products[key].quantity * props.cart.products[key].price) + products[key].quantity * products[key].price);
    let tempProducts = [...products];
    delete tempProducts[key]['valid'];
    setProducts([
      ...tempProducts
    ]);
    let storageData = {
      count: products.length,
      products: [
        ...tempProducts
      ],
      totalSum: totalSum
    };
    CallService.post('/edit-cart-product', data)
      .then(response => {
        if (response.errors) {
          setMessage(response.errors[0].message);
          setTitle('Error');
        } else {
          setMessage(response.message);
          setUpdateHide(true);
          setTitle('Success');
          localStorage.setItem('cart', storageData);
        }
      })
      .catch(err => {
        console.error(err);
      });

  };


  return (
    <>
      <MyModal
        message={message}
        title={title}
        show={show}
        setShowParent={setShow}
      />

      <div className="cart-wrapper" ref={ref} >
        <div className="item-total-wrapper header">
          <div><span style={{ marginRight: '10px' }}>{props.cart.count}</span>item(s) in Cart</div>
          <div>Cart subtotal : {/*</br> */} <span className="price blacked">${props.cart.totalSum}</span>
          </div>
        </div>
        <div className="btn-wrapper">
          <Link to="/checkout">Proceed to checkout</Link>
        </div>
        {products && products.length === 0 ? (
          <div className="empty_content">no product to show</div>
        ) :
          (
            <div className="card_content">
              {products.map(function (product, key) {
                return <div className="img-card" key={key}>
                  <Link to="" className="img-wrapper">
                    <img
                      src={'http://liquornearme.test/storage/products/' + product.image_name}
                      alt="" />
                  </Link>
                  <div className="name_content">
                    <div className="prod_name">
                      <span className="name">{product.name}</span>
                    </div>
                    <div>
                      <Link to="" >
                        {getFromLocalStorege.h1}
                      </Link>
                      <div className="item-total-wrapper">
                        <span className="price">${product.price}</span>
                        <span style={{ margin: 0 }}>
                          <label htmlFor={"number"} >Qty:</label>
                          {/*<InputComponent*/}
                          {/*  type='number'*/}
                          {/*  name={"quantity" + key}*/}
                          {/*  classnames={{ "names": true }}*/}
                          {/*  value={product.quantity}*/}
                          {/*  handleChange={handleChange}*/}
                          {/*  isNumber={true}*/}
                          {/*  required={true}*/}
                          {/*  changeValue={product.changeValue}*/}
                          {/*  input_key={key}*/}
                          {/*  errorNeeded={false}*/}
                          {/*/>*/}
                          <input type="number" className={{ "names": true }} value={product.quantity} onChange={e => handleChange(e, key)} />
                          {props.login && product.valid && (<button onClick={() => handleSubmit(key)} type='button'>Update</button>
                          )}
                          {!props.login && product.valid && (<button onClick={() => handleSubmitGuest(key)} type='button'>Update</button>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>;
              })}
            </div>)}

        <div className="btn-wrapper second">
          <Link to="/shopping-cart">View and Edit Cart</Link>
        </div>
      </div>
    </>
  );
}
);
const mapStateToProps = state => ({
  cart: state.cart,
  login: state.userAgent.login,
});

export default connect(mapStateToProps)(CartModal);



