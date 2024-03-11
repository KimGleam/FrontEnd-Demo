// ./src/app/detail/page.jsx

'use client'; // Mark the parent component as a Client Component

import React, {useState} from "react";
import {
    Button,
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
import {Add, Remove} from "@mui/icons-material";
import "../../static/page.css";
import Box from "@mui/material/Box";

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
    title: '촉촉한 촉수물',
    subTitle: '최고의 촉수...물',
    sale: 20,
    cost: '23,000',
    discountPrice: '18,400',
};

const productDescription = {
    content: '어디서도 찾아볼 수 없었던 이 시대 최고의 촉수물.. 마음껏 저질러보세요...★',
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
        const newTotalPrice = (newCount * productInfo.discountPrice).toLocaleString();
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
                                        <div className="css-1qdyvok e1bjklo16"><span className="css-1yojl0t e1bjklo14">[메종엠오] 마들렌 쇼콜라 아파르타제</span>
                                        </div>
                                        <span className="css-1072618 e1bjklo13">적립제외상품</span>
                                        <div className="css-tk6lxo e1bjklo15">
                                            <div className="css-nx0orh e1cqr3m40">
                                                <button type="button" aria-label="수량내리기"
                                                        className="css-1e90glc e1hx75jb0" disabled=""></button>
                                                <div className="count css-6m57y0 e1cqr3m41">1</div>
                                                <button type="button" aria-label="수량올리기"
                                                        className="css-18y6jr4 e1hx75jb0"></button>
                                            </div>
                                            <div className="css-1jzvrpg e1bjklo12"><span
                                                className="css-fburr9 e1bjklo11">43,000원</span><span
                                                className="css-gqkxk8 e1bjklo10">39,990원</span></div>
                                        </div>
                                    </div>
                                </dd>
                            </li>
                        </div>
                        <div className="css-9y0nwt e17iylht0">
                            <div className="css-ixlb9s eebc7rx8">
                                <div className="css-yhijln eebc7rx7"><span
                                    className="css-w1is7v eebc7rx6">총 상품금액 :</span><span
                                    className="css-x4cdgl eebc7rx5">39,990</span><span
                                    className="css-1jb8hmu eebc7rx4">원</span></div>
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
            <div className="css-17cdx60 ebj6vxr6">
                <div id="footer" className="css-1i60c0e ebj6vxr5">
                    <div className="css-j6zuv6 ebj6vxr4">
                        <div className="css-0 eam2qm511"><h2 className="css-4iyald eam2qm510">고객행복센터</h2><strong
                            className="css-9jqcug eam2qm58">1644-1107<span className="css-1uz1ro8 eam2qm59">월~토요일 오전 7시 - 오후 6시</span></strong>
                            <div className="css-1fttcpj eam2qm57">
                                <div className="css-ho1qnd eam2qm53">
                                    <button className="eam2qm54 css-hupzfj e19i509p0">카카오톡 문의</button>
                                    <div className="css-1lxmeik eam2qm52">월~토요일
                                        <svg width="1" height="10" viewBox="0 0 1 10" fill="none"
                                             xmlns="http://www.w3.org/2000/svg" className="css-w0fx7a eam2qm50">
                                            <line x1="0.5" y1="2.18557e-08" x2="0.5" y2="10" stroke="#ccc"></line>
                                        </svg>
                                        오전 7시 - 오후 6시<br/>일/공휴일
                                        <svg width="1" height="10" viewBox="0 0 1 10" fill="none"
                                             xmlns="http://www.w3.org/2000/svg" className="css-w0fx7a eam2qm50">
                                            <line x1="0.5" y1="2.18557e-08" x2="0.5" y2="10" stroke="#ccc"></line>
                                        </svg>
                                        오전 7시 - 오후 1시
                                    </div>
                                </div>
                                <div className="css-ho1qnd eam2qm53">
                                    <button className="css-nyq565 eam2qm56">1:1 문의</button>
                                    <div className="css-1lxmeik eam2qm52">365일<br/>고객센터 운영시간에 순차적으로 답변드리겠습니다.</div>
                                </div>
                                <div className="css-ho1qnd eam2qm53"><a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLScWcjRuN6eWJK-G8x3NwBfE8IyKZIOq7jhD3fUXuKSWwPqzJw/viewform"
                                    target="_blank" className="css-nyq565 eam2qm55">대량주문 문의</a>
                                    <div className="css-1lxmeik eam2qm52">월~금요일
                                        <svg width="1" height="10" viewBox="0 0 1 10" fill="none"
                                             xmlns="http://www.w3.org/2000/svg" className="css-w0fx7a eam2qm50">
                                            <line x1="0.5" y1="2.18557e-08" x2="0.5" y2="10" stroke="#ccc"></line>
                                        </svg>
                                        오전 9시 - 오후 6시<br/>점심시간
                                        <svg width="1" height="10" viewBox="0 0 1 10" fill="none"
                                             xmlns="http://www.w3.org/2000/svg" className="css-w0fx7a eam2qm50">
                                            <line x1="0.5" y1="2.18557e-08" x2="0.5" y2="10" stroke="#ccc"></line>
                                        </svg>
                                        낮 12시 - 오후 1시
                                    </div>
                                </div>
                            </div>
                            <div className="css-vtjvf eam2qm51">비회원 문의 : <a
                                href="mailto:help@kurlycorp.com">help@kurlycorp.com</a></div>
                        </div>
                        <div className="css-1fttcpj ebj6vxr3">
                            <ul className="css-17hse91 e13nap1l2">
                                <li className=" css-slkv2p e13nap1l1"><a href="/introduce" target="_self"
                                                                         className="css-1tfhwyj e13nap1l0">컬리소개</a></li>
                                <li className=" css-slkv2p e13nap1l1"><a
                                    href="https://www.youtube.com/embed/WEep7BcboMQ?rel=0&amp;showinfo=0&amp;wmode=opaque&amp;enablejsapi=1"
                                    target="_self" className="css-1tfhwyj e13nap1l0">컬리소개영상</a></li>
                                <li className=" css-slkv2p e13nap1l1"><a href="https://ir.kurly.com" target="_blank"
                                                                         className="css-1tfhwyj e13nap1l0">투자정보</a></li>
                                <li className=" css-slkv2p e13nap1l1"><a href="https://kurly.career.greetinghr.com"
                                                                         target="_blank"
                                                                         className="css-1tfhwyj e13nap1l0">인재채용</a></li>
                                <li className=" css-slkv2p e13nap1l1"><a href="/user-terms/agreement" target="_self"
                                                                         className="css-1tfhwyj e13nap1l0">이용약관</a></li>
                                <li className="bold css-slkv2p e13nap1l1"><a href="/user-terms/privacy-policy"
                                                                             target="_self"
                                                                             className="css-1tfhwyj e13nap1l0">개인정보처리방침</a>
                                </li>
                                <li className=" css-slkv2p e13nap1l1"><a href="/user-guide" target="_self"
                                                                         className="css-1tfhwyj e13nap1l0">이용안내</a></li>
                            </ul>
                            <div className="css-bz7mfs ebj6vxr2">법인명 (상호) : 주식회사 컬리 <span
                                className="css-1ekjygq ebj6vxr1"></span> 사업자등록번호 : 261-81-23567<a
                                href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2618123567&amp;apv_perm_no="
                                target="_blank" rel="noreferrer" className="css-1tby8gd ebj6vxr0">사업자정보 확인</a><br/>통신판매업
                                : 제 2018-서울강남-01646 호<br/>주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동) <span
                                    className="css-1ekjygq ebj6vxr1"></span> 대표이사 : 김슬아<br/>채용문의 :<a
                                    href="mailto:recruit@kurlycorp.com"
                                    className="css-1tby8gd ebj6vxr0">recruit@kurlycorp.com</a><br/>팩스: 070 - 7500 - 6098
                            </div>
                            <ul className="css-zjik7 ek68y4g1"><a href="https://instagram.com/marketkurly"
                                                                  target="_blank" rel="noreferrer"
                                                                  className="css-9ipg3 ek68y4g0"><img
                                src="https://res.kurly.com/pc/ico/1810/ico_instagram.png" alt="컬리 인스타그램 바로가기"/></a><a
                                href="https://www.facebook.com/marketkurly" target="_blank" rel="noreferrer"
                                className="css-9ipg3 ek68y4g0"><img src="https://res.kurly.com/pc/ico/1810/ico_fb.png"
                                                                    alt="컬리 페이스북 바로가기"/></a><a
                                href="https://blog.naver.com/marketkurly" target="_blank" rel="noreferrer"
                                className="css-9ipg3 ek68y4g0"><img src="https://res.kurly.com/pc/ico/1810/ico_blog.png"
                                                                    alt="컬리 네이버블로그 바로가기"/></a><a
                                href="https://m.post.naver.com/marketkurly" target="_blank" rel="noreferrer"
                                className="css-9ipg3 ek68y4g0"><img
                                src="https://res.kurly.com/pc/ico/1810/ico_naverpost.png" alt="컬리 네이버포스트 바로가기"/></a><a
                                href="https://www.youtube.com/channel/UCfpdjL5pl-1qKT7Xp4UQzQg" target="_blank"
                                rel="noreferrer" className="css-9ipg3 ek68y4g0"><img
                                src="https://res.kurly.com/pc/ico/1810/ico_youtube.png" alt="컬리 유튜브 바로가기"/></a></ul>
                        </div>
                    </div>
                    <div className="css-81eeg3 e1t23cq0">
                        <button className="css-12t5wjq e57xuci2"><img
                            src="https://res.kurly.com/pc/ico/2208/logo_isms.svg" alt="isms 로고"
                            className="css-1262i6n e57xuci1"/><p className="css-bft4sh e57xuci0">[인증범위] 컬리 쇼핑몰 서비스 개발·운영<br/>(심사받지
                            않은 물리적 인프라 제외)<br/>[유효기간] 2022.01.19 ~ 2025.01.18</p></button>
                        <button className="css-12t5wjq e57xuci2"><img
                            src="https://res.kurly.com/pc/ico/2208/logo_privacy.svg" alt="eprivacy plus 로고"
                            className="css-1262i6n e57xuci1"/><p className="css-bft4sh e57xuci0">개인정보보호 우수 웹사이트 ·<br/>개인정보처리시스템
                            인증 (ePRIVACY PLUS)</p></button>
                        <button className="css-12t5wjq e57xuci2"><img
                            src="https://res.kurly.com/pc/ico/2208/logo_tosspayments.svg" alt="payments 로고"
                            className="css-as7ifw e57xuci1"/><p className="css-bft4sh e57xuci0">토스페이먼츠 구매안전(에스크로)<br/>서비스를
                            이용하실 수 있습니다.</p></button>
                        <button className="css-12t5wjq e57xuci2"><img
                            src="https://res.kurly.com/pc/ico/2208/logo_wooriBank.svg" alt="우리은행 로고"
                            className="css-1262i6n e57xuci1"/><p className="css-bft4sh e57xuci0">고객님이 현금으로 결제한 금액에 대해
                            우리은행과<br/>채무지급보증 계약을 체결하여 안전거래를 보장하고<br/>있습니다.</p></button>
                    </div>
                </div>
                <div className="css-175n8cp etk3uz81">컬리에서 판매되는 상품 중에는 컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어
                    있습니다.<br/>마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지
                    않습니다.<em className="css-1vhhy2d etk3uz80">© KURLY CORP. ALL RIGHTS RESERVED</em></div>
            </div>
            <div className="css-1absul7 e1vpfwzd4">
                <div className="css-1danc6e e1vpfwzd3">
                    <button className="css-137fsc1 e1ssqoh62"><span className="css-1d3si1p e1ssqoh61">상품 선택</span><img
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iMHFhNjIzN2FlYSIgZD0iTTguOCA2LjRIMTZ2Ny4yIi8+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KICAgICAgICA8dXNlIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiB0cmFuc2Zvcm09InNjYWxlKDEgLTEpIHJvdGF0ZSgtNDUgLTExLjc0MiAwKSIgeGxpbms6aHJlZj0iIzBxYTYyMzdhZWEiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                        alt="open_arrow" className="css-18jsklt e1ssqoh60"/>
                    </button>
                    <div className="css-iqoq9n e1vpfwzd2">
                        <div className="css-1dltvla e1bhvj4s10">
                            <div className="css-1x17g94 e1bhvj4s9"><span className="css-jpj1ph e1bhvj4s8"><span
                                className="css-gad126 e1bhvj4s7">[메종엠오] 마들렌 쇼콜라 아파르타제</span><span
                                className="css-u0s929 e1bhvj4s6">적립제외상품</span></span><span
                                className="css-mk4uq1 e1bhvj4s5"><div className="css-nx0orh e1cqr3m40"><button
                                type="button" aria-label="수량내리기" disabled="" className="css-1e90glc e1hx75jb0"></button><div
                                className="count css-6m57y0 e1cqr3m41">1</div><button type="button" aria-label="수량올리기"
                                                                                      className="css-18y6jr4 e1hx75jb0"></button></div><span
                                className="css-1tjxd68 e1bhvj4s3"><span className="css-15v9kqc e1bhvj4s2">43,000원</span><span
                                className="css-ei9o8o e1bhvj4s1">39,990원</span></span></span></div>
                        </div>
                    </div>
                    <div className="css-8qz8ia e1vpfwzd1">
                        <div className="css-ixlb9s eebc7rx8">
                            <div className="css-yhijln eebc7rx7"><span
                                className="css-w1is7v eebc7rx6">총 상품금액 :</span><span
                                className="css-x4cdgl eebc7rx5">39,990</span><span
                                className="css-1jb8hmu eebc7rx4">원</span></div>
                            <div className="css-1iis94s eebc7rx3"><span className="css-12p95ok eebc7rx2">적립</span><span
                                className="css-10e9px3 eebc7rx1">로그인 후, 적립 혜택 제공</span></div>
                        </div>
                    </div>
                    <div className="css-skgbeu e1vpfwzd0">
                        <div className="css-ilrvvb e10vtr1i1">
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
                </div>
            </div>
            <span className="css-8vh040 e14akbvd1"><a><img
                src="https://res.kurly.com/pc/service/common/1903/btn_pagetop_v2.png" alt="위로가기 아이콘"
                className="css-xjpx28 e14akbvd0"/></a></span>
        </Container>
    );
}