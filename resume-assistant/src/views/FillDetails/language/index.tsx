import {
    Form,
    Input,
    Radio,
    Select,
    DatePicker,
  } from 'antd';
  
  const { Option } = Select;
  const { RangePicker } = DatePicker;
  
  import Footer from '../footer';
  import LanguageForm from './languageForm';
  import addModule from '../addModule';

  import styles from '../index.module.scss';

  const Language = (props: any) => {

    const {initialValues} = props;

    
      return(
          <>
          <Form
            name='language'
            layout="horizontal"
            className={styles.form}
            initialValues={initialValues}
          >
               <Form.Item>
                    <LanguageForm />
                </Form.Item>

                {addModule('添加教育经历', <LanguageForm />, 'addLanguage')}

                <Form.Item className={styles.formFooter}>
                    <Footer />
                </Form.Item>
          </Form>
        </>
      )
  }
  export default Language;