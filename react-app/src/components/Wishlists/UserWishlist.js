import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUserWishlist } from '../../store/wishlists';
import WishListItem from './WishlistItem';

const UserWishlist = ({ userId }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const wishlistState = useSelector(state => state.wishlist)
    const userWishlist = Object.values(wishlistState)


    useEffect(() => {
        dispatch(getUserWishlist(userId))
    }, [dispatch, userId]);



    return (
        <>
        <div className='user_wishlist_container'>
            {userWishlist.map((wishlist) => 
                <WishListItem wishlist={wishlist} userId={userId} />
            )}
        </div>
        </>
    )
}

export default UserWishlist;