import React from 'react';

const Toc = ({ data, onChangePage }) => {
    var lists = [];

    var i = 0;
    while (i < data.length) {
        lists.push(
            <li key={data[i].id}>
                <a href={"/content/" + data[i].id}
                   data-id={data[i].id}
                   onClick={(e) => {
                       e.preventDefault();
                       onChangePage(e.target.dataset.id);
                   }}>{data[i].title}
                </a>
            </li>
        );
        i = i + 1;
    }

    return (
        <nav>
            <ul>
                {lists}
            </ul>
        </nav>
    )
}

export default Toc;