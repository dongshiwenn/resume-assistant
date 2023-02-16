import { Avatar, Button, Form, Input, InputNumber, Modal, Typography } from 'antd';

const Footer = () => {
    return (
        <>
            <Button htmlType="submit" type="primary">
                保存
            </Button>
            <Button htmlType="button" style={{ margin: '0 8px' }}>
                保存并进入下一模块
            </Button>
        </>
    )
}

export default Footer;