import { MailOutlined, BellFilled } from '@ant-design/icons/lib/icons';
import { Badge, Image, Space, Typography } from 'antd';

function AppHeader() {
    return (<div className="AppHeader">
        <Image width={40} src='/' />
        <Typography.Title>Train</Typography.Title>
        <Space>
            <Badge count={5} dot>
                <MailOutlined style={{ fontSize: 24 }} />
            </Badge>
            <Badge count={10}>
                <BellFilled style={{ fontSize: 24 }} />
            </Badge>
        </Space >
    </div >

    )
}
export default AppHeader