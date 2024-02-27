import React from 'react';

const CreateContent = ({ onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(e.target.title.value, e.target.desc.value);
    };

    return (
        <article>
            <h2>Create</h2>
            <form action="/create_process" method="post" onSubmit={handleSubmit}>
                <p><input type="text" name="title" placeholder="title" /></p>
                <p>
                    <textarea name="desc" placeholder="description"></textarea>
                </p>
                <p>
                    <input type="submit" />
                </p>
            </form>
        </article>
    );
};

export default CreateContent;
