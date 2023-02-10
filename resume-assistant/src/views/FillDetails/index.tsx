import React from "react";
import TextProgress from "@/components/textProgress";
import { Collapse, theme } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

import styles from './index.module.scss';


const FillDetails = () => {

    const { Panel } = Collapse;

    const { token } = theme.useToken();

    const panelColor = '#FFFFFF';
    const panelWidth = '100%';

    const panelStyle = {
        marginBottom: 24,
        background: panelColor,
        borderRadius: token.borderRadiusLG,
        border: 'none',
        width: panelWidth
    };

    const panelArray = [
        '基本资料',
        '教育情况'
    ];
    return (
        <div className={styles.detailBox}>
            <TextProgress  percent={30} text='完整度' strokeColor="#FF8000"/>
            <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                className={styles.collapseBox}
            >
                {panelArray.map((item, index) => {return (
                    <Panel
                        header={item}
                        key={index}
                        style={panelStyle}
                    >
                        {React.cloneElement(<p>分别的子表单组件</p>)}
                    </Panel>
                )})}

            </Collapse>
        </div>
    )
}

export default FillDetails;