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

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };
    
    const School = () => {
      return(
          <>
          <Form
            name='school'
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            // style={{ maxWidth: 600 }}
          >
            <Form.Item>
                <SchoolForm />
            </Form.Item>

            {addModule('添加校园经历', <SchoolForm />, 'addSchool')}

                <Form.Item {...tailLayout}>
                    <Footer />
                </Form.Item>

          </Form>
        </>
      )
  }
  export default School;