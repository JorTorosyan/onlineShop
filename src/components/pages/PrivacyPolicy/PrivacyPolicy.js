import React from 'react';
import { HeaderMemo } from '../../../components/Header/Header';
import './style.scss';


const PrivacyPolicy = (props) => {
  const category = " Privacy Policy";

  return (
    <>
      <HeaderMemo category={category} />
      <div className="container-privacy">
        <h1>Privacy Policy</h1>
        <div className="text"> This privacy policy sets out how Remedy Liquor uses and protects any information that you give Remedy Liquor when you use this website. Remedy Liquor is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement. Remedy Liquor may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you agree with any changes..</div>

        <h1>Information we collect</h1>
        <div className="text">
          This notice applies to all information collected or submitted on the RemedyLiquor.com website. On some pages, you can order products, make requests, and register to receive materials. You may provide us with
two types of information: </div>

        <div className="text">
          Personal Information - you knowingly choose to disclose what is collected on individual basis. We use the information you provide about yourself when placing an order only to complete that order.
</div>
        <div className="text">
          Browser Information - collected on an aggregate basis as users browse our web site. We use non-identifying and aggregate information to better design our website. We would not disclose anything that could be used to identify individuals.
</div>
        <h1> What we do with the information we gather</h1>
        <div className="text">
          We use the information you provide about yourself when placing an order only to complete that order. We do not share this information with outside parties except to the extent necessary to complete that order. We use the information you provide about someone else when placing an order only to ship the product and to confirm delivery. We do not share this information with outside parties except to the extent necessary to complete that order. We use return email addresses to answer the email we receive. Such addresses are not used for any other purpose and are not shared with outside parties. You can register with our website if you would like to receive our catalog as well as updates on our new products and services. We use non-identifying and aggregate information to better design our website. We would not disclose anything that could be used to identify individuals. We never use or share the personally identifiable information provided to us online in ways unrelated to the ones described above without also providing you an opportunity to opt-out or otherwise prohibit such unrelated uses.
          </div>
        <h1> Security</h1>
        <div className="text">
          We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.
            </div>

        <h1> How we use cookies</h1>
        <div className="text">
          A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyse web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.
            </div>
        <div className="text">
          We use traffic log cookies to identify which pages are being used. This helps us analyse data about web page traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us. You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
            </div>

        <h1> Controlling your personal information</h1>
        <div className="text">
          We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.
            </div>
        <div className="text">
          You can access all your personally identifiable information that we collect online and maintain by RemedyLiquor.com procedures. These procedure were implemented to better safeguard your information. To protect your privacy and security, we will also take reasonable steps to verify your identity before granting access or making corrections.
            </div>

        <h1> Legal Disclaimer</h1>
        <div className="text">
          We reserve the right to disclose your personally identifiable information as required by law and when we believe that disclosure is necessary to protect our rights and/or to comply with a judicial proceeding, court order, or legal process served on our Web site.
            </div>
        <div className="text">
          Should you have other questions or concerns about our privacy policies, please send us an email at privacy@remedyliquor.com.
            </div>
      </div>
    </>
  );
};
export default PrivacyPolicy;
