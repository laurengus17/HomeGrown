import React, { useEffect, useState } from 'react';
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
    const [users, setUsers] = useState([]);

    const userInt = parseInt(userId, 10)

    useEffect(() => {
        async function fetchData() {
        const response = await fetch('/api/users/');
        const responseData = await response.json();
        setUsers(responseData.users);
        }
        fetchData();
    }, []);

    useEffect(() => {
        dispatch(getPlants())
    }, [dispatch])

    useEffect(() => {
        dispatch(getUserGreenhouse(userId))
    }, [dispatch, userId]);

    const userFirstName = users.map((user) => {
        return (
            <>
            {user.id === userInt ? 
            <span>{user.first_name}</span>
            : null }
            </>
        )
    });

    return (
        <>
        <h2 className='greenhouse_user_title'>{userFirstName} is growing...</h2>
        <div className='user_greenhouse_container'>
            {userGreenhouse.map((greenhouse) => 
                <GreenhousePlant greenhouse={greenhouse} userId={userId} plants={plants} />
            )}
        </div>
        </>
    )
}

export default UserGreenhouse;