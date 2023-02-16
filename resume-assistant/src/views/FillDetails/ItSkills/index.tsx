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
  
  const ItSkills = () => {
      return(
          <>
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            style={{ maxWidth: 600 }}
          >
              <Form.Item label="IT技能" name='languageType'>
                  <Input />
              </Form.Item>
              <Form.Item label="使用时间" name='levelExam'>
                  <Input />
              </Form.Item>
              <Form.Item
                    label='熟练程度'
                    name='level'
                    noStyle
                    >
                    <Select placeholder='请选择'>
                        <Option value="normal">一般</Option>
                        <Option value="skillful">熟练</Option>
                        <Option value="master">精通</Option>
                    </Select>
                </Form.Item>
          </Form>
        </>
      )
  }
  export default ItSkills;