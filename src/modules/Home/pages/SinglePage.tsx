import { useState } from 'react'
import AppWrapper from '../../../components/AppWrapper'
import AppGrid from '../../../components/AppGrid'
import CardItem from '../../../components/CardItem'
import GridItem from '../../../components/GridItem'
import { useParams } from 'react-router-dom'
import { useGetDataStoreDetail } from '../../../hooks/StoreHook'
import { useReserved } from '../../../hooks/TransactionHook'
import {Select,Form,InputNumber,Button} from 'antd'
import dayjs from 'dayjs'

const SinglePage = () => {
  const {storeId} = useParams();
  const {data,isLoading} = useGetDataStoreDetail(storeId);
  const body = useReserved();
  const resultDataDetail = data?.result.result;

  const [input,setInput] = useState();
  const [lengthTime, setLengthTime] = useState(0);

  const generateSlot:any=(close:string='23:00:00')=>{
    const tempTime = parseInt(dayjs().format('HH'));
    const currentTime = `${tempTime+1}:00:00`;
    const [timeOpen,timeClose] = [+currentTime.split(':')[0], +close.split(':')[0]]
    return Array(timeClose-timeOpen).fill(0).map((el,i)=>{
      return { label:`${timeOpen+i}:00 -  ${timeOpen+i+1}:00` ,value:`${timeOpen+i}:00:00`   }
    })
  }

  const handlerChange = (event:any) => {
    const keyword = event ;
    setInput(keyword);
    setLengthTime(getCurrentQty(keyword,data?.result.dataHistory,data?.result.result.maxQty));
    
  }

  const getCurrentQty = (reserveTime:string,arrayHistory:[obj:{reservedTime:string,currentQty:number}],max:number)=>{
    const find =  arrayHistory.find(el=>el.reservedTime == reserveTime) 
    return !!find ? find.currentQty:max
  }


  const handleFinish =(values:{reserveTime:string,qty:number})=>{
    //console.log('values', values);
    const requestData = {
        userId: localStorage.getItem('accountId'),
        storeId: resultDataDetail._id,
        reservedQty:values.qty,
        reservedTime: values.reserveTime,
        reservedDate: dayjs().format('YYYY-MM-DD'),
        type:'reserved'
    }

    if(!localStorage.getItem('token')){
        window.location.href = "/signin";
    }else{
        body.mutate(requestData);
    }
    
  }

  if(isLoading) return <h1>loading...</h1>

  return (
    <AppWrapper>
        
        <AppGrid id='mainGrid' bg='#C0C0C0' height='5vh' pd='3rem 8rem' cgap='2%' rgap='2rem'>
            <h1>{resultDataDetail?.storeName}  </h1>
        </AppGrid>
        <AppGrid id='mainGrid' bg='#C0C0C0' height='auto' pd='3rem 8rem' cgap='2%' rgap='2rem'>
            <GridItem size='50%'  bg='#f1f1f1'>
                <CardItem  bd_height='100%' height='400px'>
                    <div className='card-body'>
                        <img src={resultDataDetail?.picUrl} />
                    </div>
                    <label><h2>OPEN : {resultDataDetail.openStore} - {resultDataDetail.closeStore}</h2></label>
                </CardItem>
            </GridItem>
        </AppGrid>
        <AppGrid id='mainGrid' bg='#C0C0C0' height='auto' pd='3rem 8rem' cgap='2%' rgap='2rem'>
            

        <Form onFinish={handleFinish} >
            <Form.Item name='reserveTime'>
            <Select 
                placeholder='Select Reserve Time' 
                onChange={handlerChange}
                options={resultDataDetail? generateSlot(resultDataDetail?.closeStore):[]}
            />
            </Form.Item>
            <Form.Item name='qty'>
              <InputNumber placeholder='Input Reserve Person' min="1" required/>
            </Form.Item>
            <Form.Item >
              <h1>จำนวนที่จองได้{" "}{lengthTime} </h1>
            </Form.Item>
            <Form.Item>
              <Button htmlType='submit' type='primary'>
                SUBMIT
              </Button>
            </Form.Item>
          </Form>
        </AppGrid>
    </AppWrapper>
  )
}

export default SinglePage