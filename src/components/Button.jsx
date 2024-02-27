import React from 'react';
import api from './utils/axios';

const Button = ({ onChangePage }) => {

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

    return (
        <div>
            <input type="button" value="API" onClick={handleClick} />
        </div>
    );
};

export default Button;