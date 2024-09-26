import axios from 'axios';

// .env 파일에서 API URL을 가져옴
const API_URL = process.env.REACT_APP_API_URL;

export const fetchFirefighters = async () => {
    const response = await axios.get(`${API_URL}/api/ranks`);
    return response.data; // 소방관 데이터 반환
};

export const fetchDrones = async () => {
    const response = await axios.get(`${API_URL}/api/dranks`);
    return response.data; // 드론 데이터 반환
};
//