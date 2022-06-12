import React,{useState} from 'react'
import styled from 'styled-components'
import AppWrapper from '../../../components/AppWrapper'
import AppGrid from '../../../components/AppGrid'
import GridItem from '../../../components/GridItem'
import {ConfirmModal} from '../../../components/AppModal'
import { InputNumber,Input,Form } from 'antd';
import { useGetBalance,useTransfer } from '../../../hooks/TransactionHook'
import { UserOutlined } from '@ant-design/icons';
import { useForm } from 'antd/lib/form/Form'


const TransferPage = () => {
    const [form] = useForm()
    const {data,isLoading,error } = useGetBalance()
    const {mutate:transfer} = useTransfer()

    const handleFinish=(values:{received_id:string,transfer:number})=>{

        console.log('value', values)
        ConfirmModal({
            title:'ต้องการโอน token ใช่หรือไม่?',
        content:`จำนวน ${values.transfer} TOKEN โอนไปยัง ${values.received_id}`,
        action:()=>transfer({amount:values.transfer,ref_account:values.received_id })
    })
    }

  return (
    <AppWrapper>
        <AppGrid bg='#bebebe' height='90vh'  pd='2rem 8rem' justifyContent='center' alignItems='center'>
        <GridItem size={'45%'}  >    
              <CardItem>
                  <div className='card-header'>
                   Transfer
                  </div>
                  <div className='card-body'>
                      {
                           <div>
                               <Form form={form} onFinish={handleFinish}>
                                   <Form.Item name='received_id' rules={[{ required: true, message: 'Missing received ID' }]}>
                                    <Input prefix={<UserOutlined />}
                                    size="large" placeholder="Received ID"
                                    />
                               </Form.Item>
                                   <Form.Item name='transfer' rules={[{ required: true, message: 'Missing transfer range is 20.00-20,000.00 TOKEN' }]}>
                              <InputNumber min={20} max={20000}
                              style={{width:'100%'}}
                              bordered={true} 
                              size='large'  
                              placeholder='0.00' 
                              addonAfter={<div>TOKEN</div>} 
                              />
                              </Form.Item>
                           
                                 
                                <p style={{textAlign:'center',padding:'0.25rem 0 0.25rem'}}>Withdraw range is 20.00-20,000.00 TOKEN</p>
                                <div className='available-container'>
                                    <div>Available</div>
                                    <div>{data?.result} token</div>
                                </div>
                                <div className='button-container'>
                                <button type='button'  onClick={()=>form.setFieldsValue({transfer:data?.result*0.25 }) }>25%</button>
                                    <button type='button'  onClick={()=>form.setFieldsValue({transfer:data?.result*0.5 })}>50%</button>
                                    <button type='button'  onClick={()=>form.setFieldsValue({transfer:data?.result*0.75 })}>75%</button>
                                    <button type='button'  onClick={()=>form.setFieldsValue({transfer:data?.result })}>100%</button>
                                </div>
                                <button type='submit'  className='button-submit'>
                                    Submit
                                </button>
                                </Form>
                          </div>
                      }

                  </div>
              </CardItem>
          </GridItem>
        </AppGrid>
    </AppWrapper>
  )
}

export default TransferPage


const CardItem = styled.div`
    width:auto;
    height:400px;
    @media screen and (max-width: 768px){
        height:auto;
    }
    .card-header{
        height:15%;
        min-height:60px;
        background:#676874;
        /* padding:1rem; */
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:0.8rem;
        font-weight:800;
    }
    .card-body{
        height:85%;
        background:#555555;
        padding:1rem;
        display:flex;
        gap:1rem;
        justify-content:center;
        align-items:center;
        /* font-size:2rem; */
        /* font-weight:800; */
        .available-container{
            display:flex;
            justify-content:space-between;
            padding:0.25rem 0 0.25rem;
            color:#969686
        }
        .button-container{
            display:flex;
            gap:0.8rem;
            justify-content:space-between;
            flex-wrap:wrap;
            button{
            width:60px;
            padding:0.5rem 0.5rem;
            color:#fff;
            cursor: pointer;
            background:#969686;
            border-radius:10px;
            
        }
        button:hover{
                color:grey;
            }
        }
        .button-submit{
            width:100%;
            margin-top:1rem;
            font-size:1.5rem;
            color:#fff;
            background:#767676;
            cursor: pointer;
        }
        .button-submit:hover{
            color:grey;
        }
        img{
            width:100%;
            height:100%;
        }
    }
`