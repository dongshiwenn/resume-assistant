import {
    Form,
    Input,
    Radio,
    Select,
    DatePicker,
  } from 'antd';
  
  const { Option } = Select;
  const { RangePicker } = DatePicker;
  
  import styles from './index.module.scss';
  
  const Prize = () => {
      return(
          <>
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            style={{ maxWidth: 600 }}
          >
              <Form.Item label="奖项名称" name='prizeName'>
                  <Input />
              </Form.Item>
              <Form.Item label="获奖时间" name='prizeTime'>
                  <RangePicker />
              </Form.Item>
              <Form.Item label="奖项描述" name='prizeDescription'>
                  <Input />
              </Form.Item>
          </Form>
        </>
      )
  }
  export default Prize;