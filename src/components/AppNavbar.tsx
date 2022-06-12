import React, { FC } from 'react'
import { NavLink as Link } from 'react-router-dom'
import {FaBars,FaGithub,FaUser,FaSignOutAlt} from 'react-icons/fa'
import styled from 'styled-components'
import { NavHashLink } from 'react-router-hash-link';

import {useAppSelector,useAppDispatch} from '../store/store'
import { signOut } from '../store/slices/authSlice';

interface AppNavbarProps {
    toggle():any
    scrollWithOffset(el:any, offset:number):any
}

const AppNavbar:FC<AppNavbarProps> = ({toggle,scrollWithOffset}) => {
    const {user} = useAppSelector(state=>state.auth)
    const dispatch = useAppDispatch()
  return (
    <Nav>
    <NavLink to='/'>
        <div className='logo'>
            Restaurant Reserve
    </div>
    </NavLink>
    <Bars onClick={toggle}/>
    <NavMenu>
        
        {/* <NavLink  to='#section1' smooth scroll={(el:HTMLElement) =>  scrollWithOffset(el, 80)} >
            Section 1
        </NavLink>
        <NavLink to='#section2' smooth scroll={(el:HTMLElement) =>  scrollWithOffset(el, 80)}  >
            Section 2
        </NavLink>
        <NavLink  to='#section3' smooth scroll={(el:HTMLElement) =>  scrollWithOffset(el, 80)} >
            Section 3
        </NavLink>
        <NavLink to='#section4' smooth scroll={(el:HTMLElement) =>  scrollWithOffset(el, 80)}  >
            Section 4
        </NavLink>
        <NavLink to='#section5' smooth scroll={(el:HTMLElement) =>  scrollWithOffset(el, 80)}  >
            Section 5
        </NavLink> */}
    </NavMenu>
    <NavBtn>
        {localStorage.getItem('token')?<>
        <NavLink  to='/statement'  >
            History
        </NavLink>
        {/* <NavLink  to='/depositAndWithdraw'  >
            Deposit/Withdraw
        </NavLink>
        <NavLink  to='/transfer' >
            Transfer
        </NavLink> */}
            <NavBtnLink onClick={()=>dispatch(signOut())}>
            <FaSignOutAlt size={18}/>
                Sign Out
        </NavBtnLink>
        </>
        :
        <>
         <NavBtnLink href='/signin'>
            <FaUser size={18}/>
                Sign In
        </NavBtnLink>
            <NavBtnLink href='/signup' >
            <FaUser size={18}/>
                New Account
        </NavBtnLink>
        </>
        }
    </NavBtn>
</Nav>
  )
}

export default AppNavbar


const Nav = styled.nav`
  /* background:linear-gradient(90deg, rgba(174,214,238,1) 28%, rgba(155,148,233,1) 84%); */
    background:#000;
    height:80px;
    display:flex;
    justify-content:space-around;
    padding:0.5rem calc((100vw - 1600px)/2);
    z-index:10;
    /* position: fixed; */
    top: 0;
    overflow: hidden;
    width: 100vw;
    /* @media screen and (max-width: 768px){
        top:100;
    } */
`

const NavLink = styled(Link)`
    color:#fff !important;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding:0 1.5rem;
    /* height:100%; */
    cursor: pointer;
    
    &:hover {
        color:blueviolet !important;
    }
    img{
    height:2.8rem;
    width:2.8rem;
    }
`

const Bars = styled(FaBars)`    
    display:none;
    color: #fff;

    @media screen and (max-width: 768px){
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform:translate(-100%,75%);
        font-size:1.8rem;
        cursor: pointer;
    }
`

const NavMenu = styled.div`
    display:flex;
    align-items:center;

    @media screen and (max-width: 768px){
        display:none;
    }
`

const NavBtn = styled.nav`
    display:flex;
    align-items:center;
    margin-right:24px;
    gap:1rem;
    @media screen and (max-width: 768px){
        display:none;
    }
`

const NavBtnLink = styled.a`
    border-radius:4px;
    background:blueviolet;
    padding:10px 22px;
    color:#fff;
    border:none;
    cursor: pointer;
    transition:all 0.2 ease-in-out;
    text-decoration:none;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:0.5rem;
    &:hover{
        transition:all 0.2s ease-in-out;
        background:#fff;
        color:#010606;
    }
`