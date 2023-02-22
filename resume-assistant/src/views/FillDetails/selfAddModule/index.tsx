import {
    Form,
    Input,
    Select,
    DatePicker,
  } from 'antd';
  
  
  import Footer from '../footer';

  import styles from '../index.module.scss';

  const SelfAddModule = (props: any) => {

    const { label, name, initialValues } = props;

      return(
          <>
          <Form
            name={name}
            layout="horizontal"
            className={styles.form}
            initialValues={initialValues}
          >
              <Form.Item label={label} name={name}>
                  <Input />
              </Form.Item>
              <Form.Item className={styles.formFooter}>
                    <Footer />
                </Form.Item>
          </Form>
        </>
      )
  }
  export default SelfAddModule;