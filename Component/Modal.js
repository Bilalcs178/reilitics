import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';

const CustomModal = (props) => {
  return (
    <>
        <Modal visible={props.isModalVisible} className={`modal-bg ${props.customClass}`} onOk={props.handleOk} footer={false} onCancel={() => props.setErrorModel(false)} closable={props.closable}>

          {props.children}

        </Modal>
    </>
  );
};
export default CustomModal