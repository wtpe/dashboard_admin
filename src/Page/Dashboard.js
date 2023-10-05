import { Card, Space, Statistic, Table } from 'antd'
import Typography from 'antd/es/typography/Typography'
import { ShoppingCartOutlined, DollarCircleOutlined, UserOutlined, ShoppingOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { getOrders } from '../API'
function Dashboard() {
    return (
        <div>
            <Typography.Text>Dashboard</Typography.Text>
            <Space direction='horizontal'>
                <DashboardCard icon={<ShoppingCartOutlined style={{
                    color: 'green',
                    borderRadius: 12,
                    fontSize: 24,
                    padding: 8
                }} />} title='Orders' value={1234} />
                <DashboardCard icon={<ShoppingOutlined style={{
                    color: 'blue',
                    borderRadius: 12,
                    fontSize: 24,
                    padding: 8
                }} />} title='Inventory' value={1234} />
                <DashboardCard icon={<UserOutlined style={{
                    color: 'red',
                    borderRadius: 12,
                    fontSize: 24,
                    padding: 8
                }} />} title='Customers' value={1234} />
                <DashboardCard icon={<DollarCircleOutlined style={{
                    color: 'orange',
                    borderRadius: 12,
                    fontSize: 24,
                    padding: 8
                }} />} title='Revenue' value={1234} />
            </Space>
            <Space>
                <RecentOrders />
            </Space>
        </div>
    )
}
function DashboardCard({ title, value, icon }) {
    return (
        <Card>
            <Space direction='horizontal'>
                {icon}
                <Statistic title={title} value={value} />
            </Space>
        </Card>
    )
}
function RecentOrders() {
    const [dataSource, setDataSource] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        getOrders.then(res => {
            setDataSource(res.products);
            setLoading(false);
        });
    }, []);

    return <Table columns={[
        {
            title: 'Title',
            dataIndex: 'title'
        },
        {
            title: 'Brand',
            dataIndex: 'brand'
        },
        {
            title: 'Price',
            dataIndex: 'price'
        },
    ]}
        loading={loading}
        dataSource={dataSource}
    >

    </Table>
}
export default Dashboard