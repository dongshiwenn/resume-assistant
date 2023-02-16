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
  
  const Language = () => {
      return(
          <>
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            style={{ maxWidth: 600 }}
          >
              <Form.Item label="语种名称" name='languageType'>
                  <Input />
              </Form.Item>
              <Form.Item label="等级考试" name='levelExam'>
                  <Input />
              </Form.Item>
              <Form.Item label="分数" name='score'>
                  <Input />
              </Form.Item>
              <Form.Item
                    label='口语水平'
                    name='skillLevel'
                    noStyle
                    >
                    <Select placeholder='请选择'>
                        <Option value="motherLan">母语</Option>
                        <Option value="fluency">流利</Option>
                        <Option value="canInterview">可面试</Option>
                        <Option value="simpleConversation">简单会话</Option>
                    </Select>
                </Form.Item>
              <Form.Item label="其他能力证书" name='projectDescription'>
                  <Input />
              </Form.Item>
          </Form>
        </>
      )
  }
  export default Language;