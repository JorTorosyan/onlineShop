import React from 'react';

import './style.scss';

function ItemInCard() {
    return (
        <div className="item">
            <h3>2 Items in Cart</h3>
            <div className="content ">
                <div className="third-content">
                    <div className="img-card">
                        <div href="" className="img-wrapper">
                            <img src="https://remedy-varnishcdn-ebizon.netdna-ssl.com/pub/media/catalog/product/cache/f7f5f0f18a9d207e21eba77323c56fb6/h/a/hazelburn-15-year-old_cognac-cask-web.jpg" alt="" />
                        </div>
                        <div>
                            <div className="header-item">HAZELBURN SCOTCH SINGLE MALT CAMPBELTOWN SINGLE CASK 15YR 750ML</div>
                            <div className="item-total-wrapper">
                                <span><label htmlFor="number">Qty:</label><input type="number" id="number" placeholder="1" /></span>
                            </div>
                        </div>
                    </div>
                    <div className="img-card">
                        <div href="" className="img-wrapper">
                            <img src="https://remedy-varnishcdn-ebizon.netdna-ssl.com/pub/media/catalog/product/cache/f7f5f0f18a9d207e21eba77323c56fb6/h/a/hazelburn-15-year-old_cognac-cask-web.jpg" alt="" />
                        </div>
                        <div>
                            <div className="header-item">HAZELBURN SCOTCH SINGLE MALT CAMPBELTOWN SINGLE CASK 15YR 750ML</div>
                            <div className="item-total-wrapper">
                                <span><label htmlFor="number">Qty:</label><input type="number" id="number" placeholder="1" /></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="third-column-wrapper">
                    <span>  Cart Subtotal</span>
                    <span>$214.99</span>
                </div>
                <div className="third-column-wrapper">
                    <span>Shipping</span>
                    <span>$24.84</span>
                </div>
                <div className="third-column-wrapper">
                    <span>Additional Fees</span>
                    <span>$2.15</span>
                </div>
                <div className="third-column-wrapper">
                    <span>Yes(1.00%)</span>
                    <span>$2.15</span>
                </div>
                <div className="third-column-wrapper">
                    <span>Tax</span>
                    <span>$22.4</span>
                </div>
                <div className="third-column-wrapper">
                    <span>Order Total Incl. Tax</span>
                    <span>$264.02</span>
                </div>
                <div className="third-column-wrapper">
                    <span>Order Total Excl. Tax</span>
                    <span>$241.98</span>
                </div>
                <div className="textarea-wrapper">
                    <label htmlFor="textarea">Order Comment</label>
                    <textarea name="" id="textarea"></textarea>
                </div>
                <div className="modal-wrapper">
                    <div className="text-xs-center">
                        <template > Add a gift message</template>
                        <p>Gift Message for Whole Order (optional)</p>
                        <label htmlFor="">To:<input type="text" /></label>
                        <label htmlFor="">From:<input type="text" /></label>
                        <label htmlFor="">Message
    <textarea name="" id="" ></textarea>
                        </label> </div>
                </div>
                <div className="discount-code">
                    <div className="wrapper"><p>Apply Discount Code</p><img width="16" src="../assets/img/icons/down-arrow.svg" alt="" /></div>
                    <div>
                        <input type="text" />
                        <button>Apply Discount</button>
                    </div>
                </div>
                <div className="btn-wrapper">
                    <button>Place Order</button>
                </div>
            </div>
        </div>
    );
}

export default ItemInCard;
