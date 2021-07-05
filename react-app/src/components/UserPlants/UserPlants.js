import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUserPlants } from '../../store/plants'
import UserSinglePlant from './UserSinglePlant';
import '../UserProfile/ProfilePage.css'

const UserPlants = ({ userId }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const plantState = useSelector(state => state.plants)
    const userPlants = Object.values(plantState)
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        dispatch(getUserPlants(userId))
    }, [dispatch, userId]);



    return (
        <>
        <div className='user_plants_container'>
            {userPlants.map((plant) => 
                <UserSinglePlant plant={plant} userId={userId} />
            )}
        </div>
        </>
    )
}

export default UserPlants;