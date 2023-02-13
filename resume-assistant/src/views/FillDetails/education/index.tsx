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
  
  const Education = () => {
      return(
          <>
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            style={{ maxWidth: 600 }}
          >
              <Form.Item label="学历" name='education'>
                  <Input />
              </Form.Item>
              <Form.Item label="学校" name='school'>
                  <Input />
              </Form.Item>
              <Form.Item label="是否海外院校" name='ifOverseas'>
                  <Radio.Group defaultValue="notOverseas">
                  <Radio value="isOverseas"> 是 </Radio>
                  <Radio value="notOverseas"> 否 </Radio>
                  </Radio.Group>
              </Form.Item>
              <Form.Item label="院系" name='college'>
                  <Input />
              </Form.Item>
              <Form.Item label="专业" name='major'>
                  <Input />
              </Form.Item>
              <Form.Item label="主修课程" name='majorCourse'>
                  <Input />
              </Form.Item>
              <Form.Item label="研究方向" name='researchDirection'>
                  <Input />
              </Form.Item>
              <Form.Item label="在校时间" name='schoolDate'>
                  <RangePicker />
              </Form.Item>
              <Form.Item label="专业排名" name='rank'>
                  <Input.Group compact>
                      <Form.Item
                      name={['rank', 'gpaRank']}
                      noStyle
                      >
                      <Select placeholder="请选择">
                          <Option value="idCard">前1%</Option>
                          <Option value="passport">1%-5%</Option>
                          <Option value="permentPermissionHAM">5%-20%</Option>
                          <Option value="permissionTai">20%-50%</Option>
                          <Option value="notPermentPermissionHAM">50%及以下</Option>
                      </Select>
                      </Form.Item>
                      <Form.Item
                      name={['address', 'gpaRate']}
                      noStyle
                      >
                      <Input style={{ width: '50%' }} placeholder="请输入GPA/总分" />
                      </Form.Item>
                  </Input.Group>
              </Form.Item>
              <Form.Item label="实验室名称" name='laboratoryName'>
                  <Input />
              </Form.Item>
              <Form.Item label="导师姓名" name='teacherName'>
                  <Input />
              </Form.Item>
              <Form.Item label="导师联系方式" name='teacherContact'>
                  <Input />
              </Form.Item>
          </Form>
        </>
      )
  }
  export default Education;