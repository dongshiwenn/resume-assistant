import {
    Form,
    Input,
    Radio,
    Select,
    DatePicker,
  } from 'antd';
  
  const { Option } = Select;
  const { RangePicker } = DatePicker;

  import PaperForm from './paperForm';
  import addModule from '../addModule';
  import Footer from '../footer';

  import styles from '../index.module.scss';

  const Paper = (props: any) => {

    const {initialValues} = props;

      return(
          <>
          <Form
            name='paper'
            layout="horizontal"
            className={styles.form}
            initialValues={initialValues}
          >
            <Form.Item>
                <PaperForm />
            </Form.Item>

            {addModule('添加论文', <PaperForm />, 'addPaper')}

            <Form.Item className={styles.formFooter}>
                <Footer />
            </Form.Item>
          </Form>
        </>
      )
  }
  export default Paper;