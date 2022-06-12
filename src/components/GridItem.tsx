import React from 'react'
import styled from 'styled-components'

interface GridItemProps {
    size?:string
    bg?:string
    pd?:string
    children?:any
}

const GridItem = styled.div<GridItemProps> `
    flex-grow:0;
    max-width:${({size='100%'})=>(`${size}`)};
    flex-basis:${({size='100%'})=>(`${size}`)};
    background:${({bg})=>(`${bg}`)};
    padding:${({pd})=>(`${pd}`)};
    @media screen and (max-width: 768px){
        flex-grow:0;
        max-width:100%;
        flex-basis:100%;
    }
`

export default GridItem