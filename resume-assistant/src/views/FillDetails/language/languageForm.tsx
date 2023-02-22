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
  
  const LanguageForm = () => {
      return(
          <>
            <Form.Item label="语种类型" name='languageType'>
                <Input />
            </Form.Item>
            <Form.Item label="是否为主修语种" name='ifMajoring'>
                    <Radio.Group defaultValue="yes">
                    <Radio value="yes"> 是 </Radio>
                    <Radio value="no"> 否 </Radio>
                    </Radio.Group>
            </Form.Item>
            <Form.Item label="等级考试" name='levelExam'>
                <Input />
            </Form.Item>
            <Form.Item label="分数" name='score'>
                <Input />
            </Form.Item>
            <Form.Item
                label='掌握程度'
                name='proficiency'
            >
                <Select placeholder='请选择'>
                    <Option value="motherLan">母语</Option>
                    <Option value="fluency">流利</Option>
                    <Option value="canInterview">可面试</Option>
                    <Option value="simpleConversation">简单会话</Option>
                </Select>
            </Form.Item>
            <Form.Item label="是否为最高水平" name='ifHighest'>
                <Radio.Group defaultValue="yes">
                <Radio value="yes"> 是 </Radio>
                <Radio value="no"> 否 </Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                label='听说水平'
                name='listenSpeakLevel'
                >
                <Select placeholder='请选择'>
                    <Option value="skilled">熟练</Option>
                    <Option value="fluency">流利</Option>
                    <Option value="normal">一般</Option>
                    <Option value="simple">简单</Option>
                </Select>
            </Form.Item>
            <Form.Item
                label='读写水平'
                name='writtenLevel'
                >
                <Select placeholder='请选择'>
                    <Option value="skilled">熟练</Option>
                    <Option value="fluency">流利</Option>
                    <Option value="normal">一般</Option>
                    <Option value="simple">简单</Option>
                </Select>
            </Form.Item>
            <Form.Item label="能力证书" name='projectDescription'>
                <Input />
            </Form.Item>
            <Form.Item label="证书获得日期" name='time'>
                <RangePicker />
            </Form.Item>
            <Form.Item label="技能说明" name='skillDescription'>
                <Input />
            </Form.Item>
        </>
      )
  }
  export default LanguageForm;