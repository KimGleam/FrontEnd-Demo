'use client';

import {
    Container,
    Grid,
    Paper,
    Typography,
    IconButton,
    TextField,
    Popover,
    Menu,
    MenuItem, ListItemText, Select, InputLabel, FormControl,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';
import {MenuList} from "@mui/joy";
import Box from "@mui/material/Box";

const searchCategories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
    { id: 4, name: 'Category 4' }
];

const categories = [
    {
        id: 1,
        name: '카테고리 1',
        children: [
            {
                id: 2,
                name: '하위 카테고리 1-1',
                children: []
            },
            {
                id: 3,
                name: '하위 카테고리 1-2',
                children: []
            }
        ]
    },
    {
        id: 4,
        name: '카테고리 2',
        children: [
            {
                id: 5,
                name: '하위 카테고리 2-1',
                children: []
            },
            {
                id: 6,
                name: '하위 카테고리 2-2',
                children: []
            }
        ]
    },
    {
        id: 5,
        name: '카테고리 3',
        children: [
            {
                id: 6,
                name: '하위 카테고리 3-1',
                children: []
            },
            {
                id: 7,
                name: '하위 카테고리 3-2',
                children: []
            }
        ]
    },
    {
        id: 8,
        name: '카테고리 4',
        children: [
            {
                id: 9,
                name: '하위 카테고리 4-1',
                children: []
            },
            {
                id: 10,
                name: '하위 카테고리 4-2',
                children: []
            }
        ]
    }
];

