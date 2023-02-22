import {
    Form,
    Input,
    Radio,
    Select,
    DatePicker,
    Col,
  } from 'antd';
  
  const { Option } = Select;
  const { RangePicker } = DatePicker;
  
  const EducationForm = () => {

      return(
          <>
                <Form.Item label="学历" name='education'>
                    <Input />
                </Form.Item>
                <Form.Item label="是否是最高学历" name='ifHighestEdu'>
                    <Radio.Group defaultValue="yes">
                    <Radio value="yes"> 是 </Radio>
                    <Radio value="no"> 否 </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="学位" name='degree'>
                    <Input />
                </Form.Item>
                <Form.Item label="是否是最高学位" name='ifHighestDegree'>
                    <Radio.Group defaultValue="yes">
                    <Radio value="yes"> 是 </Radio>
                    <Radio value="no"> 否 </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="学校" name='school'>
                    <Input />
                </Form.Item>
                <Form.Item label="学校地址" name='schoolAdress'>
                    <Input />
                </Form.Item>
                <Form.Item label="学院" name='college'>
                    <Input />
                </Form.Item>
                <Form.Item label="专业" name='major'>
                    <Input />
                </Form.Item>
                <Form.Item label="是否是学生干部" name='ifStudentCadre'>
                    <Radio.Group defaultValue="yes">
                    <Radio value="yes"> 是 </Radio>
                    <Radio value="no"> 否 </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="专业课程" name='majorCourse'>
                    <Input />
                </Form.Item>
                <Form.Item label="专业描述" name='introduceSubject'>
                    <Input />
                </Form.Item>
                <Form.Item label="研究方向" name='researchDirection'>
                    <Input />
                </Form.Item>
                <Form.Item label="在校时间" name='schoolDate'>
                    <RangePicker />
                </Form.Item>
                <Form.Item label="专业排名" name='rank'>
                    <Input />
                </Form.Item>
                <Form.Item label="成绩排名" name='gpaRank'>
                    <Input.Group compact>
                        <Form.Item
                        name={['gpaRank', 'gpaRank']}
                        // noStyle
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
                        name={['gpaRank', 'gpaRate']}
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
                <Form.Item label="是否海外院校" name='ifOverseas'>
                    <Radio.Group defaultValue="notOverseas">
                    <Radio value="isOverseas"> 是 </Radio>
                    <Radio value="notOverseas"> 否 </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="培养方式" name='trainingStyle'>
                    <Radio.Group defaultValue="directional">
                    <Radio value="directional"> 定向 </Radio>
                    <Radio value="notDirectional"> 非定向 </Radio>
                    <Radio value="consignTrain"> 委培 </Radio>
                    <Radio value="other"> 其他 </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="是否是全日制" name='ifFullTime'>
                    <Radio.Group defaultValue="yes">
                    <Radio value="yes"> 是 </Radio>
                    <Radio value="no"> 否 </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    label='学习形式'
                    name='studyMode'
                >
                    <Select placeholder='请选择'>
                        <Option value="fullTime">全日制</Option>
                        <Option value="notFullTime">非全日制</Option>
                        <Option value="selfStudy">自考</Option>
                        <Option value="abroad">留学</Option>
                        <Option value="other">其他</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="证明人姓名" name='certifierName'>
                    <Input />
                </Form.Item>
        </>
      )
  };

  export default EducationForm;