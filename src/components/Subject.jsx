import React from 'react';

const Subject = ({ title, sub, onChangePage }) => {
    const handleClick = (e) => {
        e.preventDefault();
        onChangePage();
    };

    return (
        <header>
            <h1><a href="/" onClick={handleClick}>{title}</a></h1>
            {sub}
        </header>
    );
};

export default Subject;
