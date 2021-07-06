import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteFromWishlist } from '../../store/wishlists';


const WishListItem = ({ wishlist, userId }) => {
    const dispatch = useDispatch()

    const handleDelete = async (id) => {
        dispatch(deleteFromWishlist(id))
    }


    return (
        <>
        <div>
            {/* <img className='plant_image' src={plant.imgURL} alt='user_plant' /> */}
            {/* <h4>{plant.name}</h4> */}
            <h4>{wishlist.plantId}</h4>
            <button onClick={() => handleDelete(wishlist.id)}>
                <i className="fas fa-trash-alt" />
            </button>
        </div>
        </>
    )
}

export default WishListItem;