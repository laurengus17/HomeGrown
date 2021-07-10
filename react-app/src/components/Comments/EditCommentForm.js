import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateComment } from '../../store/comments';
import './EditCommentModal.css';

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
        <div className='comment_edit_container'>
            <div className='comment_edit_structure'>
                <h2 className='comment_edit_title'>Update Your Comment:</h2>
                <form onSubmit={updateMyComment}>
                    <div className='comment_edit_body'>
                        <input
                        className='input'
                        placeholder={comment.title}
                        type='text'
                        name='title'
                        onChange={updateTitle}
                        value={title}></input>
                        <input
                        className='input_textarea'
                        placeholder={comment.content}
                        type='textarea'
                        name='content'
                        onChange={updateContent}
                        value={content}></input>
                    </div>
                    <button className='comment_edit_button' type='submit'>Submit</button>
                </form>
            </div>
        </div>
        </>
    )

}

export default EditCommentForm;