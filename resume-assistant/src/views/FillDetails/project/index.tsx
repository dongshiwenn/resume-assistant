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
  
  const Project = () => {
      return(
          <>
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            style={{ maxWidth: 600 }}
          >
              <Form.Item label="项目" name='projectName'>
                  <Input />
              </Form.Item>
              <Form.Item label="职位" name='position'>
                  <Input />
              </Form.Item>
              <Form.Item label="项目时间" name='projectTime'>
                  <RangePicker />
              </Form.Item>
              <Form.Item label="证明人" name='dcertifierName'>
                  <Input />
              </Form.Item>
              <Form.Item label="证明人联系方式" name='certifierContect'>
                  <Input />
              </Form.Item>
              <Form.Item label="项目职责" name='projectDuty'>
                  <Input />
              </Form.Item>
              <Form.Item label="项目描述" name='projectDescription'>
                  <Input />
              </Form.Item>
          </Form>
        </>
      )
  }
  export default Project;