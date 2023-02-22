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
  import Footer from '../footer';
  import PrizeForm from './prizeForm';

  import styles from '../index.module.scss';

  const Prize = (props: any) => {
    const {initialValues} = props;

      return(
          <>
          <Form
            name='prize'
            layout="horizontal"
            className={styles.form}
            initialValues={initialValues}
          >
            <Form.Item>
                <PrizeForm />
            </Form.Item>

            {addModule('添加获奖情况', <PrizeForm />, 'addPrize')}

            <Form.Item className={styles.formFooter}>
                <Footer />
            </Form.Item>
          </Form>
        </>
      )
  }
  export default Prize;