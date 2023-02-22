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
  
  const PaperForm = () => {

      return(
          <>
            <Form.Item label="论文题目" name='paperName'>
                <Input />
            </Form.Item>
            <Form.Item label="论文发表时间" name='paperTime'>
                <RangePicker />
            </Form.Item>
            <Form.Item label="出版社" name='publisher'>
                <Input />
            </Form.Item>
            <Form.Item
                label='文章贡献'
                name='articleContribution'
                >
                <Select placeholder='请选择'>
                    <Option value="one">第一作者</Option>
                    <Option value="two">第二作者</Option>
                    <Option value="three">第三作者</Option>
                </Select>
            </Form.Item>
            <Form.Item
                label='发表级别'
                name='paperLevel'
            >
                <Select placeholder='请选择'>
                    <Option value="idCard">自然</Option>
                    <Option value="passport">nature</Option>
                    <Option value="permentPermissionHAM">期刊</Option>
                </Select>
            </Form.Item>
            <Form.Item label="导师姓名" name='teacherName'>
                <Input />
            </Form.Item>
            <Form.Item label="作者" name='author'>
                <Input />
            </Form.Item>
            <Form.Item label="论文内容描述" name='paperDescription'>
                <Input />
            </Form.Item>
        </>
      )
  }
  export default PaperForm;