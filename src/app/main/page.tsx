'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuJoy from '@mui/joy/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Input from '@mui/joy/Input';
import Search from '@mui/icons-material/Search';
import MenuButton from '@mui/joy/MenuButton';
import Apps from '@mui/icons-material/Apps';
import Dropdown from '@mui/joy/Dropdown';
import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import {useSearchParams} from "next/navigation";
import {useCookies} from "react-cookie";
import IntroDivider from '../../components/utils/IntroDivider';
import {Chat} from "@mui/icons-material";
import {auto} from "@popperjs/core";

export default function Grouped() {
    const params = useSearchParams();
    // 상태를 useState 훅을 사용하여 정의합니다.
    const token = params.get('token');
    localStorage.setItem('access_token', token);

    const [cookies] = useCookies(['refresh_token']);
    const refreshToken = cookies['refresh_token'];

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [selectedIndex, setSelectedIndex] = React.useState<number>(1);

    const createHandleClose = (index: number) => () => {
        if (typeof index === 'number') {
            setSelectedIndex(index);
        }
    };
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}> {/* 중앙 정렬을 위한 스타일 추가 */}
            <Box component="section" sx={{
                p: 3,
                backgroundColor: '#f0f0f0',
                display: 'flex',
                flexDirection: 'row',
                position: 'fixed',
                width: '1241px',
                zIndex: 1000,
                alignItems: 'center',
                justifyContent: 'space-between',
                borderRadius: '10px',
                marginX: '300px'
            }}>
                <Dropdown style={{ fontFamily: "Noto Sans" }} >
                    <div className="css-boc80u ekdqe1a1"><img
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODIiIGhlaWdodD0iNDIiIHZpZXdCb3g9IjAgMCA4MiA0MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0ibm9uZSI+CiAgICAgICAgPHBhdGggZD0iTTAgMGg4MnY0MkgweiIvPgogICAgICAgIDxwYXRoIGQ9Ik02Mi41Ljk2NWMxLjAyNi0uNTU3IDIuNDY2LS43MTggMy4zNTYuMTA3Ljg5LjgyNS42NzYgMi4wNDggMCAzLjk3MyAwIDAtMS41MDUgNC4wNjYtMy4wNTUgOC4yNjJsLS4zOTggMS4wOGMtMS40MTQgMy44My0yLjc2MiA3LjQ4Ny0yLjkyNyA3Ljk2My0xLjQ5OCA0LjI0NSAxLjk2NyA0LjEyMiA0LjAyNC0uMTUyIDEuMTU5LTIuMzk0IDIuNjQ0LTYuMzU3IDIuNjQ0LTYuMzU3LjUyNC0xLjU2My42ODItMi41MDQuMzU5LTIuODI4LS4xMDctLjExMy4wNDUtLjI1Mi4xOC0uMzIzIDIuMjY5LTEuMTQ5IDQuNjMtLjA3MiAzLjMzNiAzLjMxbC0uMDU0LjEzOGMtLjM4Ny45NzgtMi42OCA2LjczMy0yLjY4IDYuNzMzLS42NzYgMS42Ni0uNTk1IDMuMjM2LjQxOCAzLjIzNi42ODYtLjAwNCAxLjQ2LS4zODUgMi4zMDQtMS4wODggMS44MTgtMS41MDQgMy4yMjItNC4zMTIgMy43MjctNS40NTQuMjMtLjUwOCAxLjA4Ny0yLjQyIDEuNzY2LTQuMzYxLjIzNi0uNjY1LjM2OS0xLjM2LjM5NS0yLjA2NWEuNDQzLjQ0MyAwIDAgMSAuMTk0LS40NTkgMy41NzggMy41NzggMCAwIDEgMS42Ny0uNDIgMS44MDUgMS44MDUgMCAwIDEgMS40NjUuNzA1Yy40NDMuNTk4LjU2NiAxLjU3OS4xMDMgMi44MDgtLjEyLjMyLTMuNzc1IDkuOTU4LTMuNzc1IDkuOTU4di4wMjZjMi4wNDEtMS4yMjMgMy44Ny0xLjMxMyA0Ljk1My0uODU0bC0uMDAzLS4wMTNjMS40OTUuNjQ3IDEuOTkgMi40NC45MzggMy41NTktLjEwMy4xMS0uMzYyLjA4NC0uMzYyLS4wOS0uMDk0LTEuMjUzLTIuNTE3LTMuNDk1LTYuMTA5LTEuMDc1bC0uMTQ1LjM4NS0xLjA2OCAyLjgwOGMtMi42MiA3LjAxOC01LjQwMyAxMi4xMzYtOS40MTUgMTEtMi42ODgtLjc2LTIuMzc3LTQuNjA3LjUxNS03Ljc5YTU0LjkgNTQuOSAwIDAgMSA2LjQ5LTUuODk4Yy4wNjgtLjE4OC4xMy0uMzUuMTg4LS41MTEuMjc4LS43OC40OTEtMS40MzQuNzkyLTIuMjY1bC4xNTktLjUxOGMtLjE3OC4yLS40OTguNTczLS43MTIuODEyLS43MTIuOC0yLjQ5NCAyLjc1Ny01LjMyOSAyLjIwN2wtLjIzNC0uMDUyYy0yLjA1LS41MDgtMi42MDgtMS45ODYtMi42NTUtMy4yNzctMi4xNDIgMi42NTYtNC4zNTEgMy40MjYtNS44MDcgMy4zOS0xLjk0OC0uMDQ4LTMuMzc4LTEuNTE0LTIuNDI3LTQuMjkgMS4wNTgtMy4xMDYgNS41LTE1LjMzMiA2Ljc5NS0xOSAuNDg1LTEuNTguNjY2LTIuNTguMTg0LTIuOTc0LS4xMjMtLjEwMy4wNTItLjI2NS4yLS4zNDZ6bTguMzY0IDI4Ljc3OGMtMS4xMDMuODgtNS41MjYgNC41My02Ljc1MiA3LjQ0MS0uNTA1IDEuMTk3LS4zNzYgMi4xNDkuNDg4IDIuMjMzIDEuOTYuMTk0IDQuMDEyLTMuODE4IDYuMjI4LTkuNTEyek0xNi4wMjggNS4zNTJjLS4wODcuMzMyLTEuMzE5IDMuODYtMi43MDEgNy43NDlsLS4yMDkuNTg2LS4yMS41ODktLjIxNS42MDRjNC42OTEtMS4xMjMgMTMuMDY0LTYuNTcgMTQuMDM1LTEwLjA4NS4xMi0uMTYxLjI5LS4yMi41NjYtLjAzNS40OTUuMzMuNjg2IDEuMTU1LjQ5NSAxLjkxOC0uNzY0IDMuMDM4LTYuNDE2IDcuMzQxLTExLjM3OSA5LjU1NC42MTIgMS42MzcgMi42ODIgNi4yNjcgNC4yMDYgOS4xMTEgMS42NjMgMy4xMTkgMy40MiA0LjU3NSA2LjE0NyA0LjczNyAxLjQ2LjA4NSAzLjAxNC0uNDQ3IDMuODkzLTEuMjJsLjE0OC0uMTQtLjAxMy4wM2MuMTk0LS4yMDQuNTExLjA3Ny4zNjYuMzIzYTYuNSA2LjUgMCAwIDEtNC45OTIgMi44NjdjLTYuMzQ1LjQyNy04Ljc3NC0zLjg3LTEzLjMwNC0xNC40OTQtLjM2Ni4xMjYtLjgwOS4yODgtMS4yNTUuNDUtLjA3NS4xODctMi4wNyA1LjY0Mi0yLjEzIDUuODIzLS45NDQgMi44Ny0xLjAwNSA0LjQ0Mi0uMzU4IDQuODk1LjE0NS4wOS4wNzQuMzMzLS4xNzguNDE0LTIuNTI3Ljc5Ni00Ljg1My0uNjk2LTMuNTU5LTQuNDQyIDEuMTYxLTMuMzE2IDUuNjktMTYuMTggNi45MTQtMTkuNjI2LjQyNy0xLjI5NC4xOTctMi4xMjUtLjQ5Mi0yLjMwNkM4LjUwNiAxLjc4Ljg3NyA4Ljc0OSAxLjk3MSAxNS4xODRjLjE5IDEuMTIuOTggMS43NDcgMS4zNzggMS42NjNhLjEzMy4xMzMgMCAwIDEgLjE1Ni4xNTkgMS41MDggMS41MDggMCAwIDEtMS44NDUgMS4wMzJDLjQ5IDE3Ljc4Mi4xMDcgMTYuNTI3LjA0MyAxNS44OC0uNjAxIDkuMjIgNi4xNDggMS4yMyAxMi4zODkuNThjMi4zNzgtLjI1IDQuNjEuOTYgMy42NCA0Ljc3MnptMjQuMDQgOS45MTMtLjA2LjIwNy0yLjgzIDguMTZjLS4zMDQuODUtLjEgMS43MzcuNTAxIDEuOTAyIDEuNzU3LjQ4MiA0LjAyOC0yLjE0NSA1LjEzMS00LjczM2E2Ny43OTQgNjcuNzk0IDAgMCAwIDEuNDc2LTMuODE1Yy41ODItMS42NDMgMS4xMDYtMy4xODMuNzgzLTMuOTA4LS4wNzUtLjE2OC4wNDUtLjI1Ni4yMjMtLjM1LjUwNS0uMjU1IDIuMjI2LS44MjUgMy4xNDEuMDY4LjY5NS42NzQuNjA5IDEuNzcxLS4wMyAzLjQzN2wtLjA5Ni4yNDIuMjItLjI3M2MyLjcwMy0zLjMgNC43OTItNC4yOTIgNi41NjMtMy41OTdsLjE0Ny4wNjJjMi4zODEgMS4wNzQgMS4xNDYgNS4yMTUtMi4xMTYgNS40OC0uMi4wMTctLjM1Ni0uMTI2LS4xNTgtLjQwNy4zOTUtLjYwNS4zNTYtMS45MDktLjc5Ni0yLjAyMi0xLjE1Mi0uMTEzLTIuODMgMS4yMDctNC4wMzggMi44NDQtMS4wODQgMS40NS0yLjIgMy45MTEtMy4zMjIgNy4yNzMtLjI3Mi44MTgtLjE0MyAxLjAxMi0uMTEgMS4wNjdhLjEuMSAwIDAgMSAwIC4wOTRjLS4xNDMuMjcyLS45NjUuNTk2LTEuNzYuNTk2LTEuNjI1LS4wMDctMi4yOTEtLjk0NS0xLjk2Ny0yLjQzNy0xLjg0OCAxLjc2NC0zLjcxMSAyLjYxNC01LjM1NSAyLjQ2NmEyLjUyNCAyLjUyNCAwIDAgMS0yLjIzNi0zLjEwM2MtMS40MjYgMS44MDktMy41NDIgMy4yNjgtNS42OTcgMy4wNjctMi4xNTUtLjItMy41LTEuNjY2LTIuODAyLTQuNzg4LjU5LTIuNTk4IDEuNTkyLTUuMjkgMi4yMDctNy4wMjcuNTE0LTEuNDU2LjYxOC0yLjQwNy4yOTQtMi43NS0uMTAzLS4xMTQuMDU1LS4yNS4xOTQtLjMyNCAxLjY5LS44ODYgNC4zOTQtLjMxNCAzLjYzIDIuMDktLjgwMiAyLjUyNy0yLjI1NSA2LjQ5LTIuNTUgNy40LS43MzcgMi4yODctLjI5IDMuNTIzLjc1NSAzLjU4IDEuMDQ1LjA2IDIuNDMtLjk2IDMuNDItMi41MDMgMS43Ni0yLjUyNCAyLjU4MS01LjY4NSAzLjM3Ny03Ljg4Mi4yMDQtLjU2LjUyNy0xLjg2Ni4xODUtMi4zNTItLjA5MS0uMTIzLjA2Ny0uMjU4LjI3NS0uMzcyIDEuNTM3LS44NDkgNC4yODUtLjY0IDMuNDAyIDIuNjA4eiIgZmlsbD0iIzVGMDA4MCIvPgogICAgPC9nPgo8L3N2Zz4K"
                        alt="마켓컬리 로고" className="css-17mnrrx e1s3pt0j0"/></div>
                    <MenuJoy style={{ fontFamily: "Noto Sans" }}>
                        <MenuItem
                            {...(selectedIndex === 0 && {selected: true, variant: 'soft'})}
                            onClick={createHandleClose(0)}
                        >
                            의류
                        </MenuItem>
                        <MenuItem selected={selectedIndex === 1} onClick={createHandleClose(1)}>
                            전자 기기
                        </MenuItem>
                        <MenuItem selected={selectedIndex === 2} onClick={createHandleClose(2)}>
                            잡화
                        </MenuItem>
                    </MenuJoy>
                </Dropdown>
                <Box sx={{justifyContent: 'center', flex: 1}}>
                    <Input
                        size="sm"
                        placeholder="Search"
                        endDecorator={<Search onClick={() => {
                            alert("TEST")
                        }}/>}
                        slotProps={{
                            input: {
                                'aria-label': 'Search anything',
                            },
                        }}
                        sx={{
                            m: 1,
                            height: 50,
                            borderRadius: 10, // 둥근 모서리로 변경
                            borderBottom: '2px solid',
                            borderColor: 'error.main', // 붉은색 테마로 변경
                            '&:hover': {
                                borderColor: 'error.dark', // 호버 시 더 어두운 붉은색으로 변경
                            },
                            '&::before': {
                                border: '1px solid var(--Input-focusedHighlight)',
                                transform: 'scaleX(0)',
                                left: 0,
                                right: 0,
                                bottom: '-2px',
                                top: 'unset',
                                transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
                                borderRadius: 10, // 둥근 모서리로 변경
                            },
                            '&:focus-within::before': {},
                        }}
                    />
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'flex-end'}}>
                    <Typography sx={{minWidth: 100, '&:hover': {color: 'grey', cursor: 'pointer'}}}>주문 목록</Typography>
                    <Typography sx={{minWidth: 100, '&:hover': {color: 'grey', cursor: 'pointer'}}}>장바구니</Typography>
                    <Tooltip title="Account settings">
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ml: 2}}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar sx={{width: 32, height: 32}}>M</Avatar>
                        </IconButton>
                    </Tooltip>
                </Box>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                >
                    <MenuItem onClick={handleClose}>
                        <Avatar/> Profile
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Avatar/> My account
                    </MenuItem>
                    <Divider/>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <PersonAdd fontSize="small"/>
                        </ListItemIcon>
                        Add another account
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <Settings fontSize="small"/>
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <Logout fontSize="small"/>
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
            </Box>
            <Box sx={{marginTop: '20px', marginX: '300px', height: '800px', paddingTop: '130px'}}>
                <Stack spacing={10}>
                    <Stack direction="row" spacing={2}>
                        <Dropdown>
                            <MenuButton className={'font'} startDecorator={<Apps/>}>카테고리</MenuButton>
                            <MenuJoy>
                                <MenuItem
                                    {...(selectedIndex === 0 && {selected: true, variant: 'soft'})}
                                    onClick={createHandleClose(0)}
                                >
                                    의류
                                </MenuItem>
                                <MenuItem selected={selectedIndex === 1} onClick={createHandleClose(1)}>
                                    전자 기기
                                </MenuItem>
                                <MenuItem selected={selectedIndex === 2} onClick={createHandleClose(2)}>
                                    잡화
                                </MenuItem>
                            </MenuJoy>
                        </Dropdown>
                        <Stack direction="row" spacing={2}>
                            <Box className="font"
                                 sx={{textAlign: 'right', fontSize: '20px', paddingLeft: '120px'}}>신상품</Box>
                            <Box className="font"
                                 sx={{textAlign: 'right', fontSize: '20px', paddingLeft: '120px'}}>베스트</Box>
                            <Box className="font"
                                 sx={{textAlign: 'right', fontSize: '20px', paddingLeft: '120px'}}>알뜰쇼핑</Box>
                            <Box className="font"
                                 sx={{textAlign: 'right', fontSize: '20px', paddingLeft: '120px'}}>특가/혜택</Box>
                        </Stack>
                        <Box className="font"
                             sx={{textAlign: 'right', fontSize: '20px', paddingLeft: '120px'}}><span className="css-1s2o3jp e1mmzaxa0">샛별・하루</span> 배송안내
                        </Box>
                    </Stack>
                    <Box component="section" sx={{p: 2, border: '1px dashed grey', height: ''}}>
                        <Stack direction="row" spacing={3}>
                            <Box component="section" sx={{
                                p: 0,
                                border: '1px dashed grey',
                                height: '100%',
                                width: '230px',
                                borderRadius: 3,
                                margin: 'auto'
                            }}>
                                <Box component="section" sx={{
                                    p: 0,
                                    border: '1px dashed grey',
                                    height: '300px',
                                    width: '230px',
                                    borderRadius: 3,
                                }}>
                                    <img src="/image/285939846376979-9eb20755-a513-4fd3-a03d-98d98d8274dc.jpg" alt="스트랩"
                                         style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 3}}/>
                                </Box>
                                <Button endDecorator={<KeyboardArrowRight/>} color="neutral"
                                        sx={{
                                            "--Button-gap": "45px", marginTop: "5px", marginBottom: "5px"
                                        }}>
                                    (그림) 장바구니 담기
                                </Button>
                                <Box component="section"
                                     sx={{p: 0, border: '1px dashed grey', height: '100%', width: '100%'}}>
                                    <IntroDivider></IntroDivider>
                                </Box>
                            </Box>
                            <Box component="section" sx={{
                                p: 0,
                                border: '1px dashed grey',
                                height: '100%',
                                width: '230px',
                                borderRadius: 3
                            }}>
                                <Box component="section" sx={{
                                    p: 0,
                                    border: '1px dashed grey',
                                    height: '300px',
                                    width: '230px',
                                    borderRadius: 3
                                }}>
                                    <img src="/image/285939846376979-9eb20755-a513-4fd3-a03d-98d98d8274dc.jpg" alt="스트랩"
                                         style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 3}}/>
                                </Box>
                                <Button endDecorator={<KeyboardArrowRight/>} color="neutral"
                                        sx={{
                                            "--Button-gap": "45px", marginTop: "5px", marginBottom: "5px"
                                        }}>
                                    (그림) 장바구니 담기
                                </Button>
                                <Box component="section"
                                     sx={{p: 0, border: '1px dashed grey', height: '100%', width: '100%'}}>
                                    <IntroDivider></IntroDivider>
                                </Box>
                            </Box>
                            <Box component="section" sx={{
                                p: 0,
                                border: '1px dashed grey',
                                height: '100%',
                                width: '230px',
                                borderRadius: 3
                            }}>
                                <Box component="section" sx={{
                                    p: 0,
                                    border: '1px dashed grey',
                                    height: '300px',
                                    width: '230px',
                                    borderRadius: 3
                                }}>
                                    <img src="/image/285939846376979-9eb20755-a513-4fd3-a03d-98d98d8274dc.jpg" alt="스트랩"
                                         style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 3}}/>
                                </Box>
                                <Button endDecorator={<KeyboardArrowRight/>} color="neutral"
                                        sx={{
                                            "--Button-gap": "45px", marginTop: "5px", marginBottom: "5px"
                                        }}>
                                    (그림) 장바구니 담기
                                </Button>
                                <Box component="section"
                                     sx={{p: 0, border: '1px dashed grey', height: '100%', width: '100%'}}>
                                    <IntroDivider></IntroDivider>
                                </Box>
                            </Box>
                            <Box component="section" sx={{
                                p: 0,
                                border: '1px dashed grey',
                                height: '100%',
                                width: '230px',
                                borderRadius: 3
                            }}>
                                <Box component="section" sx={{
                                    p: 0,
                                    border: '1px dashed grey',
                                    height: '300px',
                                    width: '230px',
                                    borderRadius: 3
                                }}>
                                    <img src="/image/285939846376979-9eb20755-a513-4fd3-a03d-98d98d8274dc.jpg" alt="스트랩"
                                         style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 3}}/>
                                </Box>
                                <Button endDecorator={<KeyboardArrowRight/>} color="neutral"
                                        sx={{
                                            "--Button-gap": "45px", marginTop: "5px", marginBottom: "5px"
                                        }}>
                                    (그림) 장바구니 담기
                                </Button>
                                <Box component="section"
                                     sx={{p: 0, border: '1px dashed grey', height: '100%', width: '100%'}}>
                                    <IntroDivider></IntroDivider>
                                </Box>
                            </Box>
                            <Box component="section" sx={{
                                p: 0,
                                border: '1px dashed grey',
                                height: '100%',
                                width: '230px',
                                borderRadius: 3
                            }}>
                                <Box component="section" sx={{
                                    p: 0,
                                    border: '1px dashed grey',
                                    height: '300px',
                                    width: '230px',
                                    borderRadius: 3
                                }}>
                                    <img src="/image/285939846376979-9eb20755-a513-4fd3-a03d-98d98d8274dc.jpg" alt="스트랩"
                                         style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 3}}/>
                                </Box>
                                <Button endDecorator={<KeyboardArrowRight/>} color="neutral"
                                        sx={{
                                            "--Button-gap": "45px", marginTop: "5px", marginBottom: "5px"
                                        }}>
                                    (그림) 장바구니 담기
                                </Button>
                                <Box component="section"
                                     sx={{p: 0, border: '1px dashed grey', height: '100%', width: '100%'}}>
                                    <IntroDivider></IntroDivider>
                                </Box>
                            </Box>
                        </Stack>
                    </Box>
                    <Box className="css-59n5un e1ne12di0" >
                        <a href="https://www.kurly.com/shop/event/kurlyEvent.php?htmid=event/live/grip/brand_kurly&amp;svID=kurly&amp;rvID=7k45j10yw936q3ne&amp;couponCode=%EB%9E%91%EC%BD%A4%EB%9D%BC%EC%9D%B4%EB%B8%8C"
                        className="css-1pkfdwt ezbfqia4">
                            <img alt="" sizes="100vw" style={{ width: '100%'}}
                        srcSet="https://product-image.kurly.com/cdn-cgi/image/width=1050,height=140,quality=85/banner/random-band/pc/img/1a8693e7-f546-468b-a181-648df5ee581a.png 640w, https://product-image.kurly.com/cdn-cgi/image/width=1050,height=140,quality=85/banner/random-band/pc/img/1a8693e7-f546-468b-a181-648df5ee581a.png 750w, https://product-image.kurly.com/cdn-cgi/image/width=1050,height=140,quality=85/banner/random-band/pc/img/1a8693e7-f546-468b-a181-648df5ee581a.png 828w, https://product-image.kurly.com/cdn-cgi/image/width=1050,height=140,quality=85/banner/random-band/pc/img/1a8693e7-f546-468b-a181-648df5ee581a.png 1080w, https://product-image.kurly.com/cdn-cgi/image/width=1050,height=140,quality=85/banner/random-band/pc/img/1a8693e7-f546-468b-a181-648df5ee581a.png 1200w, https://product-image.kurly.com/cdn-cgi/image/width=1050,height=140,quality=85/banner/random-band/pc/img/1a8693e7-f546-468b-a181-648df5ee581a.png 1920w, https://product-image.kurly.com/cdn-cgi/image/width=1050,height=140,quality=85/banner/random-band/pc/img/1a8693e7-f546-468b-a181-648df5ee581a.png 2048w, https://product-image.kurly.com/cdn-cgi/image/width=1050,height=140,quality=85/banner/random-band/pc/img/1a8693e7-f546-468b-a181-648df5ee581a.png 3840w"
                        src="https://product-image.kurly.com/cdn-cgi/image/width=1050,height=140,quality=85/banner/random-band/pc/img/1a8693e7-f546-468b-a181-648df5ee581a.png"
                                 decoding="async" data-nimg="fill" className="css-0"></img>
                        </a>
                    </Box>
                    {/*<Box component="section" sx={{p: 2, border: '1px dashed grey', height: '500px'}}>*/}
                    {/*    This Box renders as an HTML section element.*/}
                    {/*</Box>*/}
                    {/*<Box component="section" sx={{p: 2, border: '1px dashed grey', height: '500px'}}>*/}
                    {/*    This Box renders as an HTML section element.*/}
                    {/*</Box>*/}
                    {/*<Box component="section" sx={{p: 2, border: '1px dashed grey', height: '500px'}}>*/}
                    {/*    This Box renders as an HTML section element.*/}
                    {/*</Box>*/}
                </Stack>
            </Box>
        </div>
    );
}
