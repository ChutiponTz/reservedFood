import React,{FC, useEffect,useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate, useNavigate ,useLocation} from "react-router-dom";
import { useAppSelector } from './store/store';

import {
  AppNavbar,
  AppSidebar
} from './components'


import {
  HomePage,
  PhotoPage,
  SigninPage,
  SignupPage,
  DepositWithdrawPage,
  TransferPage,
  StatementPage,
  ErrorPage
} from './modules/index'

const AuthWrapper:FC<any> = ({children})=>{
  const { user } = useAppSelector(state => state.auth)
    // let navigate = useNavigate();
    let location = useLocation();
    if(!user) return <Navigate to="/signin" state={{ from: location }} replace />;
    return children
}

const ProtectWrapper:FC<any> = ()=>{
  return (
    <>
      <Outlet/>
    </>
  )
}


const RouterApp = () => {
  const [isOpen,setIsOpen] = useState(false)
  const toggle = ()=>{
    setIsOpen(!isOpen)
  }
  const scrollWithOffset = (el:any, offset:number) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
        top: elementPosition,
        left: 0,
        behavior: "smooth"
    })
}
  return (
    <Router>
      <AppNavbar  toggle={toggle} scrollWithOffset={scrollWithOffset}/>
      <AppSidebar isOpen={isOpen} toggle={toggle} scrollWithOffset={scrollWithOffset}/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/' element={<AuthWrapper>
          <ProtectWrapper/>
        </AuthWrapper>}>
          <Route path='/photo' element={<PhotoPage/>}/>
        </Route>
        <Route path='/signin' element={<SigninPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/depositAndWithdraw' element={<DepositWithdrawPage/>}/>
        <Route path='/transfer' element={<TransferPage/>}/>
        <Route path='/statement' element={<StatementPage/>}/>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default RouterApp