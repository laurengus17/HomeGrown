import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createComment } from '../../store/comments';

const CommentForm = ({ plantId }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const updateTitle = (e) => {
        setTitle(e.target.value);
    };

    const updateContent = (e) => {
        setContent(e.target.value);
    };

    const newComment = async (e) => {
        e.preventDefault();

        const userId = user.id

        let createdComment = await dispatch(createComment(title, content, plantId, userId));
        if(createdComment) {
            history.push(`/plants/${plantId}`)
        }
    }

    return (
        <>
        <h2>What Can You Tell Us About This Plant?</h2>
        <form onSubmit={newComment}>
            <div>
                <label>Title</label>
                <input
                type='text'
                name='title'
                onChange={updateTitle}
                value={title}></input>
            </div>
            <div>
                <label>Comment</label>
                <input
                type='textarea'
                name='content'
                onChange={updateContent}
                value={content}></input>
            </div>
            <button type='submit'>Submit</button>
        </form>
        </>
    )

}

export default CommentForm;