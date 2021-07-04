import React from 'react';
import '../UserProfile/ProfilePage.css'


const UserSinglePlant = ({ plant, userId }) => {

    const handleUpdate = async (e) => {
        e.preventDefault();
        
    }

    return (
        <>
        <div>
            <img className='plant_image' src={plant.imgURL} alt='user_plant' />
            <h4>{plant.name}</h4>
            <button>
                <i className="fas fa-edit" />
            </button>
            <button>
                <i className="fas fa-trash-alt" />
            </button>
        </div>
        </>
    )
}

export default UserSinglePlant;