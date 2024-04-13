import React, { useState } from 'react';
import "../../static/page.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const SelectMenuBar = ({ onSelect, productInfo, selectedItems }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleItemClick = (item) => {
        const isAlreadySelected = selectedItems.some(selectedItem => selectedItem.index === item);

        if (isAlreadySelected) {
            alert("이미 선택한 상품입니다.");
            setIsMenuOpen(false);
        } else {
            onSelect(item);
            setIsMenuOpen(false);
        }
    };

    return (
        <div>
            <div className="MuiFormControl-root css-tzsjye">
                <div
                    variant="outlined"
                    className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl jss1 css-xald09"
                >
                    <div
                        tabIndex="0"
                        role="button"
                        aria-expanded={isMenuOpen}
                        aria-haspopup="listbox"
                        aria-label="Without label"
                        className="MuiSelect-select MuiSelect-outlined MuiOutlinedInput-input MuiInputBase-input css-qiwgdb"
                        onClick={toggleMenu}
                    >
                        상품을 선택해주세요
                    </div>
                    <input
                        aria-hidden="true"
                        tabIndex="-1"
                        className="MuiSelect-nativeInput css-1k3x8v3"
                        value=""/>
                    {isMenuOpen ? (
                        <ArrowDropUpIcon style={{color: 'black', marginRight: '10px'}}/>
                    ) : (
                        <ArrowDropDownIcon style={{color: 'black', marginRight: '10px'}}/>
                    )}
                    <fieldset aria-hidden="true"
                              className="MuiOutlinedInput-notchedOutline css-igs3ac">
                        <legend className="css-nnbavb"><span className="notranslate">​</span>
                        </legend>
                    </fieldset>
                </div>
                {isMenuOpen && (
                    <ul className="MuiList-root MuiList-padding MuiMenu-list css-r8u8y9" role="listbox" tabIndex="-1">
                        {productInfo.options.map((item, index) => (
                            <li
                                key={index}
                                className="MuiMenuItem-root MuiMenuItem-gutters MuiButtonBase-root css-1p79lf5"
                                tabIndex="0"
                                role="option"
                                aria-selected="false"
                                data-value={item.index}
                                onClick={() => handleItemClick(item.index)}
                            >
                                <div className="css-15h3zi e12wapb67">
                                    <div className="css-unrh3l e12wapb66">
                                        <p className="css-1k8t52o e12wapb65">
                                            <span className="css-19h9nlb e12wapb64">{item.productSubName}</span>
                                        </p>
                                        <div className="css-t4macj e12wapb62">
                                            <div className="css-fburr9 e1bjklo11">{item.regularPrice}원</div>
                                            {productInfo.discountPrice && (
                                                <div className="css-gqkxk8 e1bjklo10">{item.discountPrice}원</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <span className="MuiTouchRipple-root css-w0pj6f"></span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default SelectMenuBar;