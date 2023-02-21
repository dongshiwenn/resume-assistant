import axios from 'axios';

interface getResumeProps {
    uuid: string;
    token: string;
}
// 获取简历信息
const getResume = (props: getResumeProps) => { return axios.get('./resume/get',{
    params: {...props}
})}

