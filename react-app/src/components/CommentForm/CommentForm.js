import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createComment } from '../../store/comments';
import './CommentModal.css'

const CommentForm = ({ setShowModal, plantId }) => {
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

    const newComment = async (e) => {
        e.preventDefault();

        const userId = user.id

        let createdComment = await dispatch(createComment(title, content, userId, plantId));
        if(createdComment) {
            setShowModal(false)
        }
    }

    return (
        <div className='comment_add_container'>
            <div className='comment_add_structure'>
                <h2 className='comment_add_title'>What Can You Tell Us About This Plant?</h2>
                <form onSubmit={newComment}>
                    <div className='comment_add_body'>
                        <input
                        placeholder='Title'
                        className='input'
                        type='text'
                        name='title'
                        onChange={updateTitle}
                        value={title}></input>
                        <input
                        placeholder='Comment'
                        className='input_textarea'
                        type='textarea'
                        name='content'
                        onChange={updateContent}
                        value={content}></input>
                    </div>
                    <button className='comment_add_button' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )

}

export default CommentForm;