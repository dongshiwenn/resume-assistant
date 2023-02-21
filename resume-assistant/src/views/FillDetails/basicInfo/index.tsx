import {
  Form,
  Input,
  Radio,
  Select,
  DatePicker,
} from 'antd';

const { Option } = Select;

import Footer from '../footer';
import styles from './index.module.scss';

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const BasicInfo = (props: any) => {

    const {data: initialValues} = props;
    return(
        <>
        <Form
          name='basicInfoForm'
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          initialValues={initialValues}
        //   style={{ maxWidth: 1050 }}
        >
            <Form.Item label="姓名" name='name'>
                <Input />
            </Form.Item>
            <Form.Item label="姓" name='familyName'>
                <Input />
            </Form.Item>
            <Form.Item label="名" name='lastName'>
                <Input />
            </Form.Item>
            <Form.Item label="英文名" name='englishName'>
                <Input />
            </Form.Item>
            <Form.Item label="性别" name='gender'>
                <Radio.Group defaultValue="male">
                <Radio value="male"> 男 </Radio>
                <Radio value="female"> 女 </Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item label="证件" name='certification'>
                <Input.Group compact>
                    <Form.Item
                    name={['certification', 'certifyWays']}
                    noStyle
                    >
                    <Select defaultValue='idCard'>
                        <Option value="idCard">身份证</Option>
                        <Option value="passport">护照</Option>
                        <Option value="permentPermissionHAM">港澳永久通行证</Option>
                        <Option value="permissionTai">台胞证</Option>
                        <Option value="notPermentPermissionHAM">港澳非永久通行证</Option>
                        <Option value="officers">军官证</Option>
                        <Option value="else">其他</Option>
                    </Select>
                    </Form.Item>
                    <Form.Item
                    name={['certification', 'certifyNumber']}
                    noStyle
                    >
                    <Input style={{ width: '50%' }} placeholder="请输入证件号码" />
                    </Form.Item>
                </Input.Group>
            </Form.Item>
            <Form.Item label="出生日期" name='birthDate'>
                <DatePicker placeholder='请选择出生日期'/>
            </Form.Item>
            <Form.Item label="民族" name='people'>
                <Input />
            </Form.Item>
            <Form.Item label="国籍" name='nationality'>
                <Input />
            </Form.Item>
            <Form.Item label="移民情况" name='immigration'>
                <Input />
            </Form.Item>
            <Form.Item label="政治面貌" name='politicsStatus'>
                <Input />
            </Form.Item>
            <Form.Item label="入团时间" name='joinCommunistTime'>
                <DatePicker placeholder='请选择入团时间'/>
            </Form.Item>
            <Form.Item label="入党时间" name='joinPartyTime'>
                <DatePicker placeholder='请选择入党时间'/>
            </Form.Item>
            <Form.Item
                    label='婚姻状况'
                    name='marriage'
                    >
                    <Select placeholder='请选择'>
                        <Option value="married">已婚</Option>
                        <Option value="notMarried">未婚</Option>
                    </Select>
            </Form.Item>
            <Form.Item label="联系电话" name='phone'>
                <Input />
            </Form.Item>
            <Form.Item label="邮箱" name='email'>
                <Input />
            </Form.Item>
            <Form.Item label="联系地址" name='address'>
                <Input />
            </Form.Item>
            <Form.Item label="微信" name='wechat'>
                <Input />
            </Form.Item>
            <Form.Item label="qq" name='qq'>
                <Input />
            </Form.Item>
            <Form.Item label="紧急联系人姓名" name='emergencyContactName'>
                <Input />
            </Form.Item>
            <Form.Item label="紧急联系人电话" name='emergencyContactPhone'>
                <Input />
            </Form.Item>
            <Form.Item label="院系联系人姓名" name='facultiesContactName'>
                <Input />
            </Form.Item>
            <Form.Item label="院系联系人电话" name='facultiesContactPhone'>
                <Input />
            </Form.Item>
            <Form.Item label="联系地址" name='address'>
                <Input />
            </Form.Item>
            <Form.Item label="是否是学生干部" name='ifStudentCadre'>
                <Radio.Group defaultValue="no">
                <Radio value="yes"> 是 </Radio>
                <Radio value="no"> 否 </Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.ifStudentCadre !== currentValues.ifStudentCadre}
            >
                {({ getFieldValue }) =>
                getFieldValue('ifStudentCadre') === 'yes' ? (
                    <Form.Item name="studentCadreTitle" label="学生干部职务">
                        <Input />
                    </Form.Item>
                ) : null
                }
            </Form.Item>
            <Form.Item label="是否是贫困生" name='ifPovertyStudent'>
                <Radio.Group defaultValue="no">
                <Radio value="yes"> 是 </Radio>
                <Radio value="no"> 否 </Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.ifPovertyStudent !== currentValues.ifPovertyStudent}
            >
                {({ getFieldValue }) =>
                getFieldValue('ifPovertyStudent') === 'yes' ? (
                    <Form.Item name="standardOfPoverty" label="贫困生认定标准">
                        <Input />
                    </Form.Item>
                ) : null
                }
            </Form.Item>
            <Form.Item label="是否有海外教育" name='ifOverseasEducation'>
                <Radio.Group defaultValue="no">
                <Radio value="yes"> 是 </Radio>
                <Radio value="no"> 否 </Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item label="最高学历" name='highestEducation'>
                <Input />
            </Form.Item>
            <Form.Item label="最高学位" name='highestDegree'>
                <Input />
            </Form.Item>
            <Form.Item label="毕业院校" name='school'>
                <Input />
            </Form.Item>
            <Form.Item label="专业" name='major'>
                <Input />
            </Form.Item>
            <Form.Item label="毕业时间" name='graduationDate'>
                <DatePicker placeholder='请选择毕业时间'/>
            </Form.Item>
            <Form.Item label="是否应届" name='freshOrFormerStudents'>
                <Radio.Group defaultValue="no">
                <Radio value="yes"> 应届生 </Radio>
                <Radio value="no"> 往届生 </Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item label="是否获得过奖学金" name='scholarship'>
                <Radio.Group defaultValue="no">
                <Radio value="yes"> 获得过 </Radio>
                <Radio value="no"> 未获得 </Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item label="是否获得专业比赛奖励" name='competitionRewards'>
                <Radio.Group defaultValue="no">
                <Radio value="yes"> 获得过 </Radio>
                <Radio value="no"> 未获得 </Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item label="所在城市" name='city'>
                <Input />
            </Form.Item>
            <Form.Item label="户口所在地" name='majregisteredCityor'>
                <Input />
            </Form.Item>
            <Form.Item label="籍贯" name='province'>
                <Input />
            </Form.Item>
            <Form.Item label="户籍地址" name='householdAddress'>
                <Input />
            </Form.Item>
            <Form.Item label="出生地" name='birthAdress'>
                <Input />
            </Form.Item>
            <Form.Item label="家庭住址" name='familyAddress'>
                <Input />
            </Form.Item>
            <Form.Item label="现居住地址" name='address'>
                <Input />
            </Form.Item>
            <Form.Item label="邮编" name='postalCode'>
                <Input />
            </Form.Item>
            <Form.Item label="健康状况" name='healthy'>
                <Input />
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
            <Form.Item label="生源地" name='placeOfStudentSource'>
                <Input />
            </Form.Item>
            <Form.Item label="特长" name='specialty'>
                <Input />
            </Form.Item>
            <Form.Item label="自我评价" name='selfAssessment'>
                <Input />
            </Form.Item>
            <Form.Item label="高考录取情况" name='heacollegeEntranceExaminationAdmissionlthy'>
                <Input />
            </Form.Item>
            <Form.Item label="人事档案地址" name='archivesAdress'>
                <Input />
            </Form.Item>
            <Form.Item label="参加工作时间" name='participateInWork'>
                <DatePicker placeholder='请选择参加工作时间'/>
            </Form.Item>
            <Form.Item label="预计入职时间" name='expectedToJoin'>
                <DatePicker placeholder='请选择预计入职时间'/>
            </Form.Item>
            <Form.Item label="健康状况" name='healthy'>
                <Input />
            </Form.Item>
            <Form.Item
                    label='工作年限'
                    name='studyMyearsOfServiceode'
                    >
                    <Select placeholder='请选择工作年限'>
                        <Option value="oneYear">一年一下</Option>
                        <Option value="oneTillThree">一至三年</Option>
                        <Option value="ThreeTillFive">三至五年</Option>
                        <Option value="FiveAbove">五年以上</Option>
                    </Select>
            </Form.Item>
            <Form.Item label="专业技术职称" name='positionalTitles'>
                <Input />
            </Form.Item>
            <Form.Item label="身高" name='height'>
                <Input />
            </Form.Item>
            <Form.Item label="体重" name='weight'>
                <Input />
            </Form.Item>
            <Form.Item label="血型" name='bloodType'>
                <Input />
            </Form.Item>
            <Form.Item label="GitHub链接" name='githubLink'>
                <Input />
            </Form.Item>
            <Form.Item label="公司内是否有近亲亲属" name='ifAnyRelatives'>
                <Radio.Group defaultValue="no">
                <Radio value="yes"> 是 </Radio>
                <Radio value="no"> 否 </Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item label="如何了解到本公司招聘信息" name='channelOfInfo'>
                <Input />
            </Form.Item>
            <Form.Item label="期望工作地点" name='expectedCityForWork'>
                <Input />
            </Form.Item>
            <Form.Item label="面积期望城市" name='expectedCityForInterview'>
                <Input />
            </Form.Item>
            <Form.Item label="笔试期望城市" name='expectedCityForWrittenExam'>
                <Input />
            </Form.Item>
            <Form.Item label="期望薪酬" name='expectedSalary'>
                <Input />
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Footer />
            </Form.Item>
            
        </Form>
      </>
    )
}
export default BasicInfo;