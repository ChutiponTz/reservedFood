import React,{ useState} from 'react'
import styled from 'styled-components'
import AppWrapper from '../../../components/AppWrapper'
import AppGrid from '../../../components/AppGrid'
import GridItem from '../../../components/GridItem'
import {ConfirmModal} from '../../../components/AppModal'
import { InputNumber,Form,Button } from 'antd';
import { useDeposit, useGetBalance, useWithdraw } from '../../../hooks/TransactionHook'
import { useForm } from 'antd/lib/form/Form'


const DepositWithdrawPage:any = () => {
    const [form] = useForm()
    const styleUnSelect = {'background':'#676874'}
    const [selected,setSelected] = useState('deposit')
    const [amount,setAmount] = useState({deposit:0,withdraw:0})
    const {mutate:deposit} = useDeposit()
    const {data,isLoading,error } = useGetBalance()
    const {mutate:withdraw} = useWithdraw()
    const handleFinish = (values:{deposit:number,withdraw:number})=>{
        // console.log('values', values)
        if(!!values.deposit){
            ConfirmModal({
                title:'ต้องการฝาก token เข้าระบบใช่หรือไม่?',
            content:`จำนวน ${values.deposit} TOKEN`,
            action:()=>deposit({amount:values.deposit })
        })
        }else if(!!values.withdraw){
            ConfirmModal({
                title:'ต้องการถอน token ออกจากระบบใช่หรือไม่?',
            content:`จำนวน ${values.withdraw} TOKEN`,
            action:()=>withdraw({amount:values.withdraw })
        })
        
        }
    }
  return (
    <AppWrapper>
          <AppGrid bg='#bebebe' height='90vh'  pd='2rem 8rem' justifyContent='center' alignItems='center'>
          <GridItem size={'45%'}  >    
              <CardItem>
                  <div className='card-header'>
                    <div className='tab' style={selected !=='deposit'? styleUnSelect: {}} onClick={()=>setSelected('deposit')}>
                        Deposit
                    </div>
                    <div className='tab' style={selected !=='withdraw'? styleUnSelect: {}} onClick={()=>setSelected('withdraw')}>
                        Withdraw
                    </div>
                  </div>
                  <div className='card-body'>
                      {
                          selected ==='deposit' && <div>
                              <Form onFinish={handleFinish} form={form}>
                             <Form.Item name='deposit' rules={[{ required: true, message: 'Missing deposit range is 20.00-20,000.00 TOKEN' }]}>
                              <InputNumber min={20} max={20000}
                              style={{width:'100%'}}
                              bordered={true} 
                              size='large'  
                              placeholder='0.00' 
                                addonAfter={<div>TOKEN</div>} 
                                /> 
                                </Form.Item>
                              
                                <p style={{textAlign:'center',padding:'0.25rem 0'}}>Deposit range is 20.00-20,000.00 TOKEN</p>
                                <div className='available-container'>
                                    <div>Available</div>
                                    <div>{data?.result} token</div>
                                </div>
                          
                                <div className='button-container'>
                                    <button type='button' onClick={()=>form.setFieldsValue({deposit:(form.getFieldValue('deposit') || 0) +100})}>+100</button>
                                    <button type='button'  onClick={()=>form.setFieldsValue({deposit:(form.getFieldValue('deposit') || 0) +200})}>+200</button>
                                    <button type='button'  onClick={()=>form.setFieldsValue({deposit:(form.getFieldValue('deposit') || 0) +500})}>+500</button>
                                    <button type='button'  onClick={()=>form.setFieldsValue({deposit:(form.getFieldValue('deposit') || 0) +1000})}>+1000</button>
                                </div>
                             
                                <button type='submit' className='button-submit'>
                                    Submit
                                </button>
                      
                                </Form>
                                {/* <button className='button-submit' onClick={()=>ConfirmModal({title:'',content:`จำนวน ${amount.deposit} TOKEN`,action:()=>deposit({account_id:localStorage.getItem('account_id'),amount:amount.deposit })})}>
                                    Submit
                                </button> */}
                              </div>
                      }
                      {
                          selected ==='withdraw' && <div>
                            <Form onFinish={handleFinish} form={form}>

                            <Form.Item name='withdraw' rules={[{ required: true, message: 'Missing withdraw range is 20.00-20,000.00 TOKEN' }]}>
                              <InputNumber min={20} max={20000}
                              style={{width:'100%'}}
                              bordered={true} 
                              size='large'  
                              placeholder='0.00' 
                                addonAfter={<div>TOKEN</div>} 
                                />
                                    </Form.Item>
                                <p style={{textAlign:'center',padding:'0.25rem 0'}}>Withdraw range is 20.00-20,000.00 TOKEN</p>
                                <div className='available-container'>
                                    <div>Available</div>
                                    <div>{data?.result} token</div>
                                </div>
                                <div className='button-container'>
                                    <button type='button'  onClick={()=>form.setFieldsValue({withdraw:data?.result*0.25 }) }>25%</button>
                                    <button type='button'  onClick={()=>form.setFieldsValue({withdraw:data?.result*0.5 })}>50%</button>
                                    <button type='button'  onClick={()=>form.setFieldsValue({withdraw:data?.result*0.75 })}>75%</button>
                                    <button type='button'  onClick={()=>form.setFieldsValue({withdraw:data?.result })}>100%</button>
                                </div>
                                <button type='submit' className='button-submit'>
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

export default DepositWithdrawPage

const CardItem = styled.div`
    width:auto;
    height:400px;
    @media screen and (max-width: 768px){
        height:auto;
    }
    .card-header{
        height:15%;
        min-height:60px;
        background:none;
        /* padding:1rem; */
        display:flex;
        justify-content:start;
        align-items:center;
        font-size:0.8rem;
        font-weight:800;
        .tab{
            width:50%;
            height:100%;
            min-height:60px;
            display:flex;
            justify-content:center;
            align-items:center;
            background:#555555;
            border-radius: 10px 10px 0px 0px;
            cursor: pointer;
        }
        .tab:hover{
            color:grey;
        }
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