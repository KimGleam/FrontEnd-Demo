import React from 'react';

const ReadContent = ({ title, desc }) => {
    return (
        <article>
            <h2>{title}</h2>
            {desc}
        </article>
    );
};

export default ReadContent;