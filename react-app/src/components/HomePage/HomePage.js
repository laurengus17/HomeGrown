import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPlants } from '../../store/plants'


const HomePage = () => {
    const dispatch = useDispatch();
    const plantState = useSelector(state => state.plants)
    const plants = Object.values(plantState)

    useEffect(() => {
        dispatch(getPlants())
    }, [dispatch])

    return (
        <>
            <h2>HELLO</h2>
            <Link to='/browse_all' exact={true}>
                Browse All Plants
            </Link>
        </>
    )
}

export default HomePage;