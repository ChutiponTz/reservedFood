import React, { FC } from 'react'
import styled from 'styled-components'

interface AppGridProps {
    id?:string
    pd?:string
    cgap?:string
    rgap?:string
    height?:string
    bg?:string
    mg?:string
    style?:any
    justifyContent?:string
    alignItems?:string
    direction?:string
    children:any
}

const AppGrid = styled.div<AppGridProps>`
    width:100%;
    height: ${({height})=>(height?`${height}`:'auto')};
    flex-direction:${({direction})=>(direction?`${direction}`:'row')};
    column-gap:${({cgap})=>(cgap?`${cgap}`:'0')};
    row-gap:${({rgap})=>(rgap?`${rgap}`:'0')};
    background:${({bg})=>(bg?`${bg}`:'none')};
    display:flex;
    flex-wrap:wrap;
    justify-content:${({justifyContent})=>(justifyContent?`${justifyContent}`:'none')};
    align-items:${({alignItems})=>(alignItems?`${alignItems}`:'none')};
    padding:${({pd})=>(pd?`${pd}`:'0')};
    margin:${({mg})=>(mg?`${mg}`:'0')};
    @media screen and (max-width: 768px){
        padding:1rem 2rem;
        justify-content:center;
    }
`

export default AppGrid