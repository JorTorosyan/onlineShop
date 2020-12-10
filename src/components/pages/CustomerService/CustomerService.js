import React from 'react';
import { CompareProduct } from '../../../components/CompareProduct/CompareProduct';
import { HeaderMemo } from '../../../components/Header/Header';
import './style.scss';

const CustomerService = (props) => {
    const Style = { minWidth: '270px' };
    const category = "Customer Service";

    return (
        <>
            <HeaderMemo category={category} />
            <div className="CustomerService-container" >
                <CompareProduct Style={Style} />
                <div className="CustomerService-content">
                    <h1>Customer Service</h1>
                    <ul>
                        <li><a href="#Shipping">Shipping & Delivery</a></li>
                        <li><a href="#Privacy">Privacy & Security</a></li>
                        <li><a href="#Returns">Returns & Exchanges</a></li>
                        <li><a href="#Orderin">Ordering</a></li>
                        <li><a href="#Payment">Payment, Pricing & Promotions</a></li>
                        <li><a href="#Viewing">Viewing Orders</a></li>
                        <li><a href="#Updating">Updating Account Information</a></li>
                    </ul>
                    <div className="text">
                        <p id="Shipping" >Shipping & Delivery</p>
                        <p>You must be 21 years of age or older to purchase/order any alcoholic beverages and by placing an order you verify that you are 21 and over.</p>
                        <article>
                            Adult Signature required upon delivery. Recipient must be at least 21 years of age and proof of age could be required by the carrier. We do not deliver to an intoxicated person. Please drink responsibly. If no one over the age of 21 is available to sign for the package, it will not be left. Therefore we recommend you ship to a work or business address. We cannot ship to PO Boxes, FPO or APO addresses.
                 </article>
                        <article>
                            We do our best to make it easy and convenient to purchase products from RemedyLiquor.com. Browse through our huge selection; add to the cart and checkout. You will be notified by email once an order is placed. Once the package is shipped, you will get a tracking number emailed to you. You may also track your order on our website under view orders.
                 </article>
                        <article>
                            We usually ship within 24 hours from the receipt of your order. Some orders could take longer time if it falls on a weekend or holidays, but we do our best to ship as soon as we can. If we are unable to fulfill your order we will contact you. We cannot guarantee that everything will be in stock even if the system says we do. We apologize in advance for any inconvenience this may cause. If we are out of stock and your order went through, we will not accept your payment. If you are concerned please contact us before placing an order. Shipments may also be delayed due to weather conditions.
                 </article>
                        <article>
                            Orders placed on the website are not final; your credit card is not charged automatically. You get charged on your credit card after the product has been packed and the order is considered complete. All credit cards are verified so you must provide billing address that corresponds to the credit card you are using. If billing address doesn’t match the credit card you will be informed and the order will not be processed until we hear from you.  Age and address verification need to be obtained to process the shipments. Pay careful attention to your shipping address especially if different than billing and always double check (address, zip code, apt. #, building #, floor, etc.). It is your responsibility to make sure the shipping address is correct. Shipping companies may charge additional fees if it is an incorrect or an incomplete address that result in re-routing of the shipment. The customer placing an order is liable for all extra fees charged by the carrier if any information provided is inaccurate and partial and shipment results in re-routing because of the above stated reasons. You can also place an order online for pickup at any Remedy Liquor. Store pickups are usually completed same day if we have everything in stock. If it is an urgent, please call to the store and we will do our best to complete the order within an hour and have it ready for pickup.
                 </article>
                        <article>
                            We do not recommend ground delivery for all orders because the potential exposure during hot or cold weather conditions may damage the product. Remedy Liquor cannot be held responsible for damaged products due to the selection of ground delivery for your order. During times of extremely hot or cold weather, we recommend using 2nd Day or Next Day shipping to avoid having your order be exposed to the extremes of hot and cold for an extended period in transit. We are not responsible for your product that arrives damaged due to heat or cold, so please plan accordingly when you choose your shipping option. All alcoholic beverages sold, title passes to you as a buyer. We make no representation to the legal rights of anyone to ship. You, as a buyer, are solely responsible for shipment of alcoholic beverage products. By placing an order, you authorize us to act on your behalf to engage a common carrier to deliver your order to you. If your order is damaged during the shipping it is your responsibility to contact the common carrier and resolve the issue with them. We recommend you get insurance for all shipments. We use proper materials necessary to package your shipment and are positive about the quality of the work we do. Our goal is to ensure your product arrives in great condition. Feel free to contact us via phone or email if you have any questions.
                    </article>
                        <article>
                            International shipping charges may vary and in some situations could be more than what our system calculates. We will contact you with the shipping charges for your approval. Every country has different taxes, customs and tariffs that you may have to pay. We are not responsible for additional charges that may be added to your order. We advise you to check with the country’s shipping officials regarding duty taxes or custom charges that must be paid before your order is released. We do not ship to every country in the world. Once order is place we will review your order and if we are able to ship we will accept your payment, otherwise we will contact you. International shipping could take us more time for processing. You, as a buyer, are solely responsible for shipment of alcoholic beverage products. By placing an order, you authorize us to act on your behalf to engage a common carrier to deliver your order to you. It is your responsibility to check with appropriate agency in your country for all requirements necessary to receive your shipment.
                    </article>
                        <article>
                            Prices are subject to change without notice. We reserve the right to refuse an order anytime. There’s no return or exchange and all sales are final. Any order that is refused or returned after three attempts to deliver shall be refunded for the amount of the product only. The shipping charges will not be refunded. If a paid order is cancelled before shipment there will be a fee assessed with it. Payments are processed through PayPal and all transactions are secured. We accept all major credit cards. Customer satisfaction is our priority and we are here to help. If you have any questions don’t hesitate to call or email us.
                    </article>
                        <article>
                            Alcoholic beverages with more than 70% alcohol content (140 proof), including 95% grain alcohol, are not available for purchase to be shipped. Alcoholic beverages with less than 24% alcoholic content are not subject to hazardous materials regulations. No alcoholic beverages over 24% alcohols (48 Proof) should be shipped by air.
                    </article>
                        <article>
                            Non alcoholic items such as accessories, glasses, bar products, etc. can be shipped to all 50 states.
                    </article>
                        <article>
                            All alcoholic beverages are sold in California and title passes to you in California. We make no representation to the legal rights of anyone to ship into any state outside of California. You, as a buyer, are solely responsible for shipment of alcoholic beverage products. By placing an order, you authorize us to act on your behalf to engage a common carrier to deliver your order to you.
                            Non California residents are responsible for determining whether they may lawfully import alcoholic beverages into their state. We make no representation relative to your right to import wine or spirits into your state. Each state has its own rules and regulations, so you might want to check with appropriate agency in your state or county. The buyer is responsible for the shipment of products purchased and determining the legality and tax/duty consequences of having the wine shipped to him or her. Laws regarding the sale and transportation of alcoholic beverages are complex and constantly changing. The policies and procedures regarding sales and transportation are different in every state. That’s why you are buying from us in California and why title to the alcoholic beverages is passing to you upon purchase. By arranging transportation, Remedy Liquor is providing a service to and acting on your behalf. And by using this service you are representing that you are acting in compliance with your local and state laws. We only ship to those states where common carriers deliver alcohol. If we are unable to ship you will be notified by mail and your transaction will not be completed. You may also make your own shipping arrangements. When your order is approved, you own the goods. Title to all products intended for shipment to federal property and Indian reservations passes to the customer when goods are picked by the common carrier and California sales tax may be collected if none assessed by your state. In the event that RemedyLiquor.com may ship alcoholic beverages to your state in accordance with a state privilege requiring the payment o state taxes, you will be charged the sales tax if any assessed by your state, otherwise California sales tax will be assessed on the sale. By using this website you take the entire risk upon yourself. If for some reason you are not satisfied we respectfully ask you to stop using this site.
                    </article>
                        <article>
                            Product information is kept as up to date as possible. Not all item details including images maybe accurate to the product, as suppliers change packaging and bottling and RemedyLiquor.com has no control on these chages.
                    </article>

                        <p id="Delivery">Delivery Service</p>
                        <article>
                            We offer delivery services throughout Greater Los Angeles area. In store pick up is available at no additional cost. There is no minimum order. Delivery charges are calculated based on the city and zip code you provide during checkout. For more information you can call our store.
                    </article>
                        <article>
                            You must be at least 21 years of age or older in order to purchase any alcoholic beverages. You will be required to show a government issues photo ID upon delivery in order to provide proof of age. We would not leave any product at front door. If your order comes back due to the inability to provide legal proof of age, a re-delivery fee will be charged. We will call you 30 minutes before delivering. Please include a valid phone number.
                    </article>
                        <article>
                            You can place your order online anytime but for our delivery and phone order service check the following timing. Monday-Saturday, 9 AM - 6 PM; Sunday, you need to call our store, we will do our best to deliver, if we are unable to, the delivery will be made the following day. For express deliveries please call us to confirm. Orders are processed when we receive notification of your order and authorization of your payment. Orders received after hours will be processed for delivery the following day. We will attempt and act as quick as possible but sometimes could be delayed. Therefore, we encourage you to call us for further assistance.Express deliveries will cost you ½ more of the actual delivery cost. We do not guarantee same day delivery for all orders due to circumstances beyond our control, out of stock, no inventory, traffic, etc.
                    </article>
                        <article>
                            Customer has the option of requesting express delivery or on a specific date. If a delivery must be made during specific time of the day, please specify in the special instructions section upon checkout, or call our store to speak with an associate. Please provide special instructions for the driver to help find your house or apartment quicker for fast service. We will do our best to fulfill such requests but they are not guaranteed. By your authorization, extra charge may apply for express deliveries. All orders require signature of a person at 21 years of age and older. Please drink responsibly.
                            We accept PayPal and all major credit cards (Visa, MasterCard, American Express and Discover). Cash sells are only for store pick up. We do not accept checks. All pricing and availability is subject to change without notice. Also, vintages are subject to change at any time. We reserve the right to refuse any delivery service to anyone.
                    </article>
                        <article>
                            We apologize in advance for any inconvenience. We are here to help you and make shopping from RemedyLiquor.com easy and convenient for everyone.
                    </article>

                        <p id="Privacy">Privacy & Security</p>
                        <article>
                            Your privacy is important to us. Please refer to our Privacy Policy page for detailed explanation.
                    </article>

                        <p id="Returns" >Returns & Exchanges</p>
                        <p>No returns or exchanges. ALL SALES ARE FINAL.</p>
                        <article>
                            Should any product be damaged during shipping, please email us so we can pursue a claim with the shipping company. Shipping and Handling charges will NOT be refunded.
                    </article>
                        <article>
                            Please email customerservice@remedyliquor.com for approval before returning any item.
                    </article>

                        <p id="Orderin" >Ordering</p>
                        <article>
                            We make it easy to purchase products from Remedy Liquor. Just browse through our catalog of wines and liquors, pick your drink and add to cart. Checkout process is quick and easy. We also carry most items in our conveniently located store in California, so stop by.
                 </article>
                        <p id="Payment">Payment & Pricing</p>
                        <article>
                            We accept all major credit cards. Payments are processed at the time of purchase of products.
                 </article>
                        <article>
                            Remedy Liquor reserves the right to cprices without further notice.
                 </article>

                        <p id='Viewing' >Viewing Orders</p>
                        <article>
                            You will be notified by email once an order is placed. You may also track your order by visiting the Orders and Returns page in the Customer Service section.
                 </article>

                        <p id="Updating" >Updating Account Information</p>
                        <article>
                            An account can be created at time of the order. This will securely save your data, allowing for quick purchase and checkout when you purchase more products. You may modify your information at anytime simply by clicking on My Account and logging in.
                 </article>
                    </div>
                </div>
            </div>
        </>
    );
};
export default CustomerService;
