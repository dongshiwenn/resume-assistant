    import {
        Form,
        Input,
        Radio,
        Select,
        DatePicker,
        Button,
        Space,
        Divider,
    } from 'antd';
    
    import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
    import styles from '../index.module.scss';

    const addModule =(text: string, element: any, name: string) => {
    return (
        <Form.List name={name}>
        {(fields, { add, remove }) => (
        <>
            {fields.map((field) => (
                <>
                <Divider dashed />
                    <div key={field.key} className={styles.addModuleForm}>
                        {/* <Space  align="baseline"> */}
                            <Form.Item>
                                {element}
                            </Form.Item>
                            <MinusCircleOutlined onClick={() => remove(field.name)} className={styles.addFormRemove}/>
                        {/* </Space> */}
                    </div>
                    </>
            ))}

            <Form.Item className={styles.addModule}>
                <Button type="dashed" onClick={add} block icon={<PlusOutlined />}>
                    {text}
                </Button>
            </Form.Item>
        </>
        )}
    </Form.List>
    )
}

export default addModule;