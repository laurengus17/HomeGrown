import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { deleteFromGreenhouse } from '../../store/greenhouses';
import PlantDisplay from '../PlantDisplay/PlantDisplay';

const GreenhousePlant = ({ greenhouse, userId, plants }) => {
    const dispatch = useDispatch();


    const handleDelete = async (id) => {
        dispatch(deleteFromGreenhouse(id))
    }

    const greenhousePlant = () => {
        plants.map((plant) => {
            if(plant.id === greenhouse.plantId) {
                return plant
            }
        })
    }


    return (
        <>
        <div key={greenhouse.id}>
            <div>
            {plants.map((plant) => 
                (plant.id === greenhouse.plantId) ? 
                    <PlantDisplay plant={plant} />
            : null )}
            </div>
            {/* <img className='plant_image' src={plant.imgURL} alt='user_plant' /> */}
            {/* <h4>{plant.name}</h4> */}
            <h4>{greenhouse.plantId}</h4>
            <button onClick={() => handleDelete(greenhouse.id)}>
                <i className="fas fa-trash-alt" />
            </button>
        </div>
        </>
    )
}

export default GreenhousePlant;