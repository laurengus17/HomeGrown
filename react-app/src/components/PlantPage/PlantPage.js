import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPlant } from '../../store/plants';
import PlantComments from '../Comments/PlantComments';
import AddCommentModal from '../CommentForm/CommentModal';
import AddToWishlist from '../Wishlists/AddToWishlist';
import AddToGreenhouse from '../Greenhouses/AddToGreenhouse';

const PlantPage = () => {
    const dispatch = useDispatch();
    const { plantId } = useParams(); 
    const plant = useSelector(state => state.plants[plantId])

    useEffect(() => {
        dispatch(getPlant(plantId))
    }, [dispatch, plantId]);

    if (!plant) {
        return null;
    }

    return (
        <>
        <div>
            <img src={plant.imgURL} alt='plant_page' />
        </div>
        <div>
            <h2>{plant.name}</h2><span>Variety: {plant.variety}</span>
            <AddToGreenhouse plantId={plantId} />
            <h2>Description</h2> <span>{plant.description}</span>
            <h2>Plant Care</h2><span>{plant.care}</span>   
        </div>
        <div>
            <AddToWishlist plantId={plantId} />
        </div>
        <div>
            <AddCommentModal plantId={plantId} />
        </div>
        <PlantComments plantId={plantId} />
        </>
    )
}


export default PlantPage;