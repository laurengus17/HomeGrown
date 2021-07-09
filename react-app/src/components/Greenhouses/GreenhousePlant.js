import React from 'react';
import { useDispatch } from 'react-redux'
import { deleteFromGreenhouse } from '../../store/greenhouses';
import PlantDisplay from '../PlantDisplay/PlantDisplay';

const GreenhousePlant = ({ greenhouse, userId, plants }) => {
    const dispatch = useDispatch();


    const handleDelete = async (id) => {
        dispatch(deleteFromGreenhouse(id))
    }


    return (
        <>
        <div className='greenhouse_container' key={greenhouse.id}>
            <div className='plant_greenhouse_container'>
            {plants.map((plant) => 
                (plant.id === greenhouse.plantId) ? 
                    // <PlantDisplay plant={plant} />
                    <img className='plant_image' src={plant.imgURL} alt='user_plant' />
            : null )}
            </div>
            {/* <img className='plant_image' src={plant.imgURL} alt='user_plant' /> */}
            {/* <h4>{plant.name}</h4> */}
            <button onClick={() => handleDelete(greenhouse.id)}>
                <i className="fas fa-trash-alt" />
            </button>
        </div>
        </>
    )
}

export default GreenhousePlant;