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
  
  const ItSkillsForm = () => {
      return(
          <>
            <Form.Item label="IT技能" name='languageType'>
                <Input />
            </Form.Item>
            <Form.Item
                label='使用时间'
                name='useTime'
                >
                <Select placeholder='请选择'>
                    <Option value="tillSixMonth">0-6个月</Option>
                    <Option value="tillOneYear">6个月-一年</Option>
                    <Option value="aboveOneYear">一年以上</Option>
                </Select>
            </Form.Item>
            <Form.Item
                label='熟练程度'
                name='level'
                >
                <Select placeholder='请选择'>
                    <Option value="normal">一般</Option>
                    <Option value="skillful">熟练</Option>
                    <Option value="master">精通</Option>
                </Select>
            </Form.Item>
            <Form.Item label="技能说明" name='skillDescription'>
                <Input />
            </Form.Item>
        </>
      )
  }
  export default ItSkillsForm;