const products = [
    { id: 1, name: 'Product 1', price: '$10', image: 'https://images.unsplash.com/photo-1549388604-817d15aa0110' },
    { id: 2, name: 'Product 2', price: '$20', image: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3' },
    { id: 3, name: 'Product 3', price: '$30', image: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6' },
    { id: 4, name: 'Product 4', price: '$40', image: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31' },
    { id: 5, name: 'Product 5', price: '$40', image: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622' },
    { id: 6, name: 'Product 5', price: '$40', image: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62' },
];

const promotions = [
    { id: 1, name: 'Promotion 1', image: 'https://images.unsplash.com/photo-1549388604-817d15aa0110' },
    { id: 2, name: 'Promotion 2', image: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3' },
    { id: 3, name: 'Promotion 3', image: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6' }
];

const events = [
    { id: 1, name: 'Event 1', image: 'https://images.unsplash.com/photo-1549388604-817d15aa0110' },
    { id: 2, name: 'Event 2', image: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3' },
    { id: 3, name: 'Event 3', image: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6' }
];

const discounts = [
    { id: 1, name: 'Discount 1', price: '$5', image: 'https://images.unsplash.com/photo-1549388604-817d15aa0110' },
    { id: 2, name: 'Discount 2', price: '$10',image: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3'  },
    { id: 3, name: 'Discount 3', price: '$15',image: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6' },
    { id: 4, name: 'Discount 4', price: '$20',image: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31' },
    { id: 5, name: 'Discount 5', price: '$20',image: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622' },
    { id: 6, name: 'Discount 6', price: '$20',image: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62' }
];

const Home = () => {
    const [currentProductIndex, setCurrentProductIndex] = useState(0);
    const [currentPromotionIndex, setCurrentPromotionIndex] = useState(0);
    const [currentEventIndex, setCurrentEventIndex] = useState(0);
    const [currentDiscountIndex, setCurrentDiscountIndex] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('');

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
        setCurrentEventIndex(prevIndex => (prevIndex === 0 ? promotions.length - 1 : prevIndex - 1));
    };

    const handleNextEvent = () => {
        setCurrentEventIndex(prevIndex => (prevIndex === promotions.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrevDiscount = () => {
        setCurrentDiscountIndex(prevIndex => (prevIndex === 0 ? discounts.length - 1 : prevIndex - 1));
    };

    const handleNextDiscount = () => {
        setCurrentDiscountIndex(prevIndex => (prevIndex === discounts.length - 1 ? 0 : prevIndex + 1));
    };

    const handleCategoryButtonClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCategoryClose = () => {
        setAnchorEl(null);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <Box>
            {/* 헤더 */}
            <Container>
                <Grid container justifyContent="space-between" alignItems="center" sx={{ py: 2 }}>
                    <Grid item>
                        <IconButton color="inherit" sx={{ mr: 2 }} onClick={handleCategoryButtonClick}>
                            <MenuIcon />
                        </IconButton>
                        <FormControl variant="outlined" sx={{marginLeft: 10}}>
                            <InputLabel id="category-label">Category</InputLabel>
                            <Select
                                labelId="category-label"
                                id="category"
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                                label="Category"
                                sx={{width:200}}
                            >
                                {searchCategories.map((category) => (
                                    <MenuItem key={category.id} value={category.id}>
                                        {category.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField id="search" label="Search" variant="outlined" sx={{ ml: 1, width: 600 }} />
                        <IconButton color="inherit">
                            <SearchIcon sx={{width: 40, height: 40}} />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton color="inherit">
                            <ShoppingCartIcon sx={{width: 40, height: 40}} />
                        </IconButton>
                        <IconButton color="inherit">
                            <AccountCircleIcon sx={{width: 40, height: 40}} />
                        </IconButton>
                    </Grid>
                </Grid>
            </Container>


            {/* 카테고리 메뉴 */}
            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleCategoryClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuList autoFocusItem={Boolean(anchorEl)} id="menu-list-grow" onKeyDown={handleCategoryClose} sx={{width: 170, height: 300}}>
                    {categories.map((category) => (
                        <MenuItem
                            key={category.id}
                        >
                            <ListItemText primary={category.name} />
                            {category.children.length > 0 && (
                                <IconButton size="small">
                                    <ArrowForwardIcon />
                                </IconButton>
                            )}
                        </MenuItem>
                    ))}
                </MenuList>
            </Popover>

            {/* 프로모션 영역 */}
            <Box sx={{ p: 2, mb: 2, marginTop: 1, height: 400 }}>
                <Typography variant="h4" mb={2}>프로모션 상품</Typography>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        <IconButton onClick={handlePrevPromotion}>
                            <ArrowBackIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs sx={{ p: 2, mb: 2, height: 390 }}>
                        <img src={promotions[currentPromotionIndex].image} alt={promotions[currentPromotionIndex].name} style={{ width: '100%', height: '100%' }} />
                    </Grid>
                    <Grid item>
                        <IconButton onClick={handleNextPromotion}>
                            <ArrowForwardIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>

            {/* 상품 목록 */}
            <Container maxWidth="xl">
                <Box sx={{ p: 2, mb: 2, marginTop: 7 }}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={1}>
                            {currentProductIndex !== 0 && (
                                <IconButton onClick={handlePrevProduct}>
                                    <ArrowBackIcon />
                                </IconButton>
                            )}
                        </Grid>
                        <Grid item xs={10}>
                            <Typography variant="h4" mb={2}>상품 목록</Typography>
                            <Grid container spacing={2}>
                                {products.slice(currentProductIndex, currentProductIndex + 4).map((product, index) => (
                                    <Grid key={product.id} item xs={3} sm={3}>
                                        {/* 할인 상품 카드 */}
                                        <Paper sx={{height: 270, width: 240, marginBottom: 2}}>
                                            <img src={product.image} alt={product.name} style={{width: '100%', height: '100%'}}/>
                                        </Paper>
                                        <Paper sx={{height: 80, width: 240}}>
                                            <Typography variant="h6">{product.name}</Typography>
                                            <Typography variant="body1">{product.price}</Typography>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid item xs={1} sx={{ textAlign: 'right' }}>
                            {products.length > 4 && currentProductIndex !== products.length - 4 && (
                                <IconButton onClick={handleNextProduct}>
                                    <ArrowForwardIcon />
                                </IconButton>
                            )}
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            {/* 할인 상품 영역 */}
            <Container maxWidth="xl">
                <Box sx={{ p: 2, mb: 2, marginTop: 7}}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={1}>
                            {currentDiscountIndex !== 0 && (
                                <IconButton onClick={handlePrevDiscount}>
                                    <ArrowBackIcon />
                                </IconButton>
                            )}
                        </Grid>
                        <Grid item xs={10}>
                            <Typography variant="h4" mb={2}>할인 상품</Typography>
                            <Grid container spacing={2}>
                                {discounts.slice(currentDiscountIndex, currentDiscountIndex + 4).map((discount, index) => (
                                    <Grid key={discount.id} item xs={6} sm={3}>
                                        {/* 할인 상품 카드 */}
                                        <Paper sx={{height: 270, width: 240, marginBottom: 2}}>
                                            <img src={discount.image} alt={discount.name} style={{width: '100%', height: '100%'}}/>
                                        </Paper>
                                        <Paper sx={{height: 80, width: 220}}>
                                            <Typography variant="h6">{discount.name}</Typography>
                                            <Typography variant="body1">{discount.price}</Typography>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid item xs={1} sx={{ textAlign: 'right' }}>
                            {discounts.length > 4 && currentDiscountIndex !== discounts.length - 4 && (
                                <IconButton onClick={handleNextDiscount}>
                                    <ArrowForwardIcon />
                                </IconButton>
                            )}
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            {/* 이벤트 영역 */}
            <Box sx={{ p: 2, mb: 2, marginTop: 5, height: 400 }}>
                <Typography variant="h4" mb={2}>이벤트</Typography>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        <IconButton onClick={handlePrevEvent}>
                            <ArrowBackIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs sx={{ p: 2, mb: 2, height: 390 }}>
                        <img src={events[currentEventIndex].image} alt={events[currentEventIndex].name} style={{ width: '100%', height: '100%' }} />
                    </Grid>
                    <Grid item>
                        <IconButton onClick={handleNextEvent}>
                            <ArrowForwardIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Home;
