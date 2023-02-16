import {
    Form,
    Input,
    Radio,
    Select,
    DatePicker,
  } from 'antd';
  
  const { Option } = Select;
  
  import Footer from '../footer';
  import styles from './index.module.scss';
  
  const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
  };
  
  const JobIntension = () => {
  
      return(
          <>
          <Form
            name='basicInfoForm'
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            style={{ maxWidth: 600 }}
          >
              <Form.Item label="期望职位" name='expectedPosition'>
                  <Input />
              </Form.Item>
              <Form.Item label="期望地点" name='expectedCity'>
                  <Input />
              </Form.Item>
              <Form.Item label="是否接受调剂" name='ifAcceptAdjustment'>
                  <Radio.Group defaultValue="yes">
                  <Radio value="yes"> 是 </Radio>
                  <Radio value="no"> 否 </Radio>
                  </Radio.Group>
              </Form.Item>
              <Form.Item label="可面试城市" name='name'>
                  <Input />
              </Form.Item>
          </Form>
        </>
      )
  }
  export default JobIntension;