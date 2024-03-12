import React from 'react';

const ScrollToTopButton = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling animation
        });
    };

    return (
        <button onClick={handleScrollToTop}>
            <span className="css-8vh040 e14akbvd1">
                <img src="https://res.kurly.com/pc/service/common/1903/btn_pagetop_v2.png" alt="위로가기 아이콘" className="css-xjpx28 e14akbvd0"/>
            </span>
        </button>
    );
};

export default ScrollToTopButton;