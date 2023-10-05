import { Typography } from "antd"

function AppFooter() {
    return (<div className='AppFooter'>
        <Typography.Link href="tel:0123456789">0123456789</Typography.Link>
        <Typography.Link href="https://github.com/" target="_blank">Privacy policy</Typography.Link>
        <Typography.Link href="https://www.youtube.com/" target="_blank">Privacy policy</Typography.Link>
    </div >

    )
}
export default AppFooter