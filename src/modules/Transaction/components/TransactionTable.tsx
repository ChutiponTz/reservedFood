import React from 'react'
import styled from 'styled-components'
import AppGrid from '../../../components/AppGrid'
import { Table } from 'antd';
import {columns} from '../constant/table_constant'
import { useGetAccountInfo } from '../../../hooks/AuthHook';

const TransactionTable = () => {
    const {data} = useGetAccountInfo() 

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