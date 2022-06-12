import React from 'react'
import styled from 'styled-components'
import AppGrid from '../../../components/AppGrid'
import { Table, Tag, Space } from 'antd';
import {columns} from '../constant/table_constant'
import { useGetAccountInfo } from '../../../hooks/AuthHook';
import type { ColumnsType,TableProps } from 'antd/lib/table';

const TransactionTable = () => {
    const {data,isLoading,error} = useGetAccountInfo() 
    // console.log('data', data)
    // console.log('data', data?.result.account.transactions)
    // const data = [{
    //     key: '1',
    // created_date: '2022-06-06',
    // type: 'deposit',
    // amount: 700,
    // current_amount: 1000,
    // ref_account_id:'eeee',
    // status:'null'
    // }]
  return (
    <TableContainer bg='#898989' pd='2rem'>
        <TableStyle tableLayout='auto' columns={columns} dataSource={data?.result.account.transactions} bordered />
    </TableContainer>
  )
}

export default TransactionTable

const TableContainer = styled(AppGrid)`
    margin-top:2em;
    border-radius:1rem;
`

const TableStyle:typeof Table = styled(Table)`
    width:100%;
    tr>th>td{
        background:blueviolet;
    }

`