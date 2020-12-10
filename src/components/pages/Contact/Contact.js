import React, { useState } from 'react';
import { ValidateEmail, ValidatePhoneNumber, ValidateName } from '../../../components/pages/CustomerLogin/ValidadeLogin'
import './style.scss';


const Contact = () => {

  const [value, setValues] = useState({ email: '', Name: '', phoneNumber: '' })

  const [errMessName, setErrMessName] = useState('')
  const [errMessEmail, setErrMessEmail] = useState('')
  const [ErrMessPhoneNum, setErrMessPhoneNum] = useState('')


  const { email, Name, phoneNumber } = value;
  const handleChange = (e) => {
    setValues({
      ...value,
      [e.target.name]: e.target.value
    })

  }
  const focusPhoneNumber = (e) => {
    if (!ValidatePhoneNumber(e.target.value)) {
      setErrMessPhoneNum('Please ender valid phone number')
    }

  }
  const focusEmail = (e) => {
    if (!ValidateEmail(e.target.value)) {
      setErrMessEmail('Please enter a valid email address (Ex: johndoe@domain.com).')
    }

  }
  const focusName = e => {
    if (!ValidateName(e.target.value)) {
      setErrMessName('This is a required field')
    }
  }

  return (
    <>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <form action="submit">
          <label htmlFor="name">Name</label>
          <input type="text" name='Name'
            onFocus={focusName}
            value={Name}
            required onChange={handleChange} />
          {!ValidateName(Name) &&
            <div className="err-message-wrapper">{errMessName}</div>}

          <label htmlFor="name">Email </label>
          <input type="email"
            value={email}
            name="email" required

            onFocus={focusEmail}
            onChange={handleChange} />
          {!ValidateEmail(email) &&
            <div className="err-message-wrapper">{errMessEmail}</div>}

          <label htmlFor="name">Phone Number </label>
          <input type="text"
            onFocus={focusPhoneNumber}
            onChange={handleChange} htmlFor="number"
            required name="phoneNumber" />
          {!ValidatePhoneNumber(phoneNumber) &&
            <div className="err-message-wrapper">{ErrMessPhoneNum}</div>}

          <label htmlFor="name">What’s on your mind ?</label>
          <textarea name="comment" id="comment" cols="5" rows="3"
            onChange={handleChange} ></textarea>
          <button style={(ValidateEmail(email) && ValidateName(Name) && ValidatePhoneNumber(phoneNumber)
          ) ?
            { opacity: 1 } :
            { opacity: 0.5 }} >Submit</button>
        </form>
      </div>
    </>
  )
}
export default Contact;