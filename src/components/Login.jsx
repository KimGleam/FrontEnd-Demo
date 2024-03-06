import React, { useEffect } from 'react';

const REST_API_KEY = "12d515725a034187cd8451b7f3f521b4";
const REDIRECT_URI = "http://localhost:8080/login/kakao";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const Page = () => {
    useEffect(() => {
        const getCodeFromUrl = () => {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get('code');
        }

        // Retrieve the code parameter from the URL
        const code = getCodeFromUrl();

        if (code) {
            console.log("Authorization Code:", code);
        }
    }, []);

    return (
        <div className="Login">
            <div>
                <a href="http://localhost:8080/oauth2/authorization/google">구글 로그인</a>
            </div>
            <button onClick={() => {
                window.location.href = KAKAO_AUTH_URL
            }}>카카오 로그인</button>
        </div>
    );
};

export default Page;