import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { createWishlist } from '../../store/wishlists';

const AddToWishlist = ({ plantId }) => {
    const user = useSelector(state => state.session.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const plantIdInt = parseInt(plantId, 10)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userId = user.id

        let createdWishlist = await dispatch(createWishlist(userId, plantIdInt));
        if (createdWishlist) {
            history.push(`/users/${userId}`)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <button type='submit'>
                <i className="fas fa-leaf" />
            </button>
            </form>
        </div>
    )
}

export default AddToWishlist;