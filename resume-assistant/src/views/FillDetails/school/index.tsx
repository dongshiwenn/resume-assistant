    import {
        Form,
        Input,
        Radio,
        Select,
        DatePicker,
    } from 'antd';
    
    import SchoolForm from './schoolForm';
    import addModule from '../addModule';
    import Footer from '../footer';

    import styles from '../index.module.scss';
    
    const School = (props: any) => {
        const {initialValues} = props;
      return(
          <>
          <Form
            name='school'
            layout="horizontal"
            initialValues={initialValues}
            className={styles.form}
          >
            <Form.Item>
                <SchoolForm />
            </Form.Item>

            {addModule('添加校园经历', <SchoolForm />, 'addSchool')}

                <Form.Item className={styles.formFooter}>
                    <Footer />
                </Form.Item>

          </Form>
        </>
      )
  }
  export default School;