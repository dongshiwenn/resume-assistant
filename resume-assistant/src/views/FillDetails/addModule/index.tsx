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

const addModule =(text: string, element: any, name: string) => {
    return (
        <Form.List name={name}>
        {(fields, { add, remove }) => (
        <>
            {fields.map((field) => (
                    <div key={field.key}>
                        <Divider dashed />
                        <Space  align="baseline">
                            <Form.Item>
                                {element}
                            </Form.Item>
                            <MinusCircleOutlined onClick={() => remove(field.name)} />
                        </Space>
                    </div>
            ))}

            <Form.Item>
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