import React,{FC} from 'react'
import styled from 'styled-components'
import AppWrapper from '../../../components/AppWrapper'
import AppGrid from '../../../components/AppGrid'
import GridItem from '../../../components/GridItem'
import CardItem from '../../../components/CardItem'
import { Link } from 'react-router-dom'

// import { usePhotos } from '../../../hooks/usePhotos'
// import { usePosts } from '../../../hooks/usePosts'

// import {useAppSelector} from '../../../store/store'

const HomePage= (props:any) => {
    // const {mutate,isLoading,error} = usePosts()
    // const {posts} = useAppSelector(state=>state.photo)

    // if(isLoading) return <h1>loading...</h1>
    // if(error) return <h1>error</h1>
  return (
    <AppWrapper>
        
        <AppGrid id='section1' bg='#bebebe' height='500px'  pd='2rem 8rem'>
            <GridItem size={'40%'} bg={'#767676'} pd={'1rem'}>
                <Link to='/photo'>
                    GET PHOTO
                </Link>
            </GridItem>
            <GridItem size={'60%'} bg={'#f6f6f6'}>
                2
            </GridItem>
        </AppGrid>
        <AppGrid id='section2' bg='#404040' height='300px' cgap='3%' justifyContent='center'  pd='2rem 8rem'>
            <GridItem size={'30%'} bg={'#767676'} pd={'1rem'}>
                1
            </GridItem>
            <GridItem size={'30%'} bg={'#f6f6f6'}>
                2
            </GridItem>
            <GridItem size={'30%'} bg={'#7f7f8f'}>
                3
            </GridItem>
        </AppGrid>
        <AppGrid id='section3' bg='#bebebe' alignItems='start' pd='2rem 8rem' rgap='2rem' cgap='2%' justifyContent='center'>
            <GridItem size={'100%'} bg={'#767676'} pd={'1rem'}>
                <AppGrid justifyContent='center'>
                    Center Content
                </AppGrid>
            </GridItem>
            <GridItem size={'30%'} bg={'#f6f6f6'} pd={'1rem'}>
                <AppGrid justifyContent='center'>
                    Center Title
                </AppGrid>
                <AppGrid justifyContent='center'>
                    Center SubTitle
                </AppGrid>
            </GridItem>
            <GridItem size={'30%'} bg={'#f6f6f6'} pd={'1rem'}>
                <div>
                    Title
                </div>
                <div>
                    Subtitle
                </div>
            </GridItem>
            <GridItem size={'30%'} bg={'#f6f6f6'} pd={'1rem'}>
                <div>
                    Title
                </div>
                <div>
                    Subtitle
                </div>
            </GridItem>
        </AppGrid>
        <AppGrid id='section4' bg='#404040'  pd='2rem 8rem' cgap='2%' rgap='1rem'>
            <GridItem size='40%' bg='#f1f1f1'>
                <CardItem>
                    <div className='card-header'>
                        Card Header
                    </div>
                    <div className='card-body'>
                        Card Body
                    </div>
                    <div className='card-footer'>
                        Card Footer
                    </div>
                </CardItem>
            </GridItem>
            <GridItem size='58%' bg='#969696'>
                <AppGrid  alignItems='center' pd='2rem 2rem 0' justifyContent='center'>
                    <div>
                        Title
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni commodi cum exercitationem ducimus iste eveniet aliquid ut excepturi hic alias, maxime est error ipsum porro, laboriosam minima in, quidem ipsa? Minima dolorum quo veritatis expedita facere accusantium a architecto numquam.
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni commodi cum exercitationem ducimus iste eveniet aliquid ut excepturi hic alias, maxime est error ipsum porro, laboriosam minima in, quidem ipsa? Minima dolorum quo veritatis expedita facere accusantium a architecto numquam.
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni commodi cum exercitationem ducimus iste eveniet aliquid ut excepturi hic alias, maxime est error ipsum porro, laboriosam minima in, quidem ipsa? Minima dolorum quo veritatis expedita facere accusantium a architecto numquam.
                    </div>
                </AppGrid>
            </GridItem>
        </AppGrid>
        <AppGrid id='section5' bg='#bebebe' height='200px'>
            Section5
        </AppGrid>
    </AppWrapper>
  )
}

export default HomePage