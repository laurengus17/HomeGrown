import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { createWishlist } from '../../store/wishlists';
import '../PlantPage/PlantPage.css'

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
        <div className='add_to_wishlist'>
            <form onSubmit={handleSubmit}>
            <div className='wishlist_left'>
                <h4 className='add_wishlist_text'>Add To Wishlist</h4>
            </div>
            <div className='wishlist_right'>
                <button className='plant_page_wishlist' type='submit'>
                    <i className="fas fa-leaf" />
                </button>
            </div>
            </form>
        </div>
    )
}

export default AddToWishlist;