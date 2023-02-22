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
  import styles from '../index.module.scss';
  
  
  const Education = (props: any) => {

    const {initialValues} = props;

      return(
          <>
          <Form
            name='education'
            layout="horizontal"
            initialValues={initialValues}
            className={styles.form}
          >
                <Form.Item>
                    <EducationForm />
                </Form.Item>

                {addModule('添加教育经历', <EducationForm />, 'addEducation')}

                <Form.Item className={styles.formFooter}>
                    <Footer />
                </Form.Item>
          </Form>
        </>
      )
  }
  export default Education;