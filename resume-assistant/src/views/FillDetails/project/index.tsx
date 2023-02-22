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
  import ProjectForm from './projectForm';
  import addModule from '../addModule';
  import Footer from '../footer';

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const Project = (props: any) => {
    const {initialValues} = props;

      return(
          <>
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            style={{ maxWidth: 600 }}
            initialValues={initialValues}
          >
            <Form.Item>
                <ProjectForm />
            </Form.Item>

            {addModule('添加项目经历', <ProjectForm />, 'addProject')}

            <Form.Item {stylesclassName={styles.formFooterLayout}}>
                <Footer />
            </Form.Item>
          </Form>
        </>
      )
  }
  export default Project;