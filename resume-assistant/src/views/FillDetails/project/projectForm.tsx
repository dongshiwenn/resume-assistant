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
  
  const ProjectForm = () => {
      return(
          <>
            <Form.Item label="项目名称" name='projectName'>
                <Input />
            </Form.Item>
            <Form.Item label="公司名称" name='companyName'>
                <Input />
            </Form.Item>
            <Form.Item label="项目职位" name='position'>
                <Input />
            </Form.Item>
            <Form.Item label="项目时间" name='projectTime'>
                <RangePicker />
            </Form.Item>
            <Form.Item label="项目描述" name='projectDescription'>
                <Input />
            </Form.Item>
            <Form.Item label="项目职责" name='projectDuty'>
                <Input />
            </Form.Item>
            <Form.Item label="证明人姓名" name='dcertifierName'>
                <Input />
            </Form.Item>
            <Form.Item label="证明人联系方式" name='certifierContect'>
                <Input />
            </Form.Item>
        </>
      )
  }
  export default ProjectForm;