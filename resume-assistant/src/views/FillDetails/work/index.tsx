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
  
  const Work = () => {
      return(
          <>
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            style={{ maxWidth: 600 }}
          >
              <Form.Item label="公司" name='companyName'>
                  <Input />
              </Form.Item>
              <Form.Item label="部门" name='department'>
                  <Input />
              </Form.Item>
              <Form.Item label="职位" name='position'>
                  <Input />
              </Form.Item>
              <Form.Item label="工作性质" name='jobCategory'>
                  <Input />
              </Form.Item>
              <Form.Item label="工作时间" name='jobTime'>
                  <RangePicker />
              </Form.Item>
              <Form.Item label="描述" name='workDescription'>
                  <Input />
              </Form.Item>
          </Form>
        </>
      )
  }
  export default Work;