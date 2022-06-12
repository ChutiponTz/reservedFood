import React from 'react'
import styled from 'styled-components';
import {  useNavigate } from "react-router-dom";
import { Result, Button } from 'antd';

const ErrorPage = () => {
    let navigate = useNavigate();
    return (
    <Wrapper>
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary" onClick={()=>navigate('/')}>Back Home</Button>}
        />
    </Wrapper>
)
}

export default ErrorPage

const Wrapper = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:linear-gradient(180deg, rgba(254,236,233,1) 63%, rgba(255,255,255,1) 89%);
`