import React from 'react';
import { HeaderMemo } from '../../../components/Header/Header';
import './style.scss';


const TrackOrders = (props) => {
    const category = "Track Orders";

    return (
        <>
            <HeaderMemo category={category} />
            <div className='container-terms'></div>
            <div className="track-container">
                <h1>Orders and Returns</h1>
                <h2>Order Information</h2>
                <div className="form-container">
                    <form action="submit">
                        <div className="input-content">
                            <label htmlFor="name">Order ID</label>
                            <input type="text" />
                        </div>
                        <div className="input-content">
                            <label htmlFor="name">Billing Last Name </label>
                            <input type="text" />
                        </div>
                        <div className="input-content">
                            <label htmlFor="name">Find Order By </label>
                            <select id="email" >
                                <option value="email">email</option>
                                <option value="ZIP code">ZIP code</option>
                            </select>
                        </div>
                        <div className="input-content">
                            <label htmlFor="name">Email</label>
                            <input type="email" required />

                        </div>
                        <button>CONTINUE</button>
                    </form>
                </div>
            </div>
        </>
    );
};
export default TrackOrders;