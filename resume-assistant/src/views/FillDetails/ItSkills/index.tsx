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
  import ItSkillsForm from './itSkillsForm';
  import addModule from '../addModule';

  import styles from '../index.module.scss';

  const ItSkills = (props: any) => {
    const {initialValues} = props;

      return(
          <>
          <Form
            name='itSkills'
            layout="horizontal"
            className={styles.form}
            initialValues={initialValues}
          >
               <Form.Item>
                    <ItSkillsForm />
                </Form.Item>

                {addModule('添加IT技能', <ItSkillsForm />, 'addItSkills')}

                <Form.Item className={styles.formFooter}>
                    <Footer />
                </Form.Item>
          </Form>
        </>
      )
  }
  export default ItSkills;