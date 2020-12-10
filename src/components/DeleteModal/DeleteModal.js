import React from 'react';
import { Modal } from 'antd';
import { logo } from '../../assets/img';
import "antd/dist/antd.css";
import './style.scss';

export const DeleteModal = (props) => {
    const { err } = props;
    const { message } = props;

    function errorMesage(errMessage) {
        if (err) {
            errMessage = err[0].message;
        }
        return errMessage;
    }

    return (

        <Modal
            title={<img src={logo} style={{ width: 80 }} alt="logo" />}
            visible={props.visible}

            onOk={props.handleOk}
            onCancel={props.handleCancel}
            width='300px'
        ><h3>{message || errorMesage()}</h3>
        </Modal>

    );

};