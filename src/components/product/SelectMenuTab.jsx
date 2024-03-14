import React from 'react';

const SelectMenuTab = () => {
    const menuStyle = {
        opacity: 1,
        transform: 'none',
        minWidth: '432px',
        height: 'fit-content',
        padding: '0px',
        boxShadow: 'none',
        borderRadius: '0px',
        border: '1px solid rgb(221, 221, 221)',
        fontFamily: '"Noto Sans"',
        transition: 'opacity 251ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 167ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        top: '428px',
        left: '721px',
        transformOrigin: '216px 0px'
    };

    return (
        <div role="presentation" id="menu-" className="MuiModal-root MuiPopover-root MuiMenu-root css-1sucic7">
            <div aria-hidden="true" className="MuiBackdrop-root MuiBackdrop-invisible css-esi9ax" style={{opacity: 1, transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'}}></div>
            <div tabIndex="{}" data-test="sentinelStart"></div>
            <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiMenu-paper MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper css-yae46d" tabIndex="-1" style={menuStyle}>
                <ul className="MuiList-root MuiList-padding MuiMenu-list css-r8u8y9" role="listbox" tabIndex="{}">
                    <li className="MuiMenuItem-root MuiMenuItem-gutters MuiButtonBase-root css-1p79lf5" tabIndex="{}" role="option" aria-selected="false" data-value="10056512">
                        <div className="css-15h3zi e12wapb67">
                            <div className="css-unrh3l e12wapb66">
                                <p className="css-1k8t52o e12wapb65">
                                    <span className="css-19h9nlb e12wapb64">{}</span>
                                    <span className="css-p8vx4 e12wapb63">적립제외상품</span>
                                </p>
                                <div className="css-t4macj e12wapb62">
                                    <div className="css-x2o5fx e12wapb61">{}원</div>
                                    <div className="css-1fvrsoi e12wapb60">{}원</div>
                                </div>
                            </div>
                        </div>
                        <span className="MuiTouchRipple-root css-w0pj6f"></span>
                    </li>
                </ul>
            </div>
            <div tabIndex="0" data-test="sentinelEnd"></div>
        </div>
    );
};

export default SelectMenuTab;