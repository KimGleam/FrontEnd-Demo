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
        <div>
            <Box component="section" sx={{ p: 3, backgroundColor: '#f0f0f0', display: 'flex', flexDirection: 'row',   position: 'fixed', width: '1241px', zIndex: 1000,
                alignItems: 'center', justifyContent: 'space-between', borderRadius: '10px', marginX: '300px'  }}>
                <Dropdown>
                    <MenuButton startDecorator={<Apps />}>카테고리</MenuButton>
                    <MenuJoy>
                        <MenuItem
                            {...(selectedIndex === 0 && { selected: true, variant: 'soft' })}
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
                <Box sx={{ justifyContent: 'center', flex: 1 }}>
                    <Input
                        size="sm"
                        placeholder="Search"
                        endDecorator={<Search onClick={() => {alert("TEST")}}/>}
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
                            '&:focus-within::before': {
                            },
                        }}
                    />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'flex-end'}}>
                    <Typography sx={{ minWidth: 100, '&:hover': { color: 'grey', cursor: 'pointer' } }}>주문 목록</Typography>
                    <Typography sx={{ minWidth: 100, '&:hover': { color: 'grey', cursor: 'pointer' } }}>장바구니</Typography>
                    <Tooltip title="Account settings">
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
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
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem onClick={handleClose}>
                        <Avatar /> Profile
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Avatar /> My account
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        Add another account
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
            </Box>
            <Box sx={{ marginTop: '20px', marginX: '300px', height: '800px', paddingTop: '130px' }}>
                <Stack spacing={10}>
                    <Box component="section" sx={{ p: 2, border: '1px dashed grey', height: '480px' }}>
                        <Stack direction="row" spacing={3}>
                            <Box component="section" sx={{ p: 0, border: '1px dashed grey', height: '480px', width: '230px', borderRadius: 3 }}>
                                <Box component="section" sx={{ p: 0, border: '1px dashed grey', height: '300px', width: '230px', borderRadius: 3 }}>
                                </Box>
                                <Button endDecorator={<KeyboardArrowRight />} color="neutral"
                                        sx={{
                                            "--Button-gap": "57px", marginTop: "5px", marginBottom: "5px"
                                        }}>
                                    (그림) 장바구니 담기
                                </Button>
                                <Box component="section" sx={{ p: 0, border: '1px dashed grey', height: '130px', width: '230px' }}>
                                </Box>
                            </Box>
                            <Box component="section" sx={{ p: 0, border: '1px dashed grey', height: '480px', width: '230px', borderRadius: 3 }}>
                                <Box component="section" sx={{ p: 0, border: '1px dashed grey', height: '300px', width: '230px', borderRadius: 3 }}>
                                </Box>
                                <Button endDecorator={<KeyboardArrowRight />} color="neutral"
                                        sx={{
                                            "--Button-gap": "57px", marginTop: "5px", marginBottom: "5px"
                                        }}>
                                    (그림) 장바구니 담기
                                </Button>
                                <Box component="section" sx={{ p: 0, border: '1px dashed grey', height: '130px', width: '230px' }}>
                                </Box>
                            </Box>
                            <Box component="section" sx={{ p: 0, border: '1px dashed grey', height: '480px', width: '230px', borderRadius: 3 }}>
                                <Box component="section" sx={{ p: 0, border: '1px dashed grey', height: '300px', width: '230px', borderRadius: 3 }}>
                                </Box>
                                <Button endDecorator={<KeyboardArrowRight />} color="neutral"
                                        sx={{
                                            "--Button-gap": "57px", marginTop: "5px", marginBottom: "5px"
                                        }}>
                                    (그림) 장바구니 담기
                                </Button>
                                <Box component="section" sx={{ p: 0, border: '1px dashed grey', height: '130px', width: '230px' }}>
                                </Box>
                            </Box>
                            <Box component="section" sx={{ p: 0, border: '1px dashed grey', height: '480px', width: '230px', borderRadius: 3 }}>
                                <Box component="section" sx={{ p: 0, border: '1px dashed grey', height: '300px', width: '230px', borderRadius: 3 }}>
                                </Box>
                                <Button endDecorator={<KeyboardArrowRight />} color="neutral"
                                        sx={{
                                            "--Button-gap": "57px", marginTop: "5px", marginBottom: "5px"
                                        }}>
                                    (그림) 장바구니 담기
                                </Button>
                                <Box component="section" sx={{ p: 0, border: '1px dashed grey', height: '130px', width: '230px' }}>
                                </Box>
                            </Box>
                            <Box component="section" sx={{ p: 0, border: '1px dashed grey', height: '480px', width: '230px', borderRadius: 3 }}>
                                <Box component="section" sx={{ p: 0, border: '1px dashed grey', height: '300px', width: '230px', borderRadius: 3 }}>
                                </Box>
                                <Button endDecorator={<KeyboardArrowRight />} color="neutral"
                                        sx={{
                                            "--Button-gap": "57px", marginTop: "5px", marginBottom: "5px"
                                        }}>
                                    (그림) 장바구니 담기
                                </Button>
                                <Box component="section" sx={{ p: 0, border: '1px dashed grey', height: '130px', width: '230px' }}>
                                </Box>
                            </Box>
                        </Stack>
                    </Box>
                    <Box component="section" sx={{ p: 2, border: '1px dashed grey', height: '500px' }}>
                        This Box renders as an HTML section element.
                    </Box>
                    <Box component="section" sx={{ p: 2, border: '1px dashed grey', height: '500px' }}>
                        This Box renders as an HTML section element.
                    </Box>
                    <Box component="section" sx={{ p: 2, border: '1px dashed grey', height: '500px' }}>
                        This Box renders as an HTML section element.
                    </Box>
                </Stack>
            </Box>
        </div>
    );
}
