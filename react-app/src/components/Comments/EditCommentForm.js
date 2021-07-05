import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateComment } from '../../store/comments';

const EditCommentForm = ({ setShowModal, comment, plantId }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const updateTitle = (e) => {
        setTitle(e.target.value);
    };

    const updateContent = (e) => {
        setContent(e.target.value);
    };

    const updateMyComment = async (e) => {
        e.preventDefault();

        const userId = user.id
        const id = comment.id

        let updatedComment = await dispatch(updateComment(id, title, content, userId, plantId));
        if(updatedComment) {
            setShowModal(false)
        }
    }

    return (
        <>
        <h2>Update Your Comment:</h2>
        <form onSubmit={updateMyComment}>
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

export default EditCommentForm;