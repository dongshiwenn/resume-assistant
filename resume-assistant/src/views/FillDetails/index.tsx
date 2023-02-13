import React from "react";
import TextProgress from "@/components/textProgress";
import { Collapse, theme } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

import styles from './index.module.scss';

import BasicInfo from './basicInfo';
import Education from "./education";
import School from "./school";

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
        {name: '基本资料', element: <BasicInfo/>},
        {name: '教育经历', element: <Education/>},
        {name: '校内经历', element: <School/>}
    ];
    return (
        <div className={styles.detailBox}>
            <TextProgress  percent={30} text='完整度' strokeColor="#FF8000"/>
            <Collapse
                bordered={false}
                defaultActiveKey={['0']}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                className={styles.collapseBox}
            >
                {panelArray.map((item, index) => {return (
                    <Panel
                        header={item.name}
                        key={index}
                        style={panelStyle}
                    >
                        {React.cloneElement(item.element)}
                    </Panel>
                )})}

            </Collapse>
        </div>
    )
}

export default FillDetails;