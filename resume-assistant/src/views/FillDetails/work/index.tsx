import {
    Form,
    Input,
    Radio,
    Select,
    DatePicker,
  } from 'antd';
  
  const { Option } = Select;
  const { RangePicker } = DatePicker;
  
  import addModule from '../addModule';
  import WorkForm from './workForm';
  import Footer from '../footer';

  import styles from '../index.module.scss';


  const Work = (props: any) => {
    const {initialValues} = props;

      return(
          <>
          <Form
            name='work'
            layout="horizontal"
            className={styles.form}
            initialValues={initialValues}
          >
            <Form.Item>
                <WorkForm />
            </Form.Item>

            {addModule('添加工作（实习）经历', <WorkForm />, 'addWork')}

            <Form.Item className={styles.formFooter}>
                <Footer />
            </Form.Item>
          </Form>
        </>
      )
  }
  export default Work;