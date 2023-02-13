import {
  Form,
  Input,
  Radio,
  Select,
  DatePicker,
} from 'antd';

const { Option } = Select;

import styles from './index.module.scss';

const BasicInfo = () => {
    return(
        <>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          style={{ maxWidth: 600 }}
        >
            <Form.Item label="姓名" name='name'>
                <Input />
            </Form.Item>
            <Form.Item label="性别" name='gender'>
                <Radio.Group defaultValue="male">
                <Radio value="male"> 男 </Radio>
                <Radio value="female"> 女 </Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item label="证件" name='certification'>
                <Input.Group compact>
                    <Form.Item
                    name={['certification', 'certifyWays']}
                    noStyle
                    >
                    <Select defaultValue='idCard'>
                        <Option value="idCard">身份证</Option>
                        <Option value="passport">护照</Option>
                        <Option value="permentPermissionHAM">港澳永久通行证</Option>
                        <Option value="permissionTai">台胞证</Option>
                        <Option value="notPermentPermissionHAM">港澳非永久通行证</Option>
                        <Option value="officers">军官证</Option>
                        <Option value="else">其他</Option>
                    </Select>
                    </Form.Item>
                    <Form.Item
                    name={['address', 'certifyNumber']}
                    noStyle
                    >
                    <Input style={{ width: '50%' }} placeholder="请输入证件号码" />
                    </Form.Item>
                </Input.Group>
            </Form.Item>
            <Form.Item label="出生日期" name='birthDate'>
                <DatePicker placeholder='请选择'/>
            </Form.Item>
        </Form>
      </>
    )
}
export default BasicInfo;