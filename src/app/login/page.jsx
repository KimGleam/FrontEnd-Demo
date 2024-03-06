import React from 'react';

const Page = () => {
    return (
        <div className="Login">
            <div>
                <a href="http://localhost:8080/oauth2/authorization/google">구글 로그인</a>
            </div>
            <div>
                <a href="http://localhost:8080/oauth2/authorization/kakao">카카오 로그인</a>
            </div>
        </div>
    );
};

export default Page;
