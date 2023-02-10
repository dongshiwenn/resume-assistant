import React from 'react';
import { Progress } from 'antd';
import styles from './index.module.scss';

interface progressProps  {
    percent: number; // 进度条百分比
    text?: string; // 进度条说明文案
    strokeColor?: string; // 进度条色彩
};

const TextProgress = (props: progressProps) => {

    const { percent, text, strokeColor } = props;
    return (
        <div className={styles.progressBox}>
            <div className={styles.progressText}>{text}</div>
            <Progress
                percent={percent}
                strokeColor={strokeColor}
                className={styles.progress}
            />
        </div>
    )
}

export default TextProgress;