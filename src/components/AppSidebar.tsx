import React, { FC } from 'react'
import {NavHashLink as LinkR} from 'react-router-hash-link'
import {FaTimes,FaGithub} from 'react-icons/fa'
import styled from 'styled-components'


interface AppSidebarProps {
    isOpen:boolean,
    toggle():any,
    scrollWithOffset(el:any, offset:number):any
}

interface SidebarContainerProps{
    isOpen:boolean
}

const AppSidebar:FC<AppSidebarProps> = ({isOpen,toggle,scrollWithOffset}) => {
    
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
    <Icon onClick={toggle}>
        <CloseIcon/>
    </Icon>
    <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink to='#section1' smooth scroll={(el:HTMLElement) =>  scrollWithOffset(el, 80)}>
            Section 1
            </SidebarLink>
            <SidebarLink to='#section2' smooth scroll={(el:HTMLElement) =>  scrollWithOffset(el, 80)}>
            Section 2
            </SidebarLink>
            <SidebarLink to='#section3' smooth scroll={(el:HTMLElement) =>  scrollWithOffset(el, 80)}>
            Section 3
            </SidebarLink>
            <SidebarLink to='#section4' smooth scroll={(el:HTMLElement) =>  scrollWithOffset(el, 80)}>
            Section 4
            </SidebarLink>
            <SidebarLink to='#section5' smooth scroll={(el:HTMLElement) =>  scrollWithOffset(el, 80)}>
            Section 5
            </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute href='https://github.com/cinecus' target='_blank'>
            <FaGithub size={18}/>
                My Github
            </SidebarRoute>
        </SideBtnWrap>
    </SidebarWrapper>
</SidebarContainer>
  )
}

export default AppSidebar


const SidebarContainer  = styled.aside<SidebarContainerProps> `  
    position:fixed;
    z-index:999;
    width:100%;
    height:100%;
    background:#0d0d0d;
    display:grid;
    align-items:center;
    top:0;
    left:0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen})=>(isOpen? '100%':'0')};
    top:${({isOpen})=>(isOpen?'0':'-100%')};
`

const CloseIcon = styled(FaTimes)`
    color:#fff;
`

const Icon = styled.div`
    position:absolute;
    top:1.2rem;
    right:1.5rem;
    background:transparent;
    font-size:2rem;
    cursor: pointer;
    outline:none;
`

const SidebarWrapper = styled.div`
    color:#fff !important;
`

const SidebarMenu = styled.ul`
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:repeat(6,80px);
    text-align:center;
    padding-inline-start:0px !important;
    @media screen and (max-width: 480px){
        grid-template-rows:repeat(6,60px)
    }
`

const SidebarLink = styled(LinkR)`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.5rem;
    text-decoration:none;
    list-style:none;
    transition:0.2s ease-in-out;
    text-decoration:none;
    color:#fff;
    cursor: pointer;

    &:hover{
        //color:#256ce1;
        transition:0.2s ease-in-out
    }
`

const SideBtnWrap = styled.div`
    display:flex;
    justify-content:center;
`

const SidebarRoute = styled.a`
    border-radius:50px;
    background:blueviolet;
    white-space:nowrap;
    padding:16px 64px;
    color:#010606;
    font-size:16px;
    outline:none;
    cursor:pointer;
    transition:all 0.2s ease-in-out;
    text-decoration:none;
    color:#fff;
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