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
  
  const WorkForm = () => {
      return(
          <>
            <Form.Item label="公司名称" name='companyName'>
                <Input />
            </Form.Item>
            <Form.Item label="公司所在城市" name='companyCity'>
                <Input />
            </Form.Item>
            <Form.Item label="部门名称" name='department'>
                <Input />
            </Form.Item>
            <Form.Item label="职位" name='position'>
                <Input />
            </Form.Item>
            <Form.Item label="职位级别" name='positionLevel'>
                <Input />
            </Form.Item>
            <Form.Item label="工作描述" name='workDescription'>
                <Input />
            </Form.Item>
            <Form.Item
                    label='工作性质'
                    name='jobCategory'
                >
                    <Select placeholder='请选择'>
                        <Option value="fullTime">全职</Option>
                        <Option value="notFullTime">兼职</Option>
                        <Option value="internship">实习</Option>
                        <Option value="other">其他</Option>
                    </Select>
            </Form.Item>
            <Form.Item label="工作时间" name='jobTime'>
                <RangePicker />
            </Form.Item>
            <Form.Item
                    label='企业性质'
                    name='enterpriseType'
                >
                    <Select placeholder='请选择'>
                        <Option value="stateOwned">国有企业</Option>
                        <Option value="private">私营企业</Option>
                        <Option value="other">其他</Option>
                    </Select>
            </Form.Item>
            <Form.Item
                    label='企业规模'
                    name='enterpriseScale'
                >
                    <Select placeholder='请选择'>
                        <Option value="small">1-99人</Option>
                        <Option value="middle">100-999人</Option>
                        <Option value="large">1000人以上</Option>
                    </Select>
            </Form.Item>
            <Form.Item label="证明人姓名" name='certifierName'>
                <Input />
            </Form.Item>
            <Form.Item label="证明人联系方式" name='certifierContect'>
                <Input />
            </Form.Item>
            <Form.Item label="证明人职责" name='certifierDuty'>
                <Input />
            </Form.Item>
        </>
      )
  }
  export default WorkForm;