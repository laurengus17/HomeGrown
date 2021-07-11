import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GreenhouseImage from './GreenhouseImage';
import { deleteFromGreenhouse } from '../../store/greenhouses';
import './Greenhouse.css';

const GreenhousePlant = ({ greenhouse, plants }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user)

    const handleDelete = async (id) => {
        dispatch(deleteFromGreenhouse(id))
    }


    return (
        <>
        <div className='greenhouse_container' key={greenhouse.id}>
            <div className='plant_greenhouse_container'>
            {plants.map((plant) => 
                (plant.id === greenhouse.plantId) ? 
                    <GreenhouseImage plant={plant} />
            : null )}
            </div>
            {currentUser.id === greenhouse.userId && 
            <>
            <button className='delete_from_greenhouse' onClick={() => handleDelete(greenhouse.id)}>
                <i className="fas fa-trash-alt" />
            </button>
            </>
            }
        </div>
        </>
    )
}

export default GreenhousePlant;