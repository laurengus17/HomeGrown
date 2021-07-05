import React from 'react';
import { useDispatch } from 'react-redux';
import EditPlantModal from '../EditAPlant/EditAPlantModal';
import { deletePlant } from '../../store/plants';
import '../UserProfile/ProfilePage.css'


const UserSinglePlant = ({ plant, userId }) => {
    const dispatch = useDispatch()

    const handleDelete = async (id) => {
        dispatch(deletePlant(id))
    }


    return (
        <>
        <div>
            <img className='plant_image' src={plant.imgURL} alt='user_plant' />
            <h4>{plant.name}</h4>
            <EditPlantModal plant={plant} userId={userId} />
            <button onClick={() => handleDelete(plant.id)}>
                <i className="fas fa-trash-alt" />
            </button>
        </div>
        </>
    )
}

export default UserSinglePlant;