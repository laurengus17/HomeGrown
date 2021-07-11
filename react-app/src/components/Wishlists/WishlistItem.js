import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromWishlist } from '../../store/wishlists';
import { getPlants } from '../../store/plants'
import WishlistPlantImage from './WishlistImage';

const WishListItem = ({ wishlist, userId }) => {
    const dispatch = useDispatch()
    const plantState = useSelector(state => state.plants.all)
    const plants = Object.values(plantState)

    const handleDelete = async (id) => {
        dispatch(deleteFromWishlist(id))
    }

    useEffect(() => {
        dispatch(getPlants())
    }, [dispatch])

    return (
        <>
        <div className='wishlist_items_container'>
            <div className='plant_wishlist_div'>
            {plants.map((plant) => 
                (plant.id === wishlist.plantId) ? 
                    <WishlistPlantImage plant={plant} />
            : null )}
            </div>
            <div className='move_button'>
            <button className='delete_wishlist_profile' onClick={() => handleDelete(wishlist.id)}>
                <i className="fas fa-trash-alt" />
            </button>
            </div>
        </div>
        </>
    )
}

export default WishListItem;