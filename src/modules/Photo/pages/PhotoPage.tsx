import React,{FC,useState} from 'react'
import AppWrapper from '../../../components/AppWrapper'
import AppGrid from '../../../components/AppGrid'
import GridItem from '../../../components/GridItem'
import { usePhotos } from '../../../hooks/PhotoHook'
import { usePosts } from '../../../hooks/PostHook'
import { Photo } from '../../../types'
import CardPhoto from '../components/CardPhoto'


import {useAppSelector} from '../../../store/store'



const PhotoPage:FC = () => {
    const {data:photos,isLoading,error} = usePhotos()
    //const [photo,setPhoto] = useState([])
    if(isLoading) return <h1>Loading...</h1>
    if(error) return <h1>Error</h1>
    return (
        <AppWrapper>
            <AppGrid cgap='2%' pd='2rem 8rem'>
                
                {
                photos.map((el:Photo,i:number)=>{
                    return <GridItem size='30%'>
                        <CardPhoto photo={el}/>
                        </GridItem>
                })
            }
                
            </AppGrid>
            
        </AppWrapper>
    )
}

export default PhotoPage