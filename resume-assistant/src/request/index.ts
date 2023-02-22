import axios from 'axios';

interface GetResumeProps {
    uuid: string;
    token: string;
}

interface UpdateResumeProps {
    uuid: string;
    token: string;
    resumeInfo: string;
}

// 获取简历信息
export async function getResume(props: GetResumeProps) {
    return axios.get('./resume/get', {
        params: {...props}
    })   
};

// 提交简历信息
export async function updateResume(props: UpdateResumeProps) {
    return axios.post('./resume/update', props)
}