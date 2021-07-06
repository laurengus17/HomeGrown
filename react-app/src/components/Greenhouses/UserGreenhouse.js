import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserGreenhouse } from '../../store/greenhouses';
import GreenhousePlant from './GreenhousePlant';

const UserGreenhouse = () => {
    const dispatch = useDispatch();
    const greenhouseState = useSelector(state => state.greenhouses)
    const userGreenhouse = Object.values(greenhouseState)
    const { userId }  = useParams();

    useEffect(() => {
        dispatch(getUserGreenhouse(userId))
    }, [dispatch, userId]);

    return (
        <>
        <h2>HELLO GREENHOUSE</h2>
        <div className='user_greenhouse_container'>
            {userGreenhouse.map((greenhouse) => 
                <GreenhousePlant greenhouse={greenhouse} userId={userId} />
            )}
        </div>
        </>
    )
}

export default UserGreenhouse;