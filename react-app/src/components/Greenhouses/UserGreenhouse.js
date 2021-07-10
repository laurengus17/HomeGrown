import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserGreenhouse } from '../../store/greenhouses';
import { getPlants } from '../../store/plants';
import GreenhousePlant from './GreenhousePlant';
import './Greenhouse.css';


const UserGreenhouse = () => {
    const dispatch = useDispatch();
    const { userId }  = useParams();
    const greenhouseState = useSelector(state => state.greenhouses)
    const userGreenhouse = Object.values(greenhouseState)
    const plantState = useSelector(state => state.plants.all)
    const plants = Object.values(plantState)
    const user = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(getPlants())
    }, [dispatch])

    useEffect(() => {
        dispatch(getUserGreenhouse(userId))
    }, [dispatch, userId]);

    return (
        <>
        <h2 className='greenhouse_user_title'>{user.first_name} is growing...</h2>
        <div className='user_greenhouse_container'>
            {userGreenhouse.map((greenhouse) => 
                <GreenhousePlant greenhouse={greenhouse} userId={userId} plants={plants} />
            )}
        </div>
        </>
    )
}

export default UserGreenhouse;