'use client';

import * as React from "react";
import {IconButton, Menu, MenuItem} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";


const Header = () => {

    return (
        <div style={{position:'fixed', width: '100%', zIndex:9999, backgroundColor: 'white'}}>
            <style jsx>{`
                .header {
                    color: #ffffff;
                    padding: 5px 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.0);
                }

                .logo {
                    margin-left: 20%;
                    font-size: 24px;
                    font-weight: bold;
                    color: #4797e1;
                    text-transform: uppercase;
                }

                .search-container {
                    border: 1px solid #4797e1;
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                }

                .search-input {
                    padding: 8px;
                    border: none;
                    border-radius: 5px;
                    margin-right: 10px;
                    width: 250px;
                    font-size: 16px;
                }

                .search-button {
                    background-color: #ffffff;
                    border: none;
                    border-radius: 5px;
                    padding: 8px 15px;
                    cursor: pointer;
                    font-size: 16px;
                }
                
                input:focus {outline:none;}

                @font-face {
                    font-family: 'Recipekorea';
                    //src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/Recipekorea.woff') format('woff');
                    font-weight: normal;
                    font-style: normal;
                }

                * {
                    margin: 0;
                    padding: 0;
                }

                a, a:link {
                    color: #000;
                    text-decoration: none;
                    font-family: 'Recipekorea';
                }

                ul {
                    list-style: none;
                    margin: 20vh auto;
                    display: flex;
                    justify-content: center;
                }

                ul li a {
                    display: block;
                    padding: 1.5vw 2vw 1vw;
                    position: relative;
                    font-size: 18px;
                }

                ul li a::after {
                    content: '';
                    display: block;
                    position: absolute;
                    z-index: -1;
                }

                .menu1 li a::after {
                    bottom: -5;
                    width: 0;
                    height: 0.2vw;
                    background: #4797e1;
                    left: 50%;
                }

                .menu1 li a:hover {
                    color: #4797e1;
                }
                
                ul li a:hover::after {
                    width: 100%;
                    left: 0;
                    transition: all .3s;
                }
            `}</style>

            <div className="header">
                <div className="logo">Double U</div>

                <div className="search-container">
                    <input type="text" className="search-input" placeholder="검색어를 입력하세요..."/>
                    <button className="search-button">검색</button>
                </div>

                <div style={{marginRight: '20%'}}>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="error">
                            <MailIcon sx={{color: 'black'}}/>
                        </Badge>
                    </IconButton>
                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={17} color="error">
                            <NotificationsIcon sx={{color: 'black'}}/>
                        </Badge>
                    </IconButton>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle sx={{color: 'black'}}/>
                    </IconButton>
                </div>
            </div>

            <div style={{
                height: '40px',
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2)'
            }}>
                <ul style={{listStyle: 'none', padding: 0, margin: 0}} className="menu1">
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ml: 2, mr: 2, color: '#0a6aca'}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <li style={{display: 'inline-block', marginRight: '190px'}}><a href="#">신상품</a></li>
                    <li style={{display: 'inline-block', marginRight: '190px'}}><a href="#">베스트</a></li>
                    <li style={{display: 'inline-block', marginRight: '190px'}}><a href="#">알뜰상품</a></li>
                    <li style={{display: 'inline-block'}}><a href="#">특가/혜택</a></li>
                </ul>
            </div>


        </div>

    )
}

export default Header;