'use client';

import {
    Grid,
    Paper,
    Typography,
} from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import Box from "@mui/material/Box";
import Carousel from "react-material-ui-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../../components/Header";
import Product from "../../components/Product";
import DiscountProduct from "../../components/DiscountProduct";
import EventBanner from "../../components/EventBanner";
import PromotionBanner from "../../components/PromotionBanner";

const Home = () => {

    return (
        <body style={{margin:0}}>
            <Box>
                {/*헤더 영역*/}
                <Header></Header>

                {/* 이벤트 영역 */}
                <EventBanner></EventBanner>

                {/* 상품 목록 */}
                <Product></Product>

                {/* 할인 상품 영역 */}
                <DiscountProduct></DiscountProduct>

                {/* 프로모션 영역 */}
                <PromotionBanner></PromotionBanner>
            </Box>
        </body>
    );
};

export default Home;
