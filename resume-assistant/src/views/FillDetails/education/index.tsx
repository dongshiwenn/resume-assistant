import {
    Form,
    Input,
    Radio,
    Select,
    DatePicker,
    Button,
    Space,
    Divider,
  } from 'antd';
  
  import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
  const { Option } = Select;
  const { RangePicker } = DatePicker;
  
  import Footer from '../footer';
  import EducationForm from './educationForm';
  import addModule from '../addModule';
  import styles from './index.module.scss';
  
  const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
  };
  
  const Education = () => {

      return(
          <>
          <Form
            name='education'
            labelCol={{ span: 16 }}
            wrapperCol={{ span: 16 }}
            layout="horizontal"
            // style={{ display:'flex' }}
          >
                <Form.Item>
                    <EducationForm />
                </Form.Item>

                {addModule('添加教育经历', <EducationForm />, 'addEducation')}

                <Form.Item {...tailLayout}>
                    <Footer />
                </Form.Item>
          </Form>
        </>
      )
  }
  export default Education;