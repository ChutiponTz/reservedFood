import React, { FC } from 'react'
import { Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;

interface ConfirmModalProps{
    title:string,
    content:string,
    action?:any
}

interface ErrorModalProps{
  title?:string
}

const ConfirmModal = ({title,content,action}:ConfirmModalProps)=> {

        confirm({
          title: title,
          icon: <ExclamationCircleOutlined />,
          content: content,
          onOk:()=>action(),
          onCancel() {
            console.log('Cancel');
          },
        })
}

const SuccessModal = ()=>{
    Modal.success({
      title:'Your transaction is completed successfully',
      // content: 'some messages...some messages...',
    });
}

const ErrorModal = ({title}:ErrorModalProps)=>{
  Modal.error({
    title:'Your transaction found issue',
    content:title
  })
}

export  {
  ConfirmModal,
  SuccessModal,
  ErrorModal
}