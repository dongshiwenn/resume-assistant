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
  
  const School = () => {
      return(
          <>
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            style={{ maxWidth: 600 }}
          >
              <Form.Item label="组织" name='organization'>
                  <Input />
              </Form.Item>
              <Form.Item label="职位" name='position'>
                  <Input />
              </Form.Item>
              <Form.Item label="经历时间" name='organizationDate'>
                  <RangePicker />
              </Form.Item>
              <Form.Item label="企业性质" name='rank'>
                <Select placeholder="请选择">
                    <Option value="idCard">国有企业</Option>
                    <Option value="passport">政府机关/非盈利机构</Option>
                    <Option value="permentPermissionHAM">私营/民营企业</Option>
                    <Option value="permissionTai">国内上市公司</Option>
                    <Option value="notPermentPermissionHAM">事业单位</Option>
                    <Option value="permissionTai">外商独资/外企办事处</Option>
                    <Option value="notPermentPermissionHAM">中外合营/合资/合作</Option>
                </Select>
              </Form.Item>
              <Form.Item label="企业规模" name='rank'>
                <Select placeholder="请选择">
                    <Option value="idCard">1-49人</Option>
                    <Option value="passport">50-99人</Option>
                    <Option value="permentPermissionHAM">100-499人</Option>
                    <Option value="permissionTai">500-999人</Option>
                    <Option value="notPermentPermissionHAM">1000人</Option>
                </Select>
              </Form.Item>
              <Form.Item label="工作描述" name='description'>
                  <Input />
              </Form.Item>
          </Form>
        </>
      )
  }
  export default School;