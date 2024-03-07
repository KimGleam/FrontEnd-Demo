'use client';
// pages/index.js

import { Container, Grid, Paper, Typography, IconButton, TextField } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';

const products = [
    { id: 1, name: 'Product 1', price: '$10', image: '/product1.jpg' },
    { id: 2, name: 'Product 2', price: '$20', image: '/product2.jpg' },
    { id: 3, name: 'Product 3', price: '$30', image: '/product3.jpg' },
    { id: 4, name: 'Product 4', price: '$40', image: '/product4.jpg' },
    { id: 5, name: 'Product 5', price: '$40', image: '/product4.jpg' },
    { id: 6, name: 'Product 5', price: '$40', image: '/product4.jpg' },
];

const promotions = [
    { id: 1, name: 'Promotion 1', image: '/promotion1.jpg' },
    { id: 2, name: 'Promotion 2', image: '/promotion2.jpg' },
    { id: 3, name: 'Promotion 3', image: '/promotion3.jpg' }
];

const events = [
    { id: 1, name: 'Event 1', description: 'Event description 1' },
    { id: 2, name: 'Event 2', description: 'Event description 2' },
    { id: 3, name: 'Event 3', description: 'Event description 3' }
];

const discounts = [
    { id: 1, name: 'Discount 1', price: '$5', image: '/discount1.jpg' },
    { id: 2, name: 'Discount 2', price: '$10', image: '/discount2.jpg' },
    { id: 3, name: 'Discount 3', price: '$15', image: '/discount3.jpg' },
    { id: 4, name: 'Discount 4', price: '$20', image: '/discount4.jpg' },
    { id: 5, name: 'Discount 5', price: '$20', image: '/discount4.jpg' },
    { id: 6, name: 'Discount 6', price: '$20', image: '/discount4.jpg' }
];

const Home = () => {
    const [currentProductIndex, setCurrentProductIndex] = useState(0);
    const [currentPromotionIndex, setCurrentPromotionIndex] = useState(0);
    const [currentEventIndex, setCurrentEventIndex] = useState(0);
    const [currentDiscountIndex, setCurrentDiscountIndex] = useState(0);

    const handlePrevProduct = () => {
        setCurrentProductIndex(prevIndex => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
    };

    const handleNextProduct = () => {
        setCurrentProductIndex(prevIndex => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrevPromotion = () => {
        setCurrentPromotionIndex(prevIndex => (prevIndex === 0 ? promotions.length - 1 : prevIndex - 1));
    };

    const handleNextPromotion = () => {
        setCurrentPromotionIndex(prevIndex => (prevIndex === promotions.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrevEvent = () => {
        setCurrentEventIndex(prevIndex => (prevIndex === 0 ? events.length - 1 : prevIndex - 1));
    };

    const handleNextEvent = () => {
        setCurrentEventIndex(prevIndex => (prevIndex === events.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrevDiscount = () => {
        setCurrentDiscountIndex(prevIndex => (prevIndex === 0 ? discounts.length - 1 : prevIndex - 1));
    };

    const handleNextDiscount = () => {
        setCurrentDiscountIndex(prevIndex => (prevIndex === discounts.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <Container>
            {/* 헤더 */}
            <Grid container justifyContent="space-between" alignItems="center" sx={{py: 2}}>
                <Grid item>
                    <IconButton color="inherit" sx={{mr: 2}}>
                        <MenuIcon/>
                    </IconButton>
                    <TextField id="search" label="Search" variant="outlined" sx={{mr: 1}}/>
                    <IconButton color="inherit">
                        <SearchIcon/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton color="inherit">
                        <ShoppingCartIcon/>
                    </IconButton>
                    <IconButton color="inherit">
                        <AccountCircleIcon/>
                    </IconButton>
                </Grid>
            </Grid>

            {/* 프로모션 영역 */}
            <Paper sx={{p: 2, mb: 2}}>
                <Typography variant="h4" mb={2}>프로모션 상품</Typography>
                <Grid container spacing={2}>
                    <Grid item>
                        <IconButton onClick={handlePrevPromotion}>
                            <ArrowBackIcon/>
                        </IconButton>
                    </Grid>
                    <Grid item xs>
                        <img src={promotions[currentPromotionIndex].image} alt={promotions[currentPromotionIndex].name} style={{ width: '100%' }} />
                    </Grid>
                    <Grid item>
                        <IconButton onClick={handleNextPromotion}>
                            <ArrowForwardIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Paper>

            {/* 상품 목록 */}
            <Paper sx={{p: 2, mb: 2}}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={1}>
                        {currentProductIndex !== 0 && (
                            <IconButton onClick={handlePrevProduct}>
                                <ArrowBackIcon/>
                            </IconButton>
                        )}
                    </Grid>
                    <Grid item xs={10}>
                        <Typography variant="h4" mb={2}>상품 목록</Typography>
                        <Grid container spacing={2}>
                            {products.slice(currentProductIndex, currentProductIndex + 4).map((product, index) => (
                                <Grid key={product.id} item xs={3} sm={3}>
                                    {/* 할인 상품 카드 */}
                                    <Paper sx={{height: 250, width: 220, marginBottom: 2}}>
                                        <img src={product.image} alt={product.name} style={{width: '100%'}}/>
                                    </Paper>
                                    <Paper sx={{height: 80, width: 220}}>
                                        <Typography variant="h6">{product.name}</Typography>
                                        <Typography variant="body1">{product.price}</Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid item xs={1} sx={{textAlign: 'right'}}>
                        {products.length > 4 && currentProductIndex !== products.length - 4 && (
                            <IconButton onClick={handleNextProduct}>
                                <ArrowForwardIcon/>
                            </IconButton>
                        )}
                    </Grid>
                </Grid>
            </Paper>

            {/* 할인 상품 영역 */}
            <Paper sx={{p: 2, mb: 2}}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={1}>
                        {currentDiscountIndex !== 0 && (
                            <IconButton onClick={handlePrevDiscount}>
                                <ArrowBackIcon/>
                            </IconButton>
                        )}
                    </Grid>
                    <Grid item xs={10}>
                        <Typography variant="h4" mb={2}>할인 상품</Typography>
                        <Grid container spacing={2}>
                            {discounts.slice(currentDiscountIndex, currentDiscountIndex + 4).map((discount, index) => (
                                <Grid key={discount.id} item xs={6} sm={3}>
                                    {/* 할인 상품 카드 */}
                                    <Paper sx={{height: 250, width: 220, marginBottom: 2}}>
                                        <img src={discount.image} alt={discount.name} style={{width: '100%'}}/>
                                    </Paper>
                                    <Paper sx={{height: 80, width: 220}}>
                                        <Typography variant="h6">{discount.name}</Typography>
                                        <Typography variant="body1">{discount.price}</Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid item xs={1} sx={{textAlign: 'right'}}>
                        {discounts.length > 4 && currentDiscountIndex !== discounts.length - 4 && (
                            <IconButton onClick={handleNextDiscount}>
                                <ArrowForwardIcon/>
                            </IconButton>
                        )}
                    </Grid>
                </Grid>
            </Paper>

            {/* 이벤트 내용 */}
            <Paper sx={{p: 2, mb: 2}}>
                <Typography variant="h4">이벤트 내용</Typography>
                <Grid container spacing={2}>
                    <Grid item>
                        <IconButton onClick={handlePrevEvent}>
                            <ArrowBackIcon/>
                        </IconButton>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h6">{events[currentEventIndex].name}</Typography>
                        <Typography variant="body1">{events[currentEventIndex].description}</Typography>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={handleNextEvent}>
                            <ArrowForwardIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default Home;