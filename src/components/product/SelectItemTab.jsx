import React, {useEffect, useState} from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const SelectItemTab = ({ count, totalPrice, handleCountChange, productInfo, onSelect, selectedItems }) => {
    const [isVisible, setIsVisible] = useState(false);

    const [updatedTotalPrice, setUpdatedTotalPrice] = useState(0);

    useEffect(() => {
        const newTotalPrice = productInfo.discountPrice ?
            parseFloat(productInfo.discountPrice * count[0]) :
            parseFloat(productInfo.regularPrice * count[0]);

        setUpdatedTotalPrice(newTotalPrice);
    }, [count, productInfo]);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="css-1absul7 e1vpfwzd4">
            <div className="css-1danc6e e1vpfwzd3">
                <button className={isVisible ? "css-137fsc1 e1ssqoh62" : "css-6fc6cj e1ssqoh62"} onClick={toggleVisibility}>
                    <span className="css-1d3si1p e1ssqoh61">상품 선택</span>
                    {isVisible ? <ArrowDropDownIcon style={{color: 'white'}}/> :
                        <ArrowDropUpIcon style={{color: 'white'}}/>}
                </button>
                {isVisible && (
                    <div>
                        <div className="css-iqoq9n e1vpfwzd2">
                            <div className="css-1dltvla e1bhvj4s10">
                                <div className="css-1x17g94 e1bhvj4s9">
                                    <span className="css-jpj1ph e1bhvj4s8">
                                        <span className="css-gad126 e1bhvj4s7">{productInfo.productName}</span>
                                        {!productInfo.accumulateYn && <span className="css-u0s929 e1bhvj4s6">적립제외상품</span>}
                                    </span>
                                    <span className="css-mk4uq1 e1bhvj4s5"><div className="css-nx0orh e1cqr3m40">
                                         <button
                                             type="button"
                                             aria-label="수량내리기"
                                             className={`css-1e90glc e1hx75jb0 ${count[0] === 1 ? 'disabled' : 'css-8azp8'}`}
                                             onClick={() => handleCountChange(0, count[0] - 1)}
                                             disabled={count[0] === 1}
                                         ></button>
                                        <div className="count css-6m57y0 e1cqr3m41">{count[0]}</div>
                                        <button
                                            type="button"
                                            aria-label="수량올리기"
                                            className="css-18y6jr4 e1hx75jb0"
                                            onClick={() => handleCountChange(0, count[0] + 1)}
                                        ></button>
                                    </div>
                                        <span className="css-1tjxd68 e1bhvj4s3">
                                           <span className="css-fburr9 e1bjklo11">{productInfo.regularPrice}원</span>
                                            {productInfo.discountPrice && (
                                                <span className="css-gqkxk8 e1bjklo10">{productInfo.discountPrice}원</span>
                                            )}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="css-8qz8ia e1vpfwzd1">
                            <div className="css-ixlb9s eebc7rx8">
                                <div className="css-yhijln eebc7rx7">
                                    <span className="css-w1is7v eebc7rx6">총 상품금액 :</span>
                                    <span className="css-x4cdgl eebc7rx5">{updatedTotalPrice}</span>
                                    <span className="css-1jb8hmu eebc7rx4">원</span>
                                </div>
                                <div className="css-1iis94s eebc7rx3"><span
                                    className="css-12p95ok eebc7rx2">적립</span><span
                                    className="css-10e9px3 eebc7rx1">로그인 후, 적립 혜택 제공</span></div>
                            </div>
                        </div>
                        <div className="css-skgbeu e1vpfwzd0">
                            <div className="css-ilrvvb e10vtr1i1">
                                <button className="css-3z91zj e4nu7ef3" type="button" width="56" height="56" radius="3">
                                <span className="css-nytqmg e4nu7ef1">
                                    <img
                                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yNS44MDcgNy44NjNhNS43NzcgNS43NzcgMCAwIDAtOC4xNzIgMEwxNiA5LjQ5N2wtMS42MzUtMS42MzRhNS43NzkgNS43NzkgMCAxIDAtOC4xNzMgOC4xNzJsMS42MzQgMS42MzQgNy40NjYgNy40NjdhMSAxIDAgMCAwIDEuNDE1IDBzMCAwIDAgMGw3LjQ2Ni03LjQ2N2gwbDEuNjM0LTEuNjM0YTUuNzc3IDUuNzc3IDAgMCAwIDAtOC4xNzJ6IiBzdHJva2U9IiM1RjAwODAiIHN0cm9rZS13aWR0aD0iMS42IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K"
                                        alt="" className="css-0"/></span>
                                </button>
                                <button className="css-3z91zj e4nu7ef3" type="button" disabled="" width="56" height="56"
                                        radius="3"><span className="css-nytqmg e4nu7ef1">
                                <img
                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHN0cm9rZT0iI0NDQyIgc3Ryb2tlLXdpZHRoPSIxLjYiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTEyLjY2NiAyM2EzLjMzMyAzLjMzMyAwIDEgMCA2LjY2NiAwIi8+CiAgICAgICAgPHBhdGggZD0iTTI1Ljk5OCAyMi43MzhINmwuMDEzLS4wM2MuMDc2LS4xMzUuNDcxLS43MDQgMS4xODYtMS43MDlsLjc1LTEuMDV2LTYuNjM1YzAtNC40ODUgMy40MzgtOC4xNCA3Ljc0MS04LjMwOEwxNiA1YzQuNDQ2IDAgOC4wNSAzLjcyMiA4LjA1IDguMzE0djYuNjM0bDEuNzA3IDIuNDExYy4xNzMuMjUzLjI1NC4zOC4yNDIuMzh6IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                                    alt="" className="css-0"/></span>
                                </button>
                                <div className="css-14jnwd7 e10vtr1i0">
                                    <button className="cart-button css-1qirdbn e4nu7ef3" type="button" radius="3">
                                        <span className="css-nytqmg e4nu7ef1">장바구니 담기</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};


export default SelectItemTab;