import React from 'react'
import styled from 'styled-components'
import AppWrapper from '../../../components/AppWrapper'
import AppGrid from '../../../components/AppGrid'
import GridItem from '../../../components/GridItem'
import TransactionTable from '../components/TransactionTable'
import {useAppSelector} from '../../../store/store'

const StatementPage = () => {
    const account = useAppSelector(state=>state.auth)
    console.log('account :>> ', account);
  return (
    <AppWrapper>
        <AppGrid bg='#bebebe'  pd='2rem 8rem' justifyContent='center' alignItems='start'>
            <GridItem size='100%'>
                <BalanceContainer bg='#bebebe' mg='2rem 0rem' justifyContent='space-between' alignItems='start' rgap='1rem'>
                    {/* <div>
                        Welcome,{account?.user.firstName}{" "}{account?.user.lastName}
                    </div> */}
                </BalanceContainer>
                <TransactionTable />
            </GridItem>
        </AppGrid>
    </AppWrapper>
  )
}

export default StatementPage

const BalanceContainer = styled(AppGrid)`
    @media screen and (max-width: 768px){
        justify-content:center;
    }
`
