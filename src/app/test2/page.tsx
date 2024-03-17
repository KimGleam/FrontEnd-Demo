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
        <div style={{position: 'fixed', width: '100%', zIndex: 9999, backgroundColor: 'white'}}>
            <style jsx>{`
                .carousel {
                    display: flex;
                    overflow-x: auto;
                    scroll-snap-type: x mandatory;
                    scroll-behavior: smooth;
                    width: 100%;
                    height: 300px; /* 캐러셀 높이 조정 */
                }

                .item {
                    flex: 0 0 auto;
                    width: 300px; /* 각 상품 아이템 너비 조정 */
                    margin-right: 20px; /* 아이템 간격 조정 */
                    scroll-snap-align: start;
                }

                .item img {
                    width: 100%;
                    height: auto;
                    border-radius: 5px;
                }

                .carousel {
                    display: flex;
                    overflow-x: auto;
                    scroll-snap-type: x mandatory;
                    scroll-behavior: smooth;
                    width: 100%;
                    height: 300px; /* 캐러셀 높이 조정 */
                }

                .item {
                    flex: 0 0 auto;
                    width: 300px; /* 각 상품 아이템 너비 조정 */
                    margin-right: 20px; /* 아이템 간격 조정 */
                    scroll-snap-align: start;
                }

                .item img {
                    width: 100%;
                    height: auto;
                    border-radius: 5px;
                }
            `}</style>

            <div className="carousel">
                <div className="item">
                    <img src="product1.jpg" alt="Product 1"/>
                    <p>상품 설명 1</p>
                </div>
                <div className="item">
                    <img src="product2.jpg" alt="Product 2"/>
                    <p>상품 설명 2</p>
                </div>
                <div className="item">
                    <img src="product3.jpg" alt="Product 3"/>
                    <p>상품 설명 3</p>
                </div>
            </div>


        </div>

    )
}

export default Header;