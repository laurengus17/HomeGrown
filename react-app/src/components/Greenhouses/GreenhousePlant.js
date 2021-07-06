import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteFromGreenhouse } from '../../store/greenhouses';


const GreenhousePlant = ({ greenhouse, userId }) => {
    const dispatch = useDispatch()

    const handleDelete = async (id) => {
        dispatch(deleteFromGreenhouse(id))
    }


    return (
        <>
        <div>
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