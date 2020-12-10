import React, { useState } from 'react';
import { CheckboxBlock } from '../../Checkbox/index';
import { ValidateEmail, ValidatePhoneNumber, ValidateName } from '../../../components/pages/CustomerLogin/ValidadeLogin';
import './style.scss';

const ConstantContact = () => {
  const EmailLists = ['Beer', 'General Interest', 'Main Customers', 'Scotch', 'Wine'];
  const [value, setValues] = useState({ email: '', firstName: '', lastName: '', phoneNumber: '' });

  const [errMessName, setErrMessName] = useState('');
  const [errMessEmail, setErrMessEmail] = useState('');
  const [ErrMessPhoneNum, setErrMessPhoneNum] = useState('');


  const { email, firstName, lastName, phoneNumber } = value;
  const handleChange = (e) => {
    setValues({
      ...value,
      [e.target.name]: e.target.value
    });
    if (!ValidateEmail(e.target.value)) {
      setErrMessEmail('Please enter a valid email address (Ex: johndoe@domain.com).');
    }
    if (!ValidateName(e.target.value)) {
      setErrMessName('This is a required field');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues(value);
  };
  const handleFocus = (e) => {
    if (!ValidatePhoneNumber(e.target.value)) {
      setErrMessPhoneNum('Please ender valid phone number');
    }
  };


  return (
    <div className="constant-contact-section">
      <div className="container-const-contact">
        <div className="img-wrapper">
          <img src="https://mlsvc01-prod.s3.amazonaws.com/9660889a301/eee87a08-80f7-4f7f-87ab-6a836f58f181.jpg?ver=1432752065000" alt="logo" /></div>
        <h1>Sign up to stay in touch!</h1>
        <p>Sign up to get interesting news, offers and specials from Remedy Liquor</p>
        <form type="submit" onSubmit={handleSubmit} >
          <label htmlFor="email" className='label' > Email Address</label>
          <input
            type="email"
            id="email"
            name='email'
            onChange={handleChange}
            value={email}
            required />
          {!ValidateEmail(email) &&
            <div className="err-message-wrapper">{errMessEmail}</div>}
          <label htmlFor="name" className='label' >First Name</label>
          <input type="text" id="name" name='firstName' required
            onChange={handleChange}
            value={firstName} />
          {!ValidateName(firstName) &&
            <div className="err-message-wrapper">{errMessName}</div>}
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" required
            name='lastName'
            value={lastName}
            onChange={handleChange}
          />
          {!ValidateName(lastName) &&
            <div className="err-message-wrapper">{errMessName}</div>}
          <label htmlFor="number">Phone Number</label>
          <input type="text" id="number" required
            value={phoneNumber}
            name='phoneNumber'
            onChange={handleChange}
            onFocus={handleFocus}
          />
          {!ValidatePhoneNumber(phoneNumber) &&
            <div className="err-message-wrapper">{ErrMessPhoneNum}</div>}
          <p className="p-text">Email Lists</p>
          {EmailLists.map((el, i) => (
            <CheckboxBlock
              //  checked={props.parameters.subcategory.includes(el.name.toLowerCase()) ? true : false}
              key={i}>
              {el}
            </CheckboxBlock>
          ))}
          <p className="text-content">By submitting this form, you are consenting to receive marketing emails from: Remedy Liquor, 1700 Glenoaks Blvd, Glendale, CA, 91201 United States, http://www.remedyliquor.com. You can revoke your consent to receive emails at any time by using the SafeUnsubscribe SafeUnsubscribe® link, found at the bottom of every email. Emails are serviced by Constant Contact.</p>
          <div className="sign-up">
            <button style={(ValidateEmail(email) && ValidateName(firstName) && ValidatePhoneNumber(phoneNumber)
            ) ?
              { opacity: 1 } :
              { opacity: 0.5 }}  >Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ConstantContact;
