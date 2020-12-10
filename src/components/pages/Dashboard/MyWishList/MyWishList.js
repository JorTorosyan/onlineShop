import React, { useEffect, useLayoutEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';

import './style.scss';
import WishListItem from './WishListItem/WishListItem';
import UserService from "../../../../util/UserService";
import RedButton from '../../../Buttons/RedButton/RedButton';

import { warnMessageCreate, succMessageCreate } from '../../../../actions/message';
import { CreateCart, showCard } from "../../../../actions/cart";


const MyWishList = (props) => {

    const [wishList, setWishList] = useState('');
    const [wishListFromBack, setWishListFromBack] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [deleteData, setDeleteData] = useState('');
    const [resAddAllcard, setResAddAllcard] = useState('');

    const cartState = useSelector(state => state.cart);

    const { count, products, totalSum } = cartState;

    const dispatch = useDispatch();
    const padding = { padding: '7px 12px' };


    useLayoutEffect(() => {
        let mounted = true;
        const fetchData = async () => {
            setLoading(true);
            try {
                const result = await UserService.get(`/wishlist`);
                if (mounted) {
                    if (result.errors) {
                        setError(result.errors);
                    } else {
                        setWishList(result.data);
                        setWishListFromBack(result.data);
                    }
                }
            } catch (e) {
                setError(e);
                console.log(e, 'error');
            }
            setLoading(false);
        };
        fetchData();
        return () => mounted = false;
    }, [error]);


    const deleteWishList = async (id) => {
        setLoading(true);
        try {
            const result = await UserService.post(`/wishlist/delete/${id}`);
            if (result.errors) {
                setError(result.errors);
            } else {
                wishList.splice(wishList.indexOf(id), 1);
                setWishList(wishList);
                setWishListFromBack(wishList);
                setDeleteData(result);
                window.scrollTo(0, 0);
            }
        } catch (e) {
            setError('something went wrong');
        }
        setLoading(false);
    };


    useEffect(() => {
        if (deleteData && deleteData.message) {
            dispatch(succMessageCreate(deleteData.message));
        }
    }, [deleteData, dispatch]);

    const [disableAddAllCard, setDisableAddAllCard] = useState(true);

    useEffect(() => {
        if (wishList && wishList.length > 0) {
            setDisableAddAllCard(false);
        }
    }, [wishList]);


    const handleAddAllToCard = async () => {
        setLoading(true);
        try {
            if (!disableAddAllCard) {
                window.scrollTo(0, 0);
                const result = await UserService.post('/wishlist/add-all-to-cart');
                if (result.errors) {
                    setError(result.errors);
                } else {
                    setResAddAllcard(result);
                    setWishList(result.new_wishlist);
                    setWishListFromBack(result.new_wishlisthList);

                    let res = [];
                    for (let key in result) {
                        if (result[key].cart_product_id) {
                            res.push(result[key]);
                        }
                    }
                    dispatch(CreateCart({ count: count + result.products_added_count, products: res, totalSum: result.total_sum }));
                }
            }

        } catch {
            setError('something went wrong');
            alert('err');
        }
        setLoading(false);
    };

    let message = `We dont have as many ${resAddAllcard && resAddAllcard.products_low_in_stock.toString()} as you requested for JOSEPH PHELPS INSIGNIA RED WINE NAPA RED WINE 2016`;

    useEffect(() => {

        if (resAddAllcard && resAddAllcard.products_low_in_stock && resAddAllcard.products_low_in_stock.length === 0) {
            dispatch(warnMessageCreate("this  products_low_in_stock empty"));
        }
        if (resAddAllcard && resAddAllcard.products_low_in_stock && resAddAllcard.products_low_in_stock) {
            dispatch(warnMessageCreate(message));
        }
        if (resAddAllcard.products_added_count) {
            dispatch(succMessageCreate(`${resAddAllcard.products_added_count} products were succsessfuly added`));
            dispatch(showCard(true));
        }
    }, [dispatch, message, resAddAllcard]);


    //UPDATE WISHLIST
    const [createUpdate, setCreateUpdate] = useState({ wishlistProduct: [] });
    const [disableUpdate, setDisableUpdate] = useState(true);
    const [resUpdate, setResUpdate] = useState('');
    const [disableAddCard, setDisableAddCard] = useState(false);

    const handleUpdateWishList = async () => {
        setLoading(true);
        try {
            if (!resUpdate) {
                window.scrollTo(0, 0);
                const result = await UserService.post('/wishlist/update', createUpdate);
                if (result.errors) {
                    setError(result.errors);
                } else {
                    setResUpdate(result);
                }
            }
        } catch {
            setError('something went wrong');
        }
        setLoading(false);
    };

    useEffect(() => {
        if (resUpdate && resUpdate.message) {
            dispatch(succMessageCreate(resUpdate.message));
            setResUpdate('');
        }
    }, [dispatch, resUpdate]);
    //094591418 ashot
    const [changeQuantity, setChangeQuantity] = useState(1);



    const handleChange = useCallback(
        (e, id, quantity) => {

            const updateWishList = wishList.map(el => el.id === id ? { ...el, quantity: Number(e.target.value) || "" } : el);
            // hamematum skzbnakan i het mihst tarm@ ayn array@ vor uxxarkum enq beck bayc bolor dashterov
            let dif = updateWishList.filter(el => !wishListFromBack.includes(el));
            // mapi mijocov stanum enq menak ayn dashter@ vorineq petq e uxarkenq bek
            let newArr = dif.map(el => ({ id: el.id, quantity: el.quantity }));
            newArr.forEach(el => {
                if (el.quantity > 0) {
                    setDisableUpdate(false);
                } else {
                    setDisableUpdate(true);
                }
            });

            console.log('updateWishList', updateWishList);
            setCreateUpdate({
                ...createUpdate,
                wishlistProduct: newArr
            });
            setWishList(updateWishList);

            let filterArr = updateWishList && updateWishList.filter(el => el.quantity === '');
            if (JSON.stringify(updateWishList) !== JSON.stringify(wishList) && !(filterArr.length > 0)) {
                setDisableUpdate(false);
            } else {
                setDisableUpdate(true);
                setResUpdate('');
            }

            setChangeQuantity(e.target.value);
        }, [createUpdate, wishList]);

    useEffect(() => {
        if (resUpdate) {
            setDisableUpdate(true);
        }
    }, [resUpdate]);

    console.log('products--', products);
    // --------------------------------------------------   add to card

    const [resAddtoCard, setResAddToCard] = useState('');


    const handleAddToCard = async (id, quantity, outOfStock, name) => {
        if (outOfStock === 0)
            return;
        setLoading(true);
        setDisableAddCard(true);

        try {
            window.scrollTo(0, 0);
            const result = await UserService.post(`/wishlist/add-to-cart/${id}`, { quantity: parseInt(changeQuantity) || quantity });
            if (result.errors) {
                setError(result.errors);

            } else {
                debugger;
                if (result.existed_in_cart) {
                    let filterAdd = wishList.filter(el => el.name === name);
                    let newArr = products.map(el => el.name === name ? { ...el, quantity: el.quantity + filterAdd[0].quantity } : el);
                    dispatch(CreateCart({ count: count, products: newArr, totalSum: 0 }));
                    // wishList.splice(wishList.indexOf(id), 1);
                    let newWishList = wishList.filter(el => el.id !== id);
                    setWishList(newWishList);
                    setResAddToCard(result);
                } else {
                    let newWishList = wishList.filter(el => el.id !== id);
                    let tempArr = wishList.filter(el => el.id === id);

                    dispatch(CreateCart({ count: count + 1, products: products.concat(tempArr), totalSum: 0 }));
                    setResAddToCard(result);
                    setWishList(newWishList);
                }

            }
        } catch {
            setError('something went wrong');
        }
        setLoading(false);
        setDisableAddCard(false);
    };


    let succMessage = resAddtoCard && resAddtoCard.message;
    let warMessage = error && error[0].message;

    useEffect(() => {
        if (succMessage) {
            dispatch(showCard(true));
            dispatch(succMessageCreate(succMessage));
        }
        if (warMessage) {
            dispatch(warnMessageCreate(warMessage));
        }

    }, [dispatch, resAddtoCard, succMessage, warMessage]);


    if (loading) {
        return (
            <div className="load_content">
                <Loader
                    className='loader'
                    type="Oval"
                    color="#ae1d14"
                    height={320}
                    width={40}
                />
            </div>
        );
    }
    console.log('wishlist', wishList);
    return (
        <div className="wish-list-container">
            <h1>My Wish List</h1>
            {wishList && wishList.length > 0 ? (
                <div className="wish_list_content">
                    <div className="wish_list_wrap">
                        {wishList && wishList.map(el => (
                            <WishListItem
                                key={el.id}
                                src={`http://liquornearme.test/storage/products/${el.image_name}`}
                                name={el.name}
                                price={el.price}
                                quantity={el.quantity}
                                _onClick={() => deleteWishList(el.id)}
                                id={el.id}
                                _onChange={(e) => handleChange(e, el.id, el.quantity)}
                                _handleAddToCard={() => handleAddToCard(el.id, el.quantity, el.quantity_in_stock, el.name)}
                                disable={disableAddCard || el.quantity === '' || el.quantity === 0}
                                outOfStock={el.quantity_in_stock === 0}
                            />
                        ))}
                    </div >
                    <div className="btns_wrapper">
                        <RedButton
                            text="UPDATE WISH LIST"
                            padding={padding}
                            _onClick={handleUpdateWishList}
                            disable={disableUpdate}
                        />
                        <RedButton text="SHARE WISH LIST" padding={padding} disable={false} />
                        <RedButton
                            text="ADD ALL TO CART"
                            padding={padding}
                            _onClick={handleAddAllToCard}
                            disable={disableAddAllCard}
                        />
                    </div>
                </div >
            ) :
                (< div className="message-info">
                    <span>You have no items in your wish list.</span>
                </div>)}
        </div >
    );
};
export default MyWishList;

            // updateWishList.forEach(el => {
            //     if (el.id === id && quantity !== Number(e.target.value)) {
            //         newArr.push({
            //             id,
            //             quantity: parseInt(e.target.value)
            //         });
            //         if (el.quantity > 0) {
            //             setDisableUpdate(false);
            //         } else {
            //             setDisableUpdate(true);
            //         }
            //     }
            // });