import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPlant } from '../../store/plants';
import PlantComments from '../Comments/PlantComments';


const PlantPage = () => {
    const dispatch = useDispatch();
    const { plantId } = useParams(); 
    const plant = useSelector(state => state.plants[plantId])

    useEffect(() => {
        dispatch(getPlant(plantId))
    }, [dispatch, plantId]);

    if (!plant) {
        return 404;
    }

    return (
        <>
        <div>
            <img src={plant.imgURL} alt='plant_page' />
        </div>
        <div>
            <h2>{plant.name}</h2><span>Variety: {plant.variety}</span>
            <h2>Description</h2> <span>{plant.description}</span>
            <h2>Plant Care</h2><span>{plant.care}</span>   
        </div>
        <div>
            <button>Add Comment</button>
        </div>
        <PlantComments plantId={plantId} />
        </>
    )
}


export default PlantPage;