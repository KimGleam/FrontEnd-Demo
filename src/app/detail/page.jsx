'use client';

import React, {useState} from "react";
import {
    Container,
    FormControl,
    Grid,
    IconButton,
    InputLabel, ListItemText,
    MenuItem,
    Popover,
    Select,
    TextField
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {MenuList} from "@mui/joy";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import SelectProduct from '../../components/SelectProduct';
import Footer from '../../components/footer';
import ScrollToTopButton from '../../components/ScrollToTopButton';
import ProductNav from '../../components/ProductNav';
import "../../static/page.css";

const searchCategories = [
    {id: 1, name: 'Category 1'},
    {id: 2, name: 'Category 2'},
    {id: 3, name: 'Category 3'},
    {id: 4, name: 'Category 4'}
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

const review = [
    {
        id: 1,
        authorId: '김태욱',
        content: '덕분에 마음껏 저질렀습니다..',
        writeDate: '2024-03-07 00:00:00',
        updateDate: '2024-03-07 00:01:23',
        helpfulCount: 2,
    }
];

const productInfo = {
    id: 1,
    title: '촉촉한',
    subTitle: '최고의 고기',
    sale: 20,
    cost: '23,000',
    discountPrice: '18,400',
};

const productDescription = {
    content: '어디서도 찾아볼 수 없었던 이 시대 최고의 .. 마음껏 저질러보세요...★',
    filePath: 'https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=720,height=936,quality=85/product/image/c1ea8fff-29d9-4e12-b2f1-667d76e2bdc9.jpeg'
};

export default function Detail() {
    const [relationIndex, setRelationIndex] = useState(0);
    const [count, setCount] = useState(1);
    const [totalPrice, setTotalPrice] = useState('18,400');
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('');


    const handleCategoryButtonClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCategoryClose = () => {
        setAnchorEl(null);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };
    const handleCountChange = (newCount) => {
        if (newCount < 1) {
            return;
        }
        setCount(newCount);

        // 할인 가격 문자열을 숫자로 파싱
        const discountPrice = parseFloat(productInfo.discountPrice.replace(/,/g, ''));
        // 총 가격 계산
        const newTotalPrice = (newCount * discountPrice).toLocaleString();

        setTotalPrice(newTotalPrice);
    };

    return (
        <Container>
            {/* 헤더 */}
            <Grid container justifyContent="space-between" alignItems="center" sx={{py: 2}}>
                <Grid item>
                    <IconButton color="inherit" sx={{mr: 2}} onClick={handleCategoryButtonClick}>
                        <MenuIcon/>
                    </IconButton>
                    <FormControl variant="outlined" sx={{marginLeft: 10}}>
                        <InputLabel id="category-label">Category</InputLabel>
                        <Select
                            labelId="category-label"
                            id="category"
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            label="Category"
                            sx={{width: 200}}
                        >
                            {searchCategories.map((category) => (
                                <MenuItem key={category.id} value={category.id}>
                                    {category.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField id="search" label="Search" variant="outlined" sx={{ml: 1, width: 600}}/>
                    <IconButton color="inherit">
                        <SearchIcon sx={{width: 40, height: 40}}/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton color="inherit">
                        <ShoppingCartIcon sx={{width: 40, height: 40}}/>
                    </IconButton>
                    <IconButton color="inherit">
                        <AccountCircleIcon sx={{width: 40, height: 40}}/>
                    </IconButton>
                </Grid>
            </Grid>


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
                <MenuList autoFocusItem={Boolean(anchorEl)} id="menu-list-grow" onKeyDown={handleCategoryClose}
                          sx={{width: 170, height: 300}}>
                    {categories.map((category) => (
                        <MenuItem
                            key={category.id}
                        >
                            <ListItemText primary={category.name}/>
                            {category.children.length > 0 && (
                                <IconButton size="small">
                                    <ArrowForwardIcon/>
                                </IconButton>
                            )}
                        </MenuItem>
                    ))}
                </MenuList>
            </Popover>
            <main className="css-1eoy87d e17iylht5">
                <Box mr={1} className="css-12z0wuy MuiBox-root css-12z0wuy">
                    <img src={productDescription.filePath} alt="상품 사진" sizes="100vw"/>
                </Box>
                <Box flex="1">
                    <div className="css-1qy9c46">
                        <h1 className="css-79gmk3">[태우한우] 1+ 한우 안심 스테이크/구이 200g (냉장)</h1>
                        <h2 className="css-ki8mlo">비단결처럼 곱고 부드러운 식감</h2>
                        <button className=" css-57nu3d eaxuegm1"></button>
                    </div>
                    <h2 className="css-abwjr2">
                        <span className="css-5nirzt">20%</span>
                        <span className="css-9pf1ze">31,760</span>
                        <span className="css-1x9cx9j">원</span>
                    </h2>
                    <span className="css-1e1rd4p e1q8tigr0"><span>43,000원</span>
                    </span>
                    <p className="css-1jali72 e17iylht2">원산지: 상품설명/상세정보 참조</p>
                    <div className="css-toq1xn e1hhkg2t2">로그인 후, 적립 혜택이 제공됩니다.</div>

                    <ul className="css-iqoq9n">
                        <li className="css-e6zlnr">
                            <dt className="css-lytdfk">배송</dt>
                            <dd className="css-1k8t52o">
                                <p className="css-c02hqi">샛별배송</p>
                                <p className="css-uy94b2">23시 전 주문 시 내일 아침 7시 전 도착 (대구·부산·울산 샛별배송 운영시간 별도
                                    확인)</p></dd>
                        </li>
                        <li className="css-e6zlnr">
                            <dt className="css-lytdfk">판매자</dt>
                            <dd className="css-1k8t52o"><p className="css-c02hqi e6qx2kx1">컬리</p>
                            </dd>
                        </li>
                        <li className="css-e6zlnr">
                            <dt className="css-lytdfk">포장타입</dt>
                            <dd className="css-1k8t52o"><p className="css-c02hqi e6qx2kx1">냉장
                                (종이포장)</p><p
                                className="css-uy94b2">택배배송은 에코 포장이 스티로폼으로 대체됩니다.</p></dd>
                        </li>
                        <li className="css-e6zlnr">
                            <dt className="css-lytdfk">판매단위</dt>
                            <dd className="css-1k8t52o"><p className="css-c02hqi">1팩</p>
                            </dd>
                        </li>
                        <li className="css-e6zlnr">
                            <dt className="css-lytdfk">중량/용량</dt>
                            <dd className="css-1k8t52o"><p className="css-c02hqi">200g</p>
                            </dd>
                        </li>
                        <li className="css-e6zlnr">
                            <dt className="css-lytdfk">알레르기정보</dt>
                            <dd className="css-1k8t52o"><p className="css-c02hqi">- 소고기 함유
                                - 이 제품은 돼지고기를 사용한 제품과 같은 제조시설에서 제조하고 있습니다.</p></dd>
                        </li>
                        <li className="css-e6zlnr">
                            <dt className="css-lytdfk">소비기한(또는 유통기한)정보</dt>
                            <dd className="css-1k8t52o"><p className="css-c02hqi">포장일로부터
                                최대 8일
                                이내
                                제품을
                                보내
                                드립니다.</p></dd>
                        </li>
                        <li className="css-e6zlnr">
                            <dt className="css-lytdfk">축산물 이력정보</dt>
                            <dd className="css-1k8t52o"><p className="css-c02hqi">이력번호가
                                표시된
                                제품이며,
                                이력번호는
                                수령하시는 상품 패키지에서 확인 가능합니다.</p></dd>
                        </li>
                        <li className="css-e6zlnr">
                            <dt className="css-lytdfk">안내사항</dt>
                            <dd className="css-1k8t52o"><p className="css-c02hqi">정육 상품의
                                특성상
                                중량은
                                2%내외의
                                차이가
                                발생할 수 있습니다.
                                보관기간이 신선도에 많은 영향을 주는 정육식품이기 때문에 수령후 최대한 빠른 시일내에 섭취를 권장드립니다.
                                중량에 따라 작은 조각이 함께 포장될 수 있습니다.</p></dd>
                        </li>
                    </ul>
                    <div className="css-1bp09d0 e17iylht1">
                        <div className="css-2lvxh7 e1qy0s5w0">
                            <li className="css-e6zlnr epzddad2">
                                <dt className="css-lytdfk epzddad1">상품선택</dt>
                                <dd className="css-1k8t52o epzddad0">
                                    <div className="cart-option-item css-1cb5lnc e1bjklo18">
                                        <div className="css-1qdyvok e1bjklo16">
                                            <span className="css-1yojl0t e1bjklo14">[메종엠오] 마들렌 쇼콜라 아파르타제</span>
                                        </div>
                                        <span className="css-1072618 e1bjklo13">적립제외상품</span>
                                        <div className="css-tk6lxo e1bjklo15">
                                            <div className="css-nx0orh e1cqr3m40">
                                                <button type="button" aria-label="수량내리기" className="css-1e90glc e1hx75jb0" onClick={() => handleCountChange(count - 1)} disabled={count === 1}></button>
                                                    <div className="count css-6m57y0 e1cqr3m41">{count}</div>
                                                <button type="button" aria-label="수량올리기" className="css-18y6jr4 e1hx75jb0" onClick={() => handleCountChange(count + 1)}></button>
                                            </div>
                                            <div className="css-1jzvrpg e1bjklo12"><span
                                                className="css-fburr9 e1bjklo11">{productInfo.cost}원</span><span
                                                className="css-gqkxk8 e1bjklo10">{productInfo.discountPrice}원</span></div>
                                        </div>
                                    </div>
                                </dd>
                            </li>
                        </div>
                        <div className="css-9y0nwt e17iylht0">
                            <div className="css-ixlb9s eebc7rx8">
                                <div className="css-yhijln eebc7rx7">
                                    <span className="css-w1is7v eebc7rx6">총 상품금액 :</span>
                                    <span className="css-x4cdgl eebc7rx5">{totalPrice}</span>
                                    <span className="css-1jb8hmu eebc7rx4">원</span>
                                </div>
                                <div className="css-1iis94s eebc7rx3"><span
                                    className="css-12p95ok eebc7rx2">적립</span><span className="css-10e9px3 eebc7rx1">로그인 후, 적립 혜택 제공</span>
                                </div>
                            </div>
                        </div>
                        <div className="css-gnxbjx e10vtr1i2">
                            <button className="css-3z91zj e4nu7ef3" type="button" width="56" height="56" radius="3">
                                <span className="css-nytqmg e4nu7ef1"><img
                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yNS44MDcgNy44NjNhNS43NzcgNS43NzcgMCAwIDAtOC4xNzIgMEwxNiA5LjQ5N2wtMS42MzUtMS42MzRhNS43NzkgNS43NzkgMCAxIDAtOC4xNzMgOC4xNzJsMS42MzQgMS42MzQgNy40NjYgNy40NjdhMSAxIDAgMCAwIDEuNDE1IDBzMCAwIDAgMGw3LjQ2Ni03LjQ2N2gwbDEuNjM0LTEuNjM0YTUuNzc3IDUuNzc3IDAgMCAwIDAtOC4xNzJ6IiBzdHJva2U9IiM1RjAwODAiIHN0cm9rZS13aWR0aD0iMS42IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K"
                                    alt="" className="css-0"/></span></button>
                            <button className="css-3z91zj e4nu7ef3" type="button" disabled="" width="56" height="56"
                                    radius="3"><span className="css-nytqmg e4nu7ef1"><img
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHN0cm9rZT0iI0NDQyIgc3Ryb2tlLXdpZHRoPSIxLjYiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTEyLjY2NiAyM2EzLjMzMyAzLjMzMyAwIDEgMCA2LjY2NiAwIi8+CiAgICAgICAgPHBhdGggZD0iTTI1Ljk5OCAyMi43MzhINmwuMDEzLS4wM2MuMDc2LS4xMzUuNDcxLS43MDQgMS4xODYtMS43MDlsLjc1LTEuMDV2LTYuNjM1YzAtNC40ODUgMy40MzgtOC4xNCA3Ljc0MS04LjMwOEwxNiA1YzQuNDQ2IDAgOC4wNSAzLjcyMiA4LjA1IDguMzE0djYuNjM0bDEuNzA3IDIuNDExYy4xNzMuMjUzLjI1NC4zOC4yNDIuMzh6IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                                alt="" className="css-0"/></span></button>
                            <div className="css-14jnwd7 e10vtr1i0">
                                <button className="cart-button css-1qirdbn e4nu7ef3" type="button" radius="3"><span
                                    className="css-nytqmg e4nu7ef1">장바구니 담기</span></button>
                            </div>
                        </div>
                    </div>
                </Box>
            </main>
            <ProductNav />
            {/* 드롭다운 상품 선택 영역 */}
            <SelectProduct count={count} totalPrice={totalPrice} handleCountChange={handleCountChange} productInfo={productInfo} />
            {/* 공통 푸터 영역 */}
            <Footer />
           <ScrollToTopButton />
        </Container>
    );
}