import React from 'react';
import api from './utils/axios';
import { useRouter } from 'next/navigation';

const Button = ({ onChangePage }) => {
    const router = useRouter();

    const dataStringConcat = (data) => {
        return data + "_Concat String";
    };

    const handleClick = () => {
        api.get('/user/info')
            .then(response => {
                onChangePage(dataStringConcat(response.data));
            })
            .catch(error => {
                // 오류 발생 시 실행할 내용
            });
    };

    const moveToLogin = () => {
        router.push('/login')
    }

    return (
        <div>
            <input type="button" value="API Test" onClick={handleClick}/>
            <div>
                <input type="button" value="로그인 이동" onClick={moveToLogin}/>
            </div>
        </div>
    )
        ;
};

export default Button;