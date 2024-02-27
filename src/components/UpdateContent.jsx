import React, { useState } from 'react';

const UpdateContent = ({ data, onSubmit }) => {
    const [id, setId] = useState(data.id);
    const [title, setTitle] = useState(data.title);
    const [desc, setDesc] = useState(data.desc);

    const inputFormHandler = (e) => {
        if (e.target.name === 'title') {
            setTitle(e.target.value);
        } else if (e.target.name === 'desc') {
            setDesc(e.target.value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(id, title, desc);
    };

    return (
        <article>
            <h2>Update</h2>
            <form action="/update_process" method="post" onSubmit={handleSubmit}>
                <input type="hidden" name="id" value={id} />
                <p>
                    <input type="text" name="title" placeholder="title" value={title} onChange={inputFormHandler} />
                </p>
                <p>
                    <textarea name="desc" placeholder="description" value={desc} onChange={inputFormHandler}></textarea>
                </p>
                <p>
                    <input type="submit" />
                </p>
            </form>
        </article>
    );
};

export default UpdateContent;
