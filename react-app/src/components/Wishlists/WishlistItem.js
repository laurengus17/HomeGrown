import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromWishlist } from '../../store/wishlists';
import { getPlants } from '../../store/plants'
import PlantDisplay from '../PlantDisplay/PlantDisplay';


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
        <div>
            <div>
            {plants.map((plant) => 
                (plant.id === wishlist.plantId) ? 
                    <PlantDisplay plant={plant} />
            : null )}
            </div>
            <button onClick={() => handleDelete(wishlist.id)}>
                <i className="fas fa-trash-alt" />
            </button>
        </div>
        </>
    )
}

export default WishListItem;