import axios from 'axios';
import { useCookies } from "react-cookie";

const api = axios.create({
    baseURL: 'http://localhost:8080'
})

/**
 1. 요청 인터셉터
 2개의 콜백 함수를 받습니다.
 */
api.interceptors.request.use(
    (config) => {
        // HTTP Authorization 요청 헤더에 jwt-token을 넣음
        // 서버측 미들웨어에서 이를 확인하고 검증한 후 해당 API에 요청함.
        const token = localStorage.getItem('access_token');
        try {
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }

            return config;
        } catch (err) {
            console.error('[_axios.interceptors.request] config : ' + err);
        }
        return config;
    },
    (error) => {
        // 요청 에러 직전 호출됩니다.
        return Promise.reject(error);
    }
);

/**
 2. 응답 인터셉터
 2개의 콜백 함수를 받습니다.
 */
api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const { response, config } = error;

        // 응답 받은 상태 코드가 401이라면
        if (response.status === 401) {
            const refreshToken = document.cookie
                .split('; ')
                .find(row => row.startsWith('refresh_token='))
                ?.split('=')[1];

            const { data } = await axios.post('http://localhost:8080/api/token', {
                refreshToken,
            });

            const { accessToken } = data;
            //새 액세스 토큰을 로컬스토리지에 저장
            localStorage.setItem('access_token', accessToken);
            //새 액세스 토큰을 헤더에 설정
            config.headers['Authorization'] = 'Bearer ' + accessToken;
            //재요청
            return axios(config);
        }
        return Promise.reject(error);
    }
);

export default api;