import React,{useState} from 'react'
import AppWrapper from '../../../components/AppWrapper'
import AppGrid from '../../../components/AppGrid'
import GridItem from '../../../components/GridItem'
import CardItem from '../../../components/CardItem'
import { useGetDataStore } from '../../../hooks/StoreHook'
import { Link } from 'react-router-dom'



const HomePage= (props:any) => {

    const {data,isLoading} = useGetDataStore();

    const [input,setInput] = useState("");
    const resultGetData = data?.result.result;


    const handlerChange = (event:any) => {
        const keyword = event.target.value;
        setInput(keyword);
    };

    if(isLoading) return <h1>loading...</h1>

  return (
    <AppWrapper>
        <AppGrid id='mainGrid' bg='#FFFFFF' height='10vh' pd='3rem 8rem' cgap='2%' rgap='2rem'>
            <div className="row g-3 align-items-center mt-4 justify-content-center">
                <div className="col-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="search store.."
                        value={input}
                        onChange={handlerChange}
                    />
                </div>
            </div>
        </AppGrid>
        <AppGrid id='mainGrid' bg='#FFFFFF' height='auto' pd='3rem 8rem' cgap='2%' rgap='2rem'>
            {
                resultGetData.length > 0 ? 
                    resultGetData.filter((rowCard:any) => {
                        if(input == ""){
                            return rowCard;
                        } else if (rowCard.storeName.toLowerCase().includes(input.toLowerCase())){
                            return rowCard;
                        } 
                    }).map((rowCard:any)=> {
                        return (
                            <>
                                
                                    <GridItem size='30%'  bg='#f1f1f1'>
                                        <Link to={"/"+rowCard._id}>
                                            <CardItem hd_height='20%' bd_height='50%' ft_height='10%' height='400px'>
                                                <div className='card-header'>
                                                    {rowCard.storeName}
                                                </div>
                                                <div className='card-body'>
                                                    <img src={rowCard.picUrl} />
                                                </div>
                                                <div className='card-footer'>
                                                    <div>
                                                        Open : {rowCard.openStore} - {rowCard.closeStore}
                                                    </div>
                                                
                                                </div>
                                            </CardItem>
                                        </Link>
                                    </GridItem>
                                
                            </>
                        )    
                        
                    }):<> No data </>
            }
        </AppGrid>
    </AppWrapper>
  )
}

export default HomePage