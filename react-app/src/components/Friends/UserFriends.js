import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserFriends } from '../../store/friends';
import AllUsers from './AllUsers';

const UserFriends = () => {
    const dispatch = useDispatch();
    const { userId }  = useParams();
    const friends = useSelector(state => state.friends)
    console.log(friends)

    useEffect(() => {
        dispatch(getUserFriends())
    }, [dispatch])


    return (
        <>
        <h2>HELLO FRIENDS</h2>
        <div className='user_friends_container'>
            <AllUsers />
        </div>
        <div></div>
        </>
    )
}

export default UserFriends;