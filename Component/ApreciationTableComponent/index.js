import React from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';


const columns = [
    {
        title: 'Average appreciation',
        render: (record, text, index) => <p className='mb-0'>{Math.round(record.avgGrowth * 100) / 100}%</p>,
        width: '10%',
        fixed: 'left',
        bordered: true,
    },
    {
        title: '2018',
        render: (record, text, index) => <>{Math.round(record.y2018 * 100) / 100}%</>,
    },
    {
        title: '2019',
        render: (record, text, index) => <>{Math.round(record.y2019 * 100) / 100}%</>,
    },
    {
        title: '2020',
        render: (record, text, index) => <>{Math.round(record.y2020 * 100) / 100}%</>,
    },
    {
        title: '2021',
        render: (record, text, index) => <>{Math.round(record.y2021 * 100) / 100}%</>,
    },
    {
        title: '2022',
        render: (record, text, index) => <>{Math.round(record.y2022 * 100) / 100}%</>,
    },
    {
        title: 'Median Sale',
        dataIndex: 'median',
        render: (record) => <>${record.toLocaleString(record.median)}</>
    },
];
export default function ApreciationTableComponent(props) {

    return (<div>
        <Table columns={columns} dataSource={props.AppreciationData} size="small" />
    </div>
    )
}