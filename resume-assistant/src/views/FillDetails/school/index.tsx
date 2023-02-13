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
  
  const School = () => {
      return(
          <>
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            style={{ maxWidth: 600 }}
          >
              <Form.Item label="组织" name='organization'>
                  <Input />
              </Form.Item>
              <Form.Item label="职位" name='position'>
                  <Input />
              </Form.Item>
              <Form.Item label="经历时间" name='organizationDate'>
                  <RangePicker />
              </Form.Item>
              <Form.Item label="描述" name='description'>
                  <Input />
              </Form.Item>
          </Form>
        </>
      )
  }
  export default School;