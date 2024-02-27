"use client";

import React, {useEffect, useState} from 'react';
import {useCookies} from "react-cookie";
import Subject from "./Subject";
import Toc from "./Toc";
import ReadContent from "./ReadContent";
import CreateContent from "./CreateContent";
import UpdateContent from "./UpdateContent";
import Control from "./Control";
import Button from "./Button";
import {useSearchParams} from "next/navigation";

const SampleComponent = () => {
    const params = useSearchParams();
    // 상태를 useState 훅을 사용하여 정의합니다.
    const token = params.get('token');
    localStorage.setItem('access_token', token);

    const [cookies] = useCookies(['refresh_token']);
    const refreshToken = cookies['refresh_token'];

    const [mode, setMode] = useState('welcome');
    const [selectedContentId, setSelectedContentId] = useState(2);
    const [maxContentId, setMaxContentId] = useState(3);
    const [content, setContent] = useState([
        { id: 1, title: 'HTML', desc: 'HTML is HyperText ...' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive' }
    ]);

    // 선택된 컨텐츠를 가져오는 함수
    const getReadContent = () => {
        return content.find(item => item.id === selectedContentId);
    }

    // 컨텐츠를 반환하는 함수
    const getContent = () => {
        let _article = null;
        if (mode === 'welcome') {
            _article = <ReadContent title="Welcome" desc="Hello, React !!"></ReadContent>
        } else if (mode === 'read') {
            const _content = getReadContent();
            _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
        } else if (mode === 'create') {
            _article = <CreateContent onSubmit={(title, desc) => {
                setMaxContentId(prevId => prevId + 1);
                const newContent = [...content, {
                    id: maxContentId + 1,
                    title: title,
                    desc: desc
                }];
                setContent(newContent);
                setMode('read');
                setSelectedContentId(maxContentId + 1);
            }}></CreateContent>
        } else if (mode === 'update') {
            const _content = getReadContent();
            _article = <UpdateContent data={_content}
                                      onSubmit={(id, title, desc) => {
                                          const updatedContent = content.map(item => {
                                              if (item.id === id) {
                                                  return {
                                                      id: id,
                                                      title: title,
                                                      desc: desc
                                                  };
                                              }
                                              return item;
                                          });
                                          setContent(updatedContent);
                                          setMode('read');
                                      }}></UpdateContent>
        } else if (mode === 'delete') {
            // 삭제 기능 구현
        }
        return _article;
    }

    useEffect(() => {
        // selectedContentId가 변경될 때마다 실행될 부분
        const selectedContent = getReadContent();
    }, [selectedContentId]); // selectedContentId가 변경될 때마다 실행

    return (
        <div className="SampleComponent">
            <Subject title="WEB" sub="World Wide Web!!" onChangePage={() => setMode('welcome')}></Subject>
            <Toc data={content} onChangePage={(id) => {
                setMode('read');
                setSelectedContentId(Number(id));
            }}></Toc>
            <Control onChangeMode={(mode) => {
                if (mode === 'delete') {
                    if (window.confirm('really?')) {
                        const updatedContent = content.filter(item => item.id !== selectedContentId);
                        setContent(updatedContent);
                        setMode('welcome');
                        alert('deleted !!')
                    }
                } else {
                    setMode(mode);
                }
            }}></Control>
            {getContent()}
            <Button onChangePage={(data) => {
                alert(data)
            }}></Button>

            <br/>
            <br/>
            <div>
                Token : {token}
            </div>
            <br/>
            <br/>
            <br/>
            <div>
                Refresh Token : {refreshToken}
            </div>
        </div>
    );
}

export default SampleComponent;
