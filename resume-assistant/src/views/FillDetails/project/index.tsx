import {
    Form,
    Input,
    Radio,
    Select,
    DatePicker,
  } from 'antd';
  
  const { Option } = Select;
  const { RangePicker } = DatePicker;
  
  import ProjectForm from './projectForm';
  import addModule from '../addModule';
  import Footer from '../footer';

  import styles from '../index.module.scss';

  const Project = (props: any) => {
    const {initialValues} = props;

      return(
          <>
          <Form
            name='project'
            layout="horizontal"
            className={styles.form}
            initialValues={initialValues}
          >
            <Form.Item>
                <ProjectForm />
            </Form.Item>

            {addModule('添加项目经历', <ProjectForm />, 'addProject')}

            <Form.Item className={styles.formFooter}>
                <Footer />
            </Form.Item>
          </Form>
        </>
      )
  }
  export default Project;