import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../store/comments';
import EditCommentModal from './EditCommentModal';

const SingleComment = ({ comment, plantId }) => {
    const dispatch = useDispatch();

    const handleDelete = async (id) => {
        dispatch(deleteComment(id))
    }

    return (
        <>
            <div>
                <h2>{comment.title}</h2>
                <p>{comment.content}</p>
                <EditCommentModal comment={comment} plantId={plantId} />
                <button onClick={() => handleDelete(comment.id)}>
                <i className="fas fa-trash-alt" />
                </button>
            </div>
        </>
    )
}

export default SingleComment;