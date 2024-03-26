'use client';

import SideBarFilter from "../components/SideBarFilter";
import * as React from "react";

const ProductShow = () => {

    const [categoryChecked, setCategoryChecked] = React.useState(false);
    const [priceChecked, setPriceChecked] = React.useState(false);

    const handleCategoryChange = (event) => {
        setCategoryChecked(event.target.checked);
    };

    const handlePriceChange = (event) => {
        setPriceChecked(event.target.checked);
    };

    const products = [
        { id: 1, name: 'Product 1', price: '$10', image: 'https://images.unsplash.com/photo-1549388604-817d15aa0110' },
        { id: 2, name: 'Product 2', price: '$20', image: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3' },
        { id: 3, name: 'Product 3', price: '$30', image: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6' },
        { id: 4, name: 'Product 4', price: '$40', image: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31' },
        { id: 5, name: 'Product 5', price: '$40', image: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622' },
        { id: 6, name: 'Product 5', price: '$40', image: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62' },
    ];

    return (
        <>
            <style jsx>{`
                .css-raoddi {
                    display: grid;
                    grid-template-columns: repeat(4, 180px);
                    gap: 16px 83px;
                    overflow: hidden;
                    margin-top: 28px;
                    padding: 30px 40px;
                    border: 1px solid rgb(226, 226, 226);
                    line-height: 20px;
                    margin-block-start: 1em;
                    margin-block-end: 1em;
                    margin-inline-start: 0px;
                    margin-inline-end: 0px;
                    padding-inline-start: 40px;
                }

                .css-1h52dri {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .categoryAnchor:hover {
                    color: #4797e1; /* 마우스를 올렸을 때 텍스트 색상 변경 */
                    font-weight: bold /* 마우스를 올렸을 때 글꼴 굵게 설정 */
                }

                .categoryAnchor {
                    cursor: pointer;
                }

                .css-16ixplb {
                    display: flex;
                    -webkit-box-pack: justify;
                    justify-content: space-between;
                    -webkit-box-align: center;
                    align-items: center;
                    width: 100%;
                    height: 52px;
                    overflow: hidden;
                }

                .css-1iwixyn {
                    display: flex;
                    -webkit-box-align: center;
                    align-items: center;
                    font-weight: 500;
                    font-size: 15px;
                    line-height: 20px;
                    color: rgb(51, 51, 51);
                }

                .css-19yliod {
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 20px;
                    margin-left: 4px;
                    color: rgb(204, 204, 204);
                }

                .css-1kscq9s {
                    transition: all 250ms cubic-bezier(0.83, 0, 0.17, 1) 0s;
                    height: auto;
                    opacity: 0;
                    overflow: hidden;
                }

                .css-x67gaa {
                    list-style: none;
                    margin-bottom: 18px;
                }

                .css-s5xdrg {
                    display: flex;
                    -webkit-box-align: center;
                    align-items: center;
                }

                .css-17kh8wb {
                    display: flex;
                    -webkit-box-align: center;
                    align-items: center;
                    margin-right: 8px;
                }

                .css-1buhy1h {
                    margin-right: 4px;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 17px;
                    color: rgb(51, 51, 51);
                    display: -webkit-box;
                    overflow: hidden;
                    word-break: break-all;
                    white-space: normal;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }

                .css-ryw54y {
                    flex-shrink: 0;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 16px;
                    color: rgb(204, 204, 204);
                }
                
                .productImg {
                    position: absolute;
                    inset: 0px;
                    box-sizing: border-box;
                    padding: 0px;
                    border: none;
                    margin: auto;
                    display: block;
                    width: 0px;
                    height: 0px;
                    min-width: 100%;
                    max-width: 100%;
                    min-height: 100%;
                    max-height: 100%;
                    object-fit: cover;
                }
                
                .imageSpan {
                    box-sizing: border-box;
                    display: block;
                    overflow: hidden;
                    width: initial;
                    height: initial;
                    background: none;
                    opacity: 1;
                    border: 0px;
                    margin: 0px;
                    padding: 0px;
                    position: absolute;
                    inset: 0px;
                }
                
                .cartButton {
                    color: rgb(51, 51, 51);
                    width: 100%;
                    display: flex;
                    -webkit-box-pack: center;
                    justify-content: center;
                    -webkit-box-align: center;
                    align-items: center;
                    height: 36px;
                    line-height: 19px;
                    cursor: pointer;
                    overflow: visible;
                    background-color: transparent;
                    border: none;
                    font-size: 16px;
                    margin: 0;
                    -webkit-tap-highlight-color: transparent;
                }
                
                .productName {
                    max-height: 58px;
                    font-size: 16px;
                    line-height: 24px;
                    letter-spacing: normal;
                    display: -webkit-box;
                    overflow: hidden;
                    word-break: break-all;
                    white-space: normal;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                
            `}
            </style>
            <div style={{width: '1120px', paddingTop: '100px'}}>
                <ul className="css-raoddi">
                    <li className="css-1h52dri"><a className="categoryAnchor" style={{color: '#4797e1'}}>전체보기</a></li>
                    <li className="css-1h52dri"><a className="categoryAnchor">친환경</a></li>
                    <li className="css-1h52dri"><a className="categoryAnchor">고구마·감자·당근</a></li>
                    <li className="css-1h52dri"><a className="categoryAnchor">시금치·쌈채소·나물</a></li>
                    <li className="css-1h52dri"><a className="categoryAnchor">브로콜리·파프리카·양배추</a></li>
                    <li className="css-1h52dri"><a className="categoryAnchor">냉동·이색·간편채소</a></li>
                    <li className="css-1h52dri"><a className="categoryAnchor">오이·호박·고추</a></li>
                </ul>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <SideBarFilter></SideBarFilter>

                    <div style={{
                        display: 'grid',
                        marginLeft: '8px',
                        width: '875px',
                        height: '1200px',
                        margin: 'auto',
                        gridTemplateColumns: 'repeat(auto-fill, 280px)',
                        gap: '17px',
                        cursor: 'pointer'
                    }}>
                        {products.map(card => (
                            <div style={{display: 'flex', flexDirection: 'column', minHeight: '558px', width: '100%'}}>
                                <div style={{height: '320px', borderRadius: '5px'}}>
                                    <span style={{display: 'block', width: '100%', height: '100%'}}>
                                        <img style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            borderRadius: '4px'
                                        }}
                                             src={card.image}/>
                                    </span>
                                </div>
                                <div style={{height: '35px', marginTop: '6px', border: '1px solid rgb(221, 221, 221)'}}>
                                    <button className="cartButton">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.53516 2.70001H3.93316L5.76816 10.609H13.6482L15.2992 4.35901H4.86916M12.8582 14.933C13.0098 14.9375 13.1609 14.9115 13.3024 14.8566C13.4438 14.8017 13.5728 14.7189 13.6817 14.6132C13.7906 14.5075 13.8771 14.381 13.9363 14.2412C13.9954 14.1015 14.0258 13.9513 14.0258 13.7995C14.0258 13.6478 13.9954 13.4975 13.9363 13.3578C13.8771 13.218 13.7906 13.0915 13.6817 12.9858C13.5728 12.8801 13.4438 12.7974 13.3024 12.7424C13.1609 12.6875 13.0098 12.6615 12.8582 12.666C12.5634 12.6748 12.2836 12.798 12.0782 13.0096C11.8727 13.2213 11.7578 13.5046 11.7578 13.7995C11.7578 14.0944 11.8727 14.3778 12.0782 14.5894C12.2836 14.801 12.5634 14.9243 12.8582 14.933ZM6.49316 14.933C6.64484 14.9375 6.79589 14.9115 6.93735 14.8566C7.07881 14.8017 7.20781 14.7189 7.31669 14.6132C7.42558 14.5075 7.51214 14.381 7.57126 14.2412C7.63037 14.1015 7.66083 13.9513 7.66083 13.7995C7.66083 13.6478 7.63037 13.4975 7.57126 13.3578C7.51214 13.218 7.42558 13.0915 7.31669 12.9858C7.20781 12.8801 7.07881 12.7974 6.93735 12.7424C6.79589 12.6875 6.64484 12.6615 6.49316 12.666C6.19836 12.6748 5.91858 12.798 5.71315 13.0096C5.50773 13.2213 5.39283 13.5046 5.39283 13.7995C5.39283 14.0944 5.50773 14.3778 5.71315 14.5894C5.91858 14.801 6.19836 14.9243 6.49316 14.933Z"
                                                stroke="#333333" stroke-linecap="square" stroke-linejoin="round"></path>
                                        </svg>
                                        담기
                                    </button>
                                </div>
                                <div style={{height: '185px', marginTop: '6px', border: '1px solid black'}}>
                                    <span className="css-1qd61ut e1ms5t9c1">
                                        <span className="css-1vdqr5b e1ms5t9c0">샛별배송</span>
                                    </span>
                                    <span className="css-1dry2r1 e1c07x485">[KF365] 팽이버섯 2입</span>
                                    <p className="css-1wejlc3 e1c07x483">"최대 혜택가: 1,112원"</p>
                                    <div className="e1c07x484 discount-price css-1tl7659 ei5rudb2">
                                        <div>
                                            <span className="dimmed-price css-18tpqqq ei5rudb1">1,390
                                                <span className="won">원</span>
                                            </span>
                                        </div>
                                        <div className="discount">
                                            <span className="discount-rate css-19lkxd2 ei5rudb0">14%</span>
                                            <span className="sales-price css-18tpqqq ei5rudb1">1,190
                                                <span className="won">원</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </>
    )
}

export default ProductShow;