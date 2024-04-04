'use client';

import React, {useEffect, useState} from 'react';

import "../../static/page.css";
import Header from "../../components/Header";
import {Container, IconButton, ListItemText, MenuItem, Popover} from "@mui/material";
import {MenuList} from "@mui/joy";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import SelectItem from "../../components/product/SelectItem";
import InfoNaviBar from "../../components/product/InfoNaviBar";
import SelectItemTab from "../../components/product/SelectItemTab";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import Footer from "../../components/footer";

export default function ShoppingCart () {
    const [relationIndex, setRelationIndex] = useState(0);
    // const [count, setCount] = useState(1);
    const [totalPrice, setTotalPrice] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('');
    // const selectedItems = [];
    // const count = [];
    const [selectedItems, setSelectedItems] = useState([]); // State to manage selected items

    const handleCategoryButtonClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCategoryClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {/* 헤더 */}
            <Header></Header>
            <Container sx={{paddingTop: 15}}>
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
                </Popover>
                <Box className="css-1pz4b76 er0tf675">
                    <h2 className="css-1n2hipb er0tf674">장바구니</h2>
                    <Box></Box>
                    <Box className="css-a6t9xs er0tf673">
                        <Box className="css-8wfj4z er0tf672">
                            <Box className="css-20o6z0 e149z643">
                                <Box className="css-zbxehx e149z642">
                                    <label className="css-xi6i4x e1dcessg3">
                                        <input type="checkbox" className="css-agvwxo e1dcessg2"/>
                                        <Box className="css-79hxr7 e1dcessg1">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                                                    fill="#5f0080"></path>
                                                <path d="M7 12.6667L10.3846 16L18 8.5" stroke="#fff" stroke-width="1.5"
                                                      stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </Box>
                                        <span>전체선택 (3/3)</span>
                                    </label>
                                    <span className="css-454d5e e149z641"></span>
                                    <button className="css-0 e149z640">선택삭제</button>
                                </Box>
                            </Box>
                            <Box className="css-2lvxh7 ej77nku0">
                                <Box>
                                    <h4 className="css-td54hr e1w1cmkx0">
                                        <span className="css-1nzj0g2 e6yclqm1"><span
                                            className="css-12dwhid e6yclqm0"><span
                                            className="css-qct1ee ev909jf0"></span></span>냉장 상품</span>
                                        <button data-testid="fold-button" className="css-lvqq7y e17cst860">
                                            <svg width="30" height="30" viewBox="0 0 30 30"
                                                 xmlns="http://www.w3.org/2000/svg"
                                                 xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <defs>
                                                    <path id="7a02qqg3ja" d="M11 12h9v9"></path>
                                                </defs>
                                                <g fill="none" fill-rule="evenodd">
                                                    <path d="M0 0h30v30H0z"></path>
                                                    <use stroke="#333" stroke-width="2" stroke-linecap="square"
                                                         transform="rotate(-45 15.5 16.5)" href="#7a02qqg3ja"></use>
                                                </g>
                                            </svg>
                                        </button>
                                    </h4>
                                    <ul>
                                        <li className="css-1d6kgf6 esoayg811"><label
                                            className="css-14td1km e1dcessg3"><input type="checkbox"
                                                                                     className="css-agvwxo e1dcessg2"
                                                                                     checked=""/>
                                            <div className="css-79hxr7 e1dcessg1">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                                                        fill="#5f0080"></path>
                                                    <path d="M7 12.6667L10.3846 16L18 8.5" stroke="#fff"
                                                          stroke-width="1.5" stroke-linecap="round"
                                                          stroke-linejoin="round"></path>
                                                </svg>
                                            </div>
                                            <span></span></label><a className="css-1u5t3pw esoayg810"><span
                                            className="css-3negg1 esoayg89"></span></a>
                                            <div className="css-14sb0pe esoayg88"><a className="css-e0dnmk esoayg87"><p
                                                className="css-efcx1u esoayg86">유레카 블루베리 100g (22mm,대왕)</p><p
                                                data-testid="content-product-name" className="css-3izcs6 esoayg85">유레카
                                                블루베리 100g 3종 (택1) (국산)</p></a>
                                                <div className="css-ar9i78 esoayg82"></div>
                                            </div>
                                            <div className="css-1gueo66 e1cqr3m40">
                                                <button type="button" aria-label="수량내리기" disabled=""
                                                        className="css-1e90glc e1hx75jb0"></button>
                                                <div className="count css-6m57y0 e1cqr3m41">1</div>
                                                <button type="button" aria-label="수량올리기"
                                                        className="css-18y6jr4 e1hx75jb0"></button>
                                            </div>
                                            <div className="css-5w3ssu esoayg84"><span aria-label="할인 가격"
                                                                                       data-testid="product-price"
                                                                                       className="css-zq4evb e2qzex51">13,900원</span><span
                                                aria-label="판매 가격" data-testid="selling-price"
                                                className="css-cwmxfz e2qzex50">15,900원</span></div>
                                            <button className="css-h5zdhc eudrkjx0" type="button" data-testid="delete">
                                                <span className="css-6mgkir e5h3i930"></span></button>
                                        </li>
                                        <li className="css-1d6kgf6 esoayg811"><label
                                            className="css-14td1km e1dcessg3"><input type="checkbox"
                                                                                     className="css-agvwxo e1dcessg2"
                                                                                     checked=""/>
                                            <div className="css-79hxr7 e1dcessg1">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                                                        fill="#5f0080"></path>
                                                    <path d="M7 12.6667L10.3846 16L18 8.5" stroke="#fff"
                                                          stroke-width="1.5" stroke-linecap="round"
                                                          stroke-linejoin="round"></path>
                                                </svg>
                                            </div>
                                            <span></span></label><a className="css-1u5t3pw esoayg810"><span
                                            className="css-3negg1 esoayg89"></span></a>
                                            <div className="css-14sb0pe esoayg88"><a className="css-e0dnmk esoayg87"><p
                                                className="css-efcx1u esoayg86">유레카 블루베리 100g (왕)</p><p
                                                data-testid="content-product-name" className="css-3izcs6 esoayg85">유레카
                                                블루베리 100g 3종 (택1) (국산)</p></a>
                                                <div className="css-ar9i78 esoayg82"></div>
                                            </div>
                                            <div className="css-1gueo66 e1cqr3m40">
                                                <button type="button" aria-label="수량내리기" disabled=""
                                                        className="css-1e90glc e1hx75jb0"></button>
                                                <div className="count css-6m57y0 e1cqr3m41">1</div>
                                                <button type="button" aria-label="수량올리기"
                                                        className="css-18y6jr4 e1hx75jb0"></button>
                                            </div>
                                            <div className="css-5w3ssu esoayg84"><span aria-label="할인 가격"
                                                                                       data-testid="product-price"
                                                                                       className="css-zq4evb e2qzex51">11,990원</span><span
                                                aria-label="판매 가격" data-testid="selling-price"
                                                className="css-cwmxfz e2qzex50">14,900원</span></div>
                                            <button className="css-h5zdhc eudrkjx0" type="button" data-testid="delete">
                                                <span className="css-6mgkir e5h3i930"></span></button>
                                        </li>
                                        <li className="css-1d6kgf6 esoayg811"><label
                                            className="css-14td1km e1dcessg3"><input type="checkbox"
                                                                                     className="css-agvwxo e1dcessg2"
                                                                                     checked=""/>
                                            <div className="css-79hxr7 e1dcessg1">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                                                        fill="#5f0080"></path>
                                                    <path d="M7 12.6667L10.3846 16L18 8.5" stroke="#fff"
                                                          stroke-width="1.5" stroke-linecap="round"
                                                          stroke-linejoin="round"></path>
                                                </svg>
                                            </div>
                                            <span></span></label><a className="css-1u5t3pw esoayg810"><span
                                            className="css-3negg1 esoayg89"></span></a>
                                            <div className="css-14sb0pe esoayg88"><a className="css-e0dnmk esoayg87"><p
                                                className="css-efcx1u esoayg86">유레카 블루베리 100g (특)</p><p
                                                data-testid="content-product-name" className="css-3izcs6 esoayg85">유레카
                                                블루베리 100g 3종 (택1) (국산)</p></a>
                                                <div className="css-ar9i78 esoayg82"></div>
                                            </div>
                                            <div className="css-1gueo66 e1cqr3m40">
                                                <button type="button" aria-label="수량내리기" disabled=""
                                                        className="css-1e90glc e1hx75jb0"></button>
                                                <div className="count css-6m57y0 e1cqr3m41">1</div>
                                                <button type="button" aria-label="수량올리기"
                                                        className="css-18y6jr4 e1hx75jb0"></button>
                                            </div>
                                            <div className="css-5w3ssu esoayg84"><span aria-label="할인 가격"
                                                                                       data-testid="product-price"
                                                                                       className="css-zq4evb e2qzex51">9,990원</span><span
                                                aria-label="판매 가격" data-testid="selling-price"
                                                className="css-cwmxfz e2qzex50">12,900원</span></div>
                                            <button className="css-h5zdhc eudrkjx0" type="button" data-testid="delete">
                                                <span className="css-6mgkir e5h3i930"></span></button>
                                        </li>
                                    </ul>
                                </Box>
                            </Box>
                            <div className="css-20o6z0 e149z643">
                                <div className="css-zbxehx e149z642"><label className="css-xi6i4x e1dcessg3"><input
                                    type="checkbox" className="css-agvwxo e1dcessg2"/>
                                    <div className="css-79hxr7 e1dcessg1">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                                                fill="#5f0080"></path>
                                            <path d="M7 12.6667L10.3846 16L18 8.5" stroke="#fff" stroke-width="1.5"
                                                  stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                    <span>전체선택 (3/3)</span></label><span className="css-454d5e e149z641"></span>
                                    <button className="css-0 e149z640">선택삭제</button>
                                </div>
                            </div>
                        </Box>
                        <div className="css-1dta0ch er0tf671">
                            <div className="css-50ad8x er0tf670">
                                <div className="css-1t6so8j em21elb0">
                                    <div className="css-8jmoub ea1mry77"><span
                                        className="css-vmo0an ea1mry76">상품금액</span><span
                                        className="css-iinokh ea1mry74">43,700<span
                                        className="css-hfgifi ea1mry72">원</span></span></div>
                                    <div className="css-t4mc5m ea1mry77"><span
                                        className="css-vmo0an ea1mry76">상품할인금액</span><span
                                        className="css-iinokh ea1mry74">-7,820<span
                                        className="css-hfgifi ea1mry72">원</span></span></div>
                                    <div className="css-t4mc5m ea1mry77"><span
                                        className="css-vmo0an ea1mry76">배송비</span><span className="css-iinokh ea1mry74">+3,000<span
                                        className="css-hfgifi ea1mry72">원</span></span></div>
                                    <p className="css-2biqhz e88xo5s0">4,120원 추가주문 시, <strong>무료배송</strong></p>
                                    <div className="css-7ygxxm eepcpbj4"><span
                                        className="css-vmo0an eepcpbj3">결제예정금액</span><span
                                        className="css-da7gr8 eepcpbj2"><strong
                                        className="css-xmbce4 eepcpbj0">38,880</strong><span
                                        className="css-aro4zf eepcpbj1">원</span></span></div>
                                    <div className="css-bi9ql0 e142afjf3"><span
                                        className="css-1q66xvk e142afjf2">적립</span>로그인 후 회원 등급에 따라 적립
                                    </div>
                                </div>
                                <div className="css-8qz8ia e1mybczi1">
                                    <button className="css-fwelhw e4nu7ef3" type="button" height="56"><span
                                        className="css-nytqmg e4nu7ef1">로그인</span></button>
                                    <ul className="css-19kxq7d">
                                        <li className="css-1741abm ejr204i0">[주문완료] 상태일 경우에만 주문 취소 가능합니다.</li>
                                        <li className="css-1741abm ejr204i0">[마이컬리 &gt; 주문내역 상세페이지] 에서 직접 취소하실 수 있습니다.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Box>
                </Box>
            </Container>
            {/* 공통 푸터 영역 */}
            <Footer/>
        </>
    );
};
