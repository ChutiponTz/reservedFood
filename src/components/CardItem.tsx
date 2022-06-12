import styled from 'styled-components'


interface CardItemProps {
   height?:string
   hd_height?:string
    bd_height?:string
    ft_height?:string
    hd_bg?:string
    bd_bg?:string
    ft_bg?:string
}


const CardItem = styled.div<CardItemProps>`
    width:auto;
    height:${({height})=>(`${height?height:'auto'}`)}; 
    .card-header{
        height:${({hd_height})=>(`${hd_height?hd_height:'15%'}`)};
        background:${({hd_bg})=>(`${hd_bg?hd_bg:'#fffff'}`)};
        padding:1rem;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:0.8rem;
        font-weight:800;
        //position:absolute;
    }
    .card-body{
        height:${({bd_height})=>(`${bd_height?bd_height:'85%'}`)};
        background:${({bd_bg})=>(`${bd_bg?bd_bg:'#555555'}`)};
        padding:1rem;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:2rem;
        font-weight:800;
        img{
            width:100%;
            height:100%;
        }
    }
    .card-footer{
        height:${({ft_height})=>(`${ft_height?ft_height:'0%'}`)};
        background:${({ft_bg})=>(`${ft_bg?ft_bg:'#ffff6'}`)};
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:1rem;
        font-weight:800;
    }
`

export default CardItem