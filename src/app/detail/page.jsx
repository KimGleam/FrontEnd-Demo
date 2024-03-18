'use client';

import React, {useEffect, useState} from "react";
import {
    Container,
    IconButton,
    ListItemText,
    MenuItem,
    Popover,
} from "@mui/material";
import {MenuList} from "@mui/joy";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import Footer from '../../components/footer';
import ScrollToTopButton from '../../components/ScrollToTopButton';
import InfoNaviBar from '../../components/product/InfoNaviBar';
import SelectItem from '../../components/product/SelectItem';
import SelectItemTab from '../../components/product/SelectItemTab';
import Header from "../../components/Header";
import "../../static/page.css";

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

const productInfo = {
    id: 1,
    name: '[태우한우] 1+ 한우 안심 스테이크/구이 200g (냉장)',
    note: '비단결처럼 곱고 부드러운 식감',
    discountRate: 20,
    cost: '23,000',
    discountPrice: '18,400',
    salesUnit: '1팩',
    packageType: {1: '냉장 (종이포장)', 2: '택배배송은 에코 포장이 스티로폼으로 대체됩니다.'},
    seller: '짱순전사',
    delivery: {type: '샛별배송', info: '23시 전 주문 시 내일 아침 7시 전 도착 (대구·부산·울산 샛별배송 운영시간 별도 확인)'},
    weight: '200g',
    allergyInfo: '- 소고기 함유\n- 이 제품은 돼지고기를 사용한 제품과 같은 제조시설에서 제조하고 있습니다.',
    expirationDate: '포장일로부터 최대 8일 이내 제품을 보내드립니다.',
    historyInfo: '이력번호가 표시된 제품이며, 이력번호는 수령하시는 상품 패키지에서 확인 가능합니다.',
    notification: '정육 상품의 특성상 중량은 2%내외의 차이가 발생할 수 있습니다. 보관기간이 신선도에 많은 영향을 주는 정육식품이기 때문에 수령후 최대한 빠른 시일내에 섭취를 권장드립니다. 중량에 따라 작은 조각이 함께 포장될 수 있습니다.',
    accumulateYn: false,
    menu: [
        { index: 1, name: '[태우한우] 1+ 한우 안심 스테이크/구이 200g (냉장)', cost: '23,000', discountPrice: '18,400' },
        { index: 2, name: '[태우한우] 1+ 한우 안심 스테이크/구이 600g (냉장)', cost: '52,000', discountPrice: '41,600'  }
    ]
};

const productDescription = {
    id: 1,
    fileInfo: [
        {
            sequenceNum: 1,
            path: 'https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=720,height=936,quality=85/product/image/c1ea8fff-29d9-4e12-b2f1-667d76e2bdc9.jpeg'
        },
        {
            sequenceNum: 2,
            path: '사진 경로 2'
        },
        {
            sequenceNum: 3,
            path: '사진 경로 3'
        }
    ]
};

