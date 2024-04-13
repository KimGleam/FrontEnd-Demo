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
import Header from "../../components/Header";
import Footer from '../../components/footer';
import ScrollToTopButton from '../../components/ScrollToTopButton';
import InfoNaviBar from '../../components/product/InfoNaviBar';
import SelectItem from '../../components/product/SelectItem';
import SelectItemTab from '../../components/product/SelectItemTab';
import Detail from '../../components/product/Detail';
import Description from '../../components/product/Description';
import Review from '../../components/product/Review';
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

export default function ProductDetail() {
    const [productInfo, setProductInfo] = useState({
        options: [],
        productName: '',
        productSubName: '',
        categoryCode: '',
        productImage: '',
        detailImage: '',
        regularPrice: 0,
        discountPrice: 0,
        discountRate: 0,
        seller: '',
        packageType: '',
        weight: '',
        salesUnit: '',
        allergyInfo: '',
        deliveryInfo: '',
        livestockHistoryInfo: '',
        notification: '',
        carefulInfo: '',
        expirationDate: '',
        salesCount: 0
    });
    const [count, setCount] = useState([]);
    const [totalPrice, setTotalPrice] = useState('');
    const [selectedItems, setSelectedItems] = useState([]); // State to manage selected items
    const [anchorEl, setAnchorEl] = useState(null);

    const handleCategoryButtonClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCategoryClose = () => {
        setAnchorEl(null);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleSelectItem = (selectedItem) => {
        const selectedMenuItem = productInfo.productOptions.find(item => item.index === selectedItem);

        setSelectedItems(prevSelectedItems => [...prevSelectedItems, selectedMenuItem]);

        const index = productInfo.menu.findIndex(item => item.index === selectedItem);
        setCount(prevCount => {
            const newCount = [...prevCount];
            newCount[index] = 1;
            return newCount;
        });
    };

    const handleCountChange = (index, newCount) => {
        setCount(prevCount => {
            const newCounts = [...prevCount];
            newCounts[index] = newCount;
            return newCounts;
        });
    };

    const fetchProductInfo = async () => {
        try {
            const response = await fetch('http://localhost:8080/goods/detail?productId=5372');
            if (response.ok) {
                const data = await response.json();
                updateProductState(data);
            } else {
                console.error('Failed to fetch product information:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching product information:', error);
        }
    };

    const updateProductState = (data) => {
        const {
            productName,
            productSubName,
            categoryCode,
            productImage,
            detailImage,
            regularPrice,
            discountPrice,
            discountRate,
            seller,
            packageType,
            weight,
            salesUnit,
            salesCount,
            allergyInfo,
            deliveryInfo,
            livestockHistoryInfo,
            notification,
            carefulInfo,
            expirationDate
        } = data.result[0];

        setProductInfo({
            ...productInfo,
            productName: productName,
            productSubName: productSubName,
            categoryCode: categoryCode,
            productImage: productImage,
            detailImage: detailImage,
            regularPrice: regularPrice,
            discountPrice: discountPrice,
            discountRate: discountRate,
            seller: seller,
            packageType: packageType,
            weight: weight,
            salesUnit: salesUnit,
            salesCount: salesCount,
            allergyInfo: allergyInfo,
            deliveryInfo: deliveryInfo,
            livestockHistoryInfo: livestockHistoryInfo,
            notification: notification,
            carefulInfo: carefulInfo,
            expirationDate: expirationDate
        });
    };

    useEffect(() => {
        fetchProductInfo();
    }, []);

    useEffect(() => {
        const initialCount = productInfo.options.length > 0 ? Array(productInfo.options.length).fill(1) : [1];
        setCount(initialCount);
    }, [productInfo]);

    useEffect(() => {
        const updatePrice = productInfo.options
            ? selectedItems.reduce((total, item, idx) => {
                const itemCount = count[idx];
                const price = item.discountPrice ? parseFloat(item.discountPrice) : parseFloat(item.regularPrice);
                return total + (price * itemCount);
            }, 0)
            : productInfo.discountPrice
                ? parseFloat(productInfo.discountPrice) * count[0]
                : parseFloat(productInfo.regularPrice) * count[0];

        setTotalPrice(updatePrice.toLocaleString());
    }, [selectedItems, count, productInfo]);



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
                        {productInfo.productImage && (
                            <img src={productInfo.productImage} alt="상품 사진" sizes="100vw"/>
                        )}
                    </Box>
                    <Box flex="1">
                        <div className="css-1qy9c46">
                            {productInfo.productName && (
                                <h1 className="css-79gmk3">{productInfo.productName}</h1>
                            )}
                            {productInfo.productSubName && (
                                <h2 className="css-ki8mlo">{productInfo.productSubName}</h2>
                            )}
                            <button className=" css-57nu3d eaxuegm1"></button>
                        </div>
                        {productInfo.discountRate > 0 && productInfo.discountPrice > 0 && (
                            <div className="css-abwjr2">
                                <h2>
                                    <span className="css-5nirzt">{productInfo.discountRate}%</span>
                                    <span className="css-9pf1ze">{productInfo.discountPrice}</span>
                                    <span className="css-1x9cx9j">원</span>
                                </h2>
                                <span className="css-1e1rd4p e1q8tigr0"><span>{productInfo.regularPrice}원</span></span>
                            </div>
                        )}
                        {!productInfo.discountRate && !productInfo.discountPrice && productInfo.regularPrice && (
                            <h2 className="css-abwjr2">
                                <span className="css-9pf1ze">{productInfo.regularPrice}</span>
                                <span className="css-1x9cx9j">원</span>
                            </h2>
                        )}

                        <p className="css-1jali72 e17iylht2">원산지: 상품설명/상세정보 참조</p>
                        <div className="css-toq1xn e1hhkg2t2">로그인 후, 적립 혜택이 제공됩니다.</div>
                        <ul className="css-iqoq9n">
                            {productInfo.deliveryInfo && (
                                <li className="css-e6zlnr">
                                    <dt className="css-lytdfk">배송</dt>
                                    <dd className="css-1k8t52o">
                                        <p className="css-c02hqi">{productInfo.deliveryInfo.split('\n')[0]}</p>
                                        {productInfo.deliveryInfo.split('\n')[1] &&
                                            <p className="css-uy94b2">{productInfo.deliveryInfo.split('\n')[1]}</p>}
                                    </dd>

                                </li>
                            )}
                            {productInfo.seller && (
                                <li className="css-e6zlnr">
                                    <dt className="css-lytdfk">판매자</dt>
                                    <dd className="css-1k8t52o"><p className="css-c02hqi e6qx2kx1">{productInfo.seller}</p></dd>
                                </li>
                            )}
                            {productInfo.packageType && (
                                <li className="css-e6zlnr">
                                    <dt className="css-lytdfk">포장타입</dt>
                                    <dd className="css-1k8t52o">
                                        {productInfo.packageType && (
                                            <>
                                                <p className="css-c02hqi e6qx2kx1">{productInfo.packageType.split(')')[0]})</p>
                                                {productInfo.deliveryInfo.split('\n')[1] && (
                                                    <p className="css-uy94b2 e6qx2kx0">{productInfo.packageType.split(')')[1]}</p>
                                                )}
                                            </>
                                        )}
                                    </dd>
                                </li>

                            )}
                            {productInfo.salesUnit && (
                                <li className="css-e6zlnr">
                                    <dt className="css-lytdfk">판매단위</dt>
                                    <dd className="css-1k8t52o"><p className="css-c02hqi">{productInfo.salesUnit}</p></dd>
                                </li>
                            )}
                            {productInfo.weight && (
                                <li className="css-e6zlnr">
                                    <dt className="css-lytdfk">중량/용량</dt>
                                    <dd className="css-1k8t52o"><p className="css-c02hqi">{productInfo.weight}</p></dd>
                                </li>
                            )}
                            {productInfo.allergyInfo && (
                                <li className="css-e6zlnr">
                                    <dt className="css-lytdfk">알레르기정보</dt>
                                    <dd className="css-1k8t52o"><p className="css-c02hqi"> {productInfo.allergyInfo} </p></dd>
                                </li>
                            )}
                            {productInfo.expirationDate && (
                                <li className="css-e6zlnr">
                                    <dt className="css-lytdfk">소비기한(또는 유통기한)정보</dt>
                                    <dd className="css-1k8t52o">
                                        <p className="css-c02hqi">{productInfo.expirationDate}</p>
                                    </dd>
                                </li>
                            )}
                            {productInfo.livestockHistoryInfo && (
                                <li className="css-e6zlnr">
                                    <dt className="css-lytdfk">축산물 이력정보</dt>
                                    <dd className="css-1k8t52o">
                                        <p className="css-c02hqi">{productInfo.livestockHistoryInfo}</p>
                                    </dd>
                                </li>
                            )}
                            {productInfo.carefulInfo && (
                                <li className="css-e6zlnr">
                                    <dt className="css-lytdfk">유의사항</dt>
                                    <dd className="css-1k8t52o">
                                        <p className="css-c02hqi">{productInfo.notification}</p>
                                    </dd>
                                </li>
                            )}
                            {productInfo.notification && (
                                <li className="css-e6zlnr">
                                    <dt className="css-lytdfk">안내사항</dt>
                                    <dd className="css-1k8t52o">
                                        <p className="css-c02hqi">{productInfo.notification}</p>
                                    </dd>
                                </li>
                            )}
                        </ul>
                        <SelectItem count={count} totalPrice={totalPrice} handleCountChange={handleCountChange}
                                    productInfo={productInfo} onSelect={handleSelectItem} selectedItems={selectedItems}/>
                    </Box>
                </main>
                <InfoNaviBar/>
                {/*<Description/>*/}
                <Detail productInfo={productInfo} />
                {/*<Review/>*/}
                {/* 드롭다운 상품 선택 영역 */}
                <SelectItemTab  count={count} totalPrice={totalPrice} handleCountChange={handleCountChange}
                                productInfo={productInfo} onSelect={handleSelectItem} selectedItems={selectedItems}/>
                <ScrollToTopButton/>
            </Container>
            {/* 공통 푸터 영역 */}
            <Footer/>
        </>
    );
}