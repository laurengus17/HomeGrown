import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment } from '../../store/comments';
import EditCommentModal from './EditCommentModal';
import '../PlantPage/PlantPage.css';

const SingleComment = ({ comment, plantId }) => {
    const dispatch = useDispatch();
    const [users, setUsers] = useState([]);
    const currentUser = useSelector(state => state.session.user)

    const handleDelete = async (id) => {
        dispatch(deleteComment(id))
    }

    useEffect(() => {
        async function fetchData() {
        const response = await fetch('/api/users/');
        const responseData = await response.json();
        setUsers(responseData.users);
        }
        fetchData();
    }, []);

    const userImage = users.map((user) => {
        if(user.id === comment.userId) {
            return (
                <div>
                    <img className='profile_comment' src={user.imgURL} alt='profile' />
                </div>
            )
        }
    });

    const userName = users.map((user) => {
        if(user.id === comment.userId) {
            return (
                <h4 className='username_comment'>- {user.username}</h4>
            )
        }
    });


    return (
        <>
            <div className='single_comment_container'>
                {userImage}
                <div>
                    <h2 className='comment_title'>{comment.title}</h2>
                    <p className='comment_content'>{comment.content}</p>
                    {userName}
                </div>
                {currentUser.id === comment.userId && 
                <>
                    <EditCommentModal comment={comment} plantId={plantId} />
                    <button className='delete_comment_button' onClick={() => handleDelete(comment.id)}>
                    <i className="fas fa-trash-alt" />
                    </button>
                </>
                }
            </div>
        </>
    )
}

export default SingleComment;