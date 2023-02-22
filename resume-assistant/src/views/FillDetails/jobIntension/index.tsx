import {
    Form,
    Input,
    Radio,
    Select,
    DatePicker,
  } from 'antd';
  
  const { Option } = Select;
  
  import Footer from '../footer';

  import styles from '../index.module.scss';

  const JobIntension = (props: any) => {

    const { initialValues } = props;
  
      return(
          <>
          <Form
            name='jobIntension'
            layout="horizontal"
            className={styles.form}
            initialValues={initialValues}
          >
              <Form.Item label="期望职位" name='expectedPosition'>
                  <Input />
              </Form.Item>
              <Form.Item label="期望城市" name='expectedCity'>
                  <Input />
              </Form.Item>
              <Form.Item label="是否接受调剂" name='ifAcceptAdjustment'>
                  <Radio.Group defaultValue="yes">
                  <Radio value="yes"> 是 </Radio>
                  <Radio value="no"> 否 </Radio>
                  </Radio.Group>
              </Form.Item>
              <Form.Item label="是否接受出差" name='ifAcceptBusinessTrip'>
                  <Radio.Group defaultValue="yes">
                  <Radio value="yes"> 是 </Radio>
                  <Radio value="no"> 否 </Radio>
                  </Radio.Group>
              </Form.Item>
              <Form.Item label="面试期望城市" name='expectedCityForInterview'>
                  <Input />
              </Form.Item>
              <Form.Item label="笔试期望城市" name='expectedCityForWrittenExam'>
                  <Input />
              </Form.Item>
              <Form.Item label="期望薪酬" name='expectedSalary'>
                  <Input />
              </Form.Item>
              <Form.Item className={styles.formFooter}>
                    <Footer />
                </Form.Item>
          </Form>
        </>
      )
  }
  export default JobIntension;