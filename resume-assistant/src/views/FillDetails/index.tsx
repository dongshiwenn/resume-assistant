import React from "react";
import TextProgress from "@/components/textProgress";
import { Collapse, theme, Form, Button } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

import styles from './index.module.scss';

import BasicInfo from './basicInfo';
import Education from "./education";
import School from "./school";
import Work from "./work";
import Prize from "./Prize";
import Paper from "./paper";
import Language from "./language";
import ItSkills from "./ItSkills";
import SelfAssessment from "./selfAssessment";
import JobIntension from "./jobIntension";

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
        {name: '基本资料', element: <BasicInfo />},
        {name: '教育经历', element: <Education />},
        {name: '校内经历', element: <School />},
        {name: '工作（实习）经历', element: <Work />},
        {name: '获奖情况', element: <Prize />},
        {name: '论文发表', element: <Paper />},
        {name: '语言能力', element: <Language />},
        {name: 'IT技能', element: <ItSkills />},
        {name: '自我评价', element: <SelfAssessment />},
        {name: '求职意向', element: <JobIntension />},
    ];

    return (
        <div className={styles.detailBox}>
            <TextProgress  percent={30} text='完整度' strokeColor="#FF8000"/>
            <Form.Provider 
                     onFormFinish={(name, info: { values: any, forms: any }) => {
                        console.log('name', name);
                        console.log('value', info);
                      }}>
                <Collapse
                    bordered={false}
                    // defaultActiveKey={['0']}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                    className={styles.collapseBox}
                >
                    {panelArray.map((item, index) => {return (
                        <Panel
                            header={item.name}
                            key={index}
                            style={panelStyle}
                        >
                            {item.element}
                        </Panel>
                    )})}
                </Collapse>
                {/* <div className={styles.addButtonDiv}>
                    <Button htmlType="button" className={styles.addButton}>添加自定义模块</Button>
                </div> */}
            </Form.Provider>
        </div>
    )
}

export default FillDetails;