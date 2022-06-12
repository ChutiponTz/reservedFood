import React, { FC,useEffect } from 'react'
import AppWrapper from '../../../components/AppWrapper'
import AppGrid from '../../../components/AppGrid'
import GridItem from '../../../components/GridItem'
import { Form, Input, Button,message } from 'antd';
import { useSignIn } from '../../../hooks/AuthHook';
import { useAppSelector } from '../../../store/store';
import {  useNavigate } from "react-router-dom";
import CardItem from '../../../components/CardItem';

const SigninPage:FC<any> = () => {
  const {mutate,isLoading,error} = useSignIn()
  const {user} = useAppSelector(state=>state.auth)
  const onFinish = (values: any) => {
     console.log('values :>> ', values);
    mutate({...values})
    //console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
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
      <GridItem size={'45%'}  bg={'#656565'}>     
        <CardItem>
          <div className='card-header'>SIGN IN</div>
          <div className='card-body'>
          <Form
          {...layout} 
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
          <Form.Item
          label="Account"
          name="userName"
          rules={[{ required: true, message: 'Please input your username!' }]}
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
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        {
          error && <p style={{color:'red',fontSize:'1rem'}}>* {error.message}</p>
        }
      </Form>
          </div>
        </CardItem>
      </GridItem>
      </AppGrid>
    </AppWrapper>
  )
}

export default SigninPage