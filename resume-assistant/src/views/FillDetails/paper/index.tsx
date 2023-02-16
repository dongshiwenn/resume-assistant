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
  
  const Paper = () => {
      return(
          <>
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            style={{ maxWidth: 600 }}
          >
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
                    noStyle
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
                    noStyle
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
              <Form.Item label="论文内容描述" name='paperDescription'>
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
  export default Paper;