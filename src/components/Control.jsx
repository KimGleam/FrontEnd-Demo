import React from 'react';

const Control = ({ onChangeMode }) => {
    const handleCreateClick = (e) => {
        e.preventDefault();
        onChangeMode('create');
    };

    const handleUpdateClick = (e) => {
        e.preventDefault();
        onChangeMode('update');
    };

    const handleDeleteClick = (e) => {
        e.preventDefault();
        onChangeMode('delete');
    };

    return (
        <ul>
            <li><a href="/create" onClick={handleCreateClick}>create</a></li>
            <li><a href="/update" onClick={handleUpdateClick}>update</a></li>
            <li><input type="button" value="delete" onClick={handleDeleteClick} /></li>
        </ul>
    );
};

export default Control;