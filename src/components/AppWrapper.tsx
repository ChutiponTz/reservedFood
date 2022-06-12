import React,{FC} from 'react'
import styled from 'styled-components'

const AppWrapper:FC<any>= (props) => {
  return (
    <Wrapper>
        <Container>
                {props.children}
        </Container>
    </Wrapper>
  )
}

export default AppWrapper

const Wrapper = styled.div`
    width:100vw;
    height:auto;
    min-height:100vh;
    background:#f1eeee;
`

const Container = styled.div`
    width:100%;
    margin:0 auto;
`
