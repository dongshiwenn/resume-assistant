import React, { useEffect, useState } from "react";
import TextProgress from "@/components/textProgress";
import { Collapse, theme, Form, Button, Modal, Input } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

import styles from './index.module.scss';
import axios from 'axios';
import BasicInfo from './basicInfo';
import Education from "./education";
import School from "./school";
import Work from "./work";
import Prize from "./prize";
import Paper from "./paper";
import Language from "./language";
import ItSkills from "./ItSkills";
import SelfAssessment from "./selfAssessment";
import JobIntension from "./jobIntension";
import SelfAddModule from "./selfAddModule";

import {getResume, updateResume} from '@/request';


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

    // let panelArray: any = [];

    const [resumeInfo, setResumeInfo] = useState<any>(); // 简历信息
    const [isAddModal, setIsAddModal] = useState<boolean>(false); // 自定义模块
    const [addModuleText, setAddModuleText] = useState<string>(''); // 自定义模块名称
    const [resumePanel, setResumePanel] = useState<any[]>([]); // 简历模块

    // 获取简历信息
    useEffect(() => {
        // getResume({uuid: '', token: ''}).then(res => {
        //     setResumeInfo(res);
        // })
        const panelArray = [
            {name: '基本资料', element: <BasicInfo initialValues={resumeInfo}/>},
            {name: '教育经历', element: <Education initialValues={resumeInfo}/>},
            {name: '校内经历', element: <School initialValues={resumeInfo}/>},
            {name: '工作（实习）经历', element: <Work initialValues={resumeInfo}/>},
            {name: '获奖情况', element: <Prize initialValues={resumeInfo}/>},
            {name: '论文发表', element: <Paper initialValues={resumeInfo}/>},
            {name: '语言能力', element: <Language initialValues={resumeInfo}/>},
            {name: 'IT技能', element: <ItSkills initialValues={resumeInfo}/>},
            {name: '自我评价', element: <SelfAssessment initialValues={resumeInfo}/>},
            {name: '求职意向', element: <JobIntension initialValues={resumeInfo}/>},
        ];
        setResumePanel(panelArray);
    }, []);


    const showModal = () => {
        setIsAddModal(true);
      };
    
      const handleOk = (e: any) => {
        resumePanel?.push({name: addModuleText, element: <SelfAssessment name={addModuleText} label={addModuleText} initialValues={resumeInfo} />})
        setResumePanel(resumePanel);
        setIsAddModal(false);
      };
      
      const handleCancel = () => {
        setIsAddModal(false);
      };

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
                    {resumePanel?.map((item: any, index: any) => {return (
                        <Panel
                            header={item.name}
                            key={index}
                            style={panelStyle}
                        >
                            {item.element}
                        </Panel>
                    )})}
                </Collapse>
            </Form.Provider>
            <div className={styles.addButtonDiv}>
                <Button htmlType="button" className={styles.addButton} onClick={() => setIsAddModal(true)}>增加自定义模块</Button>
            </div>
            <Modal title="增加自定义模块" open={isAddModal} onOk={handleOk} onCancel={handleCancel}>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <p style={{width: 90}}>模块名称</p>
                    <Input placeholder="请输入模块名称" onChange={(e) => setAddModuleText(e.target.value)}/>
                </div>
            </Modal>
        </div>
    )
}

export default FillDetails;