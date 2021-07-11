import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import EditPlantModal from '../EditAPlant/EditAPlantModal';
import { deletePlant } from '../../store/plants';
import '../UserProfile/ProfilePage.css'

const UserSinglePlant = ({ plant, userId }) => {
    const dispatch = useDispatch();

    const handleDelete = async (id) => {
        dispatch(deletePlant(id));
        window.location.reload();
    }


    return (
        <>
        <div className='single_plant_profile_container'>
            <div>
            <Link to={`/plants/${plant.id}`}>
            <img className='plant_image_profile' src={plant.imgURL} alt='user_plant' />
            </Link>
            <h4 className='plant_name_profile'>{plant.name}</h4>
            </div>
            <EditPlantModal plant={plant} userId={userId} />
            <button className='delete_plant_button_added' onClick={() => handleDelete(plant.id)}>
                <i className="fas fa-trash-alt" />
            </button>
        </div>
        </>
    )
}

export default UserSinglePlant;