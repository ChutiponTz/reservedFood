import React, { FC,useEffect } from 'react'
import AppWrapper from '../../../components/AppWrapper'
import AppGrid from '../../../components/AppGrid'
import GridItem from '../../../components/GridItem'
import { Form, Input, Button,message } from 'antd';
import { useSignUp } from '../../../hooks/AuthHook';
import { useAppSelector } from '../../../store/store';
import {  useNavigate } from "react-router-dom";
import CardItem from '../../../components/CardItem';

const SignupPage:FC<any>  = () => {
    const {mutate,isLoading,error} = useSignUp()
    const {user} = useAppSelector(state=>state.auth)
    const layout = {
        labelCol: { span: 9 },
        wrapperCol: { span: 20 },
      };
    
      const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
      };
    const onFinish = (values: any) => {
      mutate({...values})
      console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
  
    let navigate = useNavigate();
      useEffect(() => {
          if (!!user) {
              navigate('/')
          }
      }, [user])
    if(isLoading) return <h1>Loading...</h1>
    return (
      <AppWrapper>
        <AppGrid id='section1' bg='#bebebe' height='90vh'  pd='2rem 8rem' justifyContent='center' alignItems='center'>
        <GridItem size={'50%'}  bg={'#656565'}>     
          <CardItem>
            <div className='card-header'>SIGN UP</div>
            <div className='card-body'>
            <Form
            {...layout}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
            label="First name"
            name="firstName"
            rules={[{ required: true, message: 'Please input your firstname!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
            label="Last name"
            name="lastName"
            rules={[{ required: true, message: 'Please input your lastname!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
            label="Account name"
            name="userName"
            rules={[{ required: true, message: 'Please input your Account name!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>
          <Form.Item   {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          {
            error && <p style={{color:'red'}}>* {error.message}</p>
          }
        </Form>
            </div>
          </CardItem>
        </GridItem>
        </AppGrid>
      </AppWrapper>
    )
}

export default SignupPage