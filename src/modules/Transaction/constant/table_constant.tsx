import type { ColumnsType } from 'antd/lib/table';
import { Table, Tag, Space } from 'antd';
import moment from 'moment'
import { formatNumber } from '../../../Function';

interface DataType {
    key: string
    firstName: string
    lastName: string
    createdDate: string
    type: string
    amount: number
    current_amount: number
    ref_account_id:string
    reservedTime:string
  }

export const columns: ColumnsType<DataType> = [
    {
      title: 'Date Time',
      dataIndex: 'createdDate',
      key: 'createdDate',
      align:'center',
      render:(text)=><>{moment(text).format('YYYY-MM-DD HH:mm:ss')}</>
    },
    {
      title: 'Store Name',
      dataIndex: 'storeId',
      align:'center',
      key: 'storeId',
      render:(text)=><>{text.storeName}</>
    },
    {
      title: 'Reserved QTY',
      dataIndex: 'reservedQty',
      key: 'reservedQty',
      align:'center'
    },
    {
      title: 'Reserved Time',
      key: 'reservedTime',
      align:'center',
      dataIndex: 'reservedTime'
    },
    {
      title: 'Type',
      key: 'type',
      align:'center',
      dataIndex: 'type'
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      align:'center',
      render:(text,record)=><Tag color='lime'>Completed</Tag>
    },
  ];