export default function Detail() {
    const [relationIndex, setRelationIndex] = useState(0);
    // const [count, setCount] = useState(1);
    const [totalPrice, setTotalPrice] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('');
    const packageTypes = Object.keys(productInfo.packageType);
    // const selectedItems = [];
    // const count = [];
    const [selectedItems, setSelectedItems] = useState([]); // State to manage selected items
    const [count, setCount] = useState(Array(productInfo.menu.length).fill(1)); // State to manage counts

    const handleCategoryButtonClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCategoryClose = () => {
        setAnchorEl(null);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };
    // const handleCountChange = (newCount) => {
    //     if (newCount < 1) {
    //         return;
    //     }
    //     setCount(newCount);
    //
    //     // 할인 가격 문자열을 숫자로 파싱
    //     const discountPrice = parseFloat(productInfo.discountPrice.replace(/,/g, ''));
    //     // 총 가격 계산
    //     const newTotalPrice = (newCount * discountPrice).toLocaleString();
    //
    //     setTotalPrice(newTotalPrice);
    // };

    // const handleSelectItem = (selectedItem) => {
    //     const selectedMenuItem = productInfo.menu.find(item => item.index === selectedItem);
    //     selectedItems.push(selectedMenuItem);
    //
    //     const index = productInfo.menu.findIndex(item => item.index === selectedItem);
    //     count[index] = 1;
    // };

        const handleSelectItem = (selectedItem) => {
            const selectedMenuItem = productInfo.menu.find(item => item.index === selectedItem);

            setSelectedItems(prevSelectedItems => [...prevSelectedItems, selectedMenuItem]);

            const index = productInfo.menu.findIndex(item => item.index === selectedItem);
            setCount(prevCount => {
                const newCount = [...prevCount];
                newCount[index] = 1;
                return newCount;
            });
        };

    useEffect(() => {
        const updatePrice = selectedItems.reduce((total, item, idx) => {
            const itemCount = count[idx];
            // 할인 가격을 구문 분석하여 숫자로 처리
            const discountPrice = parseFloat(item.discountPrice.replace(/,/g, ''));
            return total + (discountPrice * itemCount);
        }, 0);

        // 총 가격을 쉼표가 포함된 문자열로 다시 변환
        setTotalPrice(updatePrice.toLocaleString());
    }, [selectedItems, count]);


    const handleCountChange = (index, newCount) => {
        setCount(prevCount => {
            const newCounts = [...prevCount];
            newCounts[index] = newCount;
            return newCounts;
        });


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
                        <img src={productDescription.fileInfo[0].path} alt="상품 사진" sizes="100vw"/>
                    </Box>
                    <Box flex="1">
                        <div className="css-1qy9c46">
                            <h1 className="css-79gmk3">{productInfo.name}</h1>
                            <h2 className="css-ki8mlo">{productInfo.note}</h2>
                            <button className=" css-57nu3d eaxuegm1"></button>
                        </div>
                        <h2 className="css-abwjr2">
                            <span className="css-5nirzt">{productInfo.discountRate}</span>
                            <span className="css-9pf1ze">{productInfo.discountPrice}</span>
                            <span className="css-1x9cx9j">원</span>
                        </h2>
                        <span className="css-1e1rd4p e1q8tigr0"><span>{productInfo.cost}원</span>
                    </span>
                        <p className="css-1jali72 e17iylht2">원산지: 상품설명/상세정보 참조</p>
                        <div className="css-toq1xn e1hhkg2t2">로그인 후, 적립 혜택이 제공됩니다.</div>
                        <ul className="css-iqoq9n">
                            <li className="css-e6zlnr">
                                <dt className="css-lytdfk">배송</dt>
                                <dd className="css-1k8t52o">
                                    <p className="css-c02hqi">{productInfo.delivery.type}</p>
                                    <p className="css-uy94b2">{productInfo.delivery.info}</p>
                                </dd>
                            </li>
                            <li className="css-e6zlnr">
                                <dt className="css-lytdfk">판매자</dt>
                                <dd className="css-1k8t52o"><p className="css-c02hqi e6qx2kx1">{productInfo.seller}</p>
                                </dd>
                            </li>
                            <li className="css-e6zlnr">
                                <dt className="css-lytdfk">포장타입</dt>
                                <dd className="css-1k8t52o">
                                    {packageTypes.map((info, index) => (
                                        <p className={index === 0 ? "css-c02hqi e6qx2kx1" : "css-uy94b2"} key={info}>
                                            {productInfo.packageType[info]}
                                        </p>
                                    ))}
                                </dd>
                            </li>
                            <li className="css-e6zlnr">
                                <dt className="css-lytdfk">판매단위</dt>
                                <dd className="css-1k8t52o"><p className="css-c02hqi">{productInfo.salesUnit}</p>
                                </dd>
                            </li>
                            <li className="css-e6zlnr">
                                <dt className="css-lytdfk">중량/용량</dt>
                                <dd className="css-1k8t52o"><p className="css-c02hqi">{productInfo.weight}</p>
                                </dd>
                            </li>
                            <li className="css-e6zlnr">
                                <dt className="css-lytdfk">알레르기정보</dt>
                                <dd className="css-1k8t52o"><p className="css-c02hqi"> {productInfo.allergyInfo} </p>
                                </dd>
                            </li>
                            <li className="css-e6zlnr">
                                <dt className="css-lytdfk">소비기한(또는 유통기한)정보</dt>
                                <dd className="css-1k8t52o">
                                    <p className="css-c02hqi">{productInfo.expirationDate}</p>
                                </dd>
                            </li>
                            <li className="css-e6zlnr">
                                <dt className="css-lytdfk">축산물 이력정보</dt>
                                <dd className="css-1k8t52o">
                                    <p className="css-c02hqi">{productInfo.historyInfo}</p>
                                </dd>
                            </li>
                            <li className="css-e6zlnr">
                                <dt className="css-lytdfk">안내사항</dt>
                                <dd className="css-1k8t52o">
                                    <p className="css-c02hqi">{productInfo.notification}</p>
                                </dd>
                            </li>
                        </ul>
                        <SelectItem count={count} totalPrice={totalPrice} handleCountChange={handleCountChange}
                                    productInfo={productInfo} onSelect={handleSelectItem} selectedItems={selectedItems}/>
                    </Box>
                </main>
                <InfoNaviBar/>
                {/* 드롭다운 상품 선택 영역 */}
                <SelectItemTab count={count} totalPrice={totalPrice} handleCountChange={handleCountChange}
                               productInfo={productInfo}/>
                <ScrollToTopButton/>
            </Container>
            {/* 공통 푸터 영역 */}
            <Footer/>
        </>
    );
}