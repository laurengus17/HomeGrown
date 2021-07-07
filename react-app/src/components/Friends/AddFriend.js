import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { createFriend } from '../../store/friends'

function AddFriend({ userId, friendId}) {
    const history = useHistory();
    const dispatch = useDispatch();

    const addFriend = async (e) => {
        e.preventDefault();

        let addFriend = await dispatch(createFriend(userId, friendId));
        if (addFriend) {
            history.push(`/friends/${userId}`)
        }
    }

    return (
        <>
        <button onClick={addFriend}>
            <i className="fas fa-user-plus" />
        </button>
        </>
    );
}

export default AddFriend;