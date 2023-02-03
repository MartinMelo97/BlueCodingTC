import { Table, Typography } from "antd"

export const History = ({ history }) => {
    const columns = [
        {
            title: 'Search Value',
            dataIndex: 'value',
            key: 'value'
        },
        {
            title: 'Date/Time',
            dataIndex: 'datetime',
            key: 'datetime'
        }
    ]
    return (
        <>
            <Typography.Title level={3}>Search Results</Typography.Title> 
            <Table columns={columns} dataSource={history} />
        </>
    )
}