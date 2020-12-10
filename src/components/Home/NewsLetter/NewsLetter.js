import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSubscriptions, deleteSubscriptionsMessage } from './action';
import Loader from 'react-loader-spinner';
import './style.scss';
import { SuscribeModal } from '../SuscribeModal/SuscribeModal';
import { ValidateEmail } from '../../pages/CustomerLogin/ValidadeLogin';

const NewsLetterMemo = () => {
  const [email, setEmail] = useState({ email: '' });
  const [text, setText] = useState('');
  const [visible, setVisible] = useState(false);
  const [errMessage, setErrMessage] = useState('');
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector(state => state.subscriptionsReducer.subCreationData);
  const isLoading = useSelector(state => state.subscriptionsReducer.loading);

  const copyState = { ...state };
  useEffect(() => {
    if (checkActive()) {
      dispatch(createSubscriptions(email));
    }
  }, [email]);

  const showModal = () => {

    setVisible(true);
  };
  const handleOk = (e) => {
    dispatch(deleteSubscriptionsMessage());
    setVisible(false);

    setText('');
  };
  const handleCancel = () => {
    dispatch(deleteSubscriptionsMessage());
    setVisible(false);
    setText('');
  };
  const handleChange = e => {
    setText(e.target.value);

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail({
      ...email,
      email: text
    });
    if (!ValidateEmail(text)) {
      setErrMessage('Please enter a valid email address (Ex: johndoe@domain.com).');
    }
  };

  useEffect(() => {
    setText('');
  }, [email]);

  useEffect(() => {
    if (copyState.message || copyState.errors) {
      showModal();
    }
  }, [copyState.message, copyState.errors]);

  function checkActive(active) {
    if (isLoading) {
      active = false;
    } if (ValidateEmail(text)) {
      active = true;
    } if (ValidateEmail(text) && isLoading) {
      active = false;
    }
    return active;
  }


  return (
    <div className='newsletter-container'>
      {isLoading ? <div className="loader_wrap">
        <Loader
          className='loader'
          type="Oval"
          color="#ae1d14"
          height={30}
          width={30}
        />
      </div> : null}
      <div className="newsletter">
        <p>Sign Up for Our Newsletter</p>
        <form type="submit" onSubmit={handleSubmit} >
          <div className="input-err-message-wrapper">
            <input placeholder="Subscribe to our newsletter"
              onChange={handleChange}
              value={text}
            />
            {!ValidateEmail(text) && <div className="err-message-wrapper">{errMessage}</div>}
          </div>
          <button style={checkActive() ? { opacity: 1 } :
            { opacity: 0.36 }}
          //  onClick={showModal}
          >
            Subscribe here
            </button>
        </form>

      </div>
      <SuscribeModal
        message={copyState.message}
        err={copyState.errors}
        handleOk={handleOk}
        visible={visible}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export const NewsLetter = React.memo(NewsLetterMemo);


