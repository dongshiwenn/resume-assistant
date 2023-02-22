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
  
  const PrizeForm = () => {
      return(
          <>
            <Form.Item label="奖项名称" name='prizeName'>
                <Input />
            </Form.Item>
            <Form.Item label="获奖时间" name='prizeTime'>
                <RangePicker />
            </Form.Item>
            <Form.Item
                    label='获奖级别'
                    name='prizeLevel'
                >
                    <Select placeholder='请选择'>
                        <Option value="collegeLevel">院级</Option>
                        <Option value="schoolLevel">校级</Option>
                        <Option value="provinceLevel">省级</Option>
                        <Option value="countryLevel">国家级</Option>
                        <Option value="other">其他</Option>
                    </Select>
            </Form.Item>
            <Form.Item label="授予单位" name='prizeUnit'>
                <Input />
            </Form.Item>
            <Form.Item label="奖项描述" name='prizeDescription'>
                <Input />
            </Form.Item>
            <Form.Item label="证明人姓名" name='certifierName'>
                <Input />
            </Form.Item>
        </>
      )
  }
  export default PrizeForm;