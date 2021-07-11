import React from 'react';
import { Link } from 'react-router-dom';
import '../UserProfile/ProfilePage.css'


const WishlistPlantImage = ({ plant }) => {

    return (
        <>
        <div className='single_plant_profile_container'>
            <div>
            <Link to={`/plants/${plant.id}`}>
            <img className='plant_image_profile' src={plant.imgURL} alt='user_plant' />
            </Link>
            <h4 className='plant_name_profile'>{plant.name}</h4>
            </div>
        </div>
        </>
    )
}

export default WishlistPlantImage;