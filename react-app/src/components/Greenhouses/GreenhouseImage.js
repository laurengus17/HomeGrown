import React from 'react';
import { Link } from 'react-router-dom';

const GreenhouseImage = ({ plant }) => {

    return (
        <>
        <Link to={`/plants/${plant.id}`}>
            <>
            <img className='plant_image_greenhouse_page' src={plant.imgURL} alt='user_plant' />
            </>
        </Link>
        </>
    )
}

export default GreenhouseImage;