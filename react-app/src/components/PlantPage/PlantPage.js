import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPlant, getPlants } from '../../store/plants';
import PlantComments from '../Comments/PlantComments';
import AddCommentModal from '../CommentForm/CommentModal';
import AddToWishlist from '../Wishlists/AddToWishlist';
import AddToGreenhouse from '../Greenhouses/AddToGreenhouse';
import './PlantPage.css';

const PlantPage = () => {
    const dispatch = useDispatch();
    const { plantId } = useParams(); 
    const plant = useSelector(state => state.plants.all[plantId])

    useEffect(() => {
        dispatch(getPlants())
    }, [dispatch])

    useEffect(() => {
        dispatch(getPlant(plantId))
    }, [dispatch, plantId]);

    if (!plant) {
        return null;
    }

    return (
        <>
        <div className='plant_page_container'>
            <img className='plant_image_plantpage' src={plant.imgURL} alt='plant_page' />
            <div className='plant_details_container'>
            <div><h2 className='plant_title'>{plant.name}</h2></div>
            <div><h4 className='plant_variety_text'>Variety: {plant.variety}</h4></div>
            <div>
                <h2 className='plant_title'>Description</h2> 
                <p className='description_text'>{plant.description}</p>
            </div>
            <div>
                <h2 className='plant_title'>Plant Care</h2>
                <p className='care_text'>{plant.care}</p>
            </div>   
            <div className='add_buttons'>
                <AddToGreenhouse plantId={plantId} />
                <AddToWishlist plantId={plantId} />
            </div>
            </div>
        </div>
        <div className='add_plants_button_container'>
            <AddCommentModal plantId={plantId} />
        </div>
        <div className='all_comments_container'>
            <PlantComments plantId={plantId} />
        </div>
        </>
    )
}


export default PlantPage